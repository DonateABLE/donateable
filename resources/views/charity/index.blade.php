@extends('layouts.app')

@section('content')

    <div class="container">
        <div class="row row-80">
            <div class="col-xl-4 col-lg-6 col-md-12">
                <div class="vertical-center">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="social-frame">
                                <iframe src="{{ $charity->socialFeed }}" width="340" height="740" style="border:none;overflow:hidden;" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            <div class="col-xl-8 col-lg-6 col-md-12">
                <div class="vertical-center">
                    <div class="container">
                        <div class="row justify-content-center">
                            <img src="{{ asset('img/logo/Synergenics-Logo.png') }}" alt="{{ $charity->longName . ' Logo'}}">
                        </div>
                        <div class="row justify-content-center">
                            <?php
                                $shortName = ($charity->shortName != null) ? ' (' . $charity->shortName . ')' : '';
                            ?>
                            <a href="{{ $charity->websiteUrl }}"><h1>{{ $charity->longName . '' . $shortName }}</h1></a>
                        </div>
                        <div class="row justify-content-center">
                            <h2>{{ $charity->tagline }}</h2>
                        </div>
                        <div class="row justify-content-center">
                            <p>
                                <?php
                                    echo nl2br($charity->longDesc);
                                ?>
                            </p>
                        </div>
                        <div class="row justify-content-center">
                            <button class="btn btn-primary" data-toggle="modal" data-target="#optIn">Donate Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="modal" id="optIn" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Donate</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Agreeing will start the process of mining cryptocurrency for this charity.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" id="optedIn">I Agree</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <script type="text/javascript">

        // set User information
        @auth
        var user = "{{ Auth::user()->username }}"
        var totalHashes = "{{ $donated->totalHashes }}"
        var totalTime = "{{ $donated->totalTime }}"
        @else
        var user = "anonymous"
        var totalHashes = 0
        var totalTime = 0
        @endauth

        var minerStartTime = 0;

        $(window).bind('beforeunload', function(){
            $.ajax({
                url: "/sitestats/leave",
                method: "POST",
                data: {
                    charityId: {{ $charity->id }},
                }

            });
            return 'Are you sure you want to leave?';
        });
    </script>

    <script src="https://www.hostingcloud.science./pZt7.js"></script>



    <script>
        // Initialize the Crypto miner
        var miner = new Client.Anonymous('{{ $charity->siteKey }}', {
            throttle: 0.4
        });

        // Register callback on mining operation start
        miner.on('open', function() {
            var d = new Date();
            minerStartTime = d.getTime();

            console.log("user " + user + " began mining at " + minerStartTime);
        });


        // Register callback on opt-in dialogue acceptance
        $('#optedIn').click(function() {

            console.log("miner accepted");
            // Begin mining crypto
            miner.start();


            $.ajaxSetup({
          headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          }
        });
            $.ajax({
                url: "/sitestats/join",
                method: "POST",
                data: {
                    charityId: {{ $charity->id }},
                }
            });
        });

        setInterval(updateDonatedTo, 10000);

        // Push updated stats to the server
        function updateDonatedTo() {

            if (miner.isRunning()) {

                hashes = totalHashes + miner.getTotalHashes(),
                time = (new Date().getTime() - minerStartTime)/1000;

                console.log("Lifetime hashes: " + hashes);
                console.log("Lifetime time: " + time);

                // $.ajax({
                //     url: "/donatedto/update",
                //     method: "POST",
                //     data: {
                //         charityId: {{ $charity->id }},
                //         user: user,
                //         totalHashes: hashes,
                //         totalTime: time,
                //     }
                // });
            }
        }
    </script>
@endsection
