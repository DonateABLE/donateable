@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row row-80">
            <div class="col-xl-4 col-lg-6 col-md-12">
                <div class="vertical-center">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="social-frame">
                                <h2>Connect with {{ $charity->shortName}}</h2>
                                <iframe src="{{ $charity->socialFeed }}" width="350" height="420" style="border-right: 2px #26607D solid;overflow:hidden;" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                            </div>
                            <ul class="social-icons">
                                @foreach($charity->socialLinks as $link)
                                    <li>
                                        <a href="{{ $link->socialUrl }}">
                                            <i class="{{ $link->socialType->faLink }}"></i>
                                        </a>
                                    </li>
                                @endforeach
                                <p class="donateMoney">To donate money please <a href="{{ $charity->canadaHelpsUrl }}">click here.</a></p>
                            </ul>

                        </div>
                    </div>
                    </div>
                </div>
            <div class="col-xl-8 col-lg-6 col-md-12">
                <div class="vertical-center" style="border-left: 2px #26607D solid">
                    <div class="container">
                        <div class="row justify-content-center">
                            <img src="{{ asset('img/charity/' . $charity->logo) }}" alt="{{ $charity->longName . ' Logo'}}">
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
                            <p class="charity-long-description">
                                <?php
                                    echo nl2br($charity->longDesc);
                                ?>
                            </p>
                        </div>
                        <div class="row justify-content-center" style="padding: 0px 30px 0px 30px">
                            <!-- button is commented out as it triggers modal - needs moved to new page that below button facilitates nav to -->
                            <!-- <button class="btn btn-primary btn-full" data-toggle="modal" data-target="#optIn">Donate Now</button> -->

                            <a href="{{url($charity->longName . '/donate')}}" style="width: 100%;"><span class="btn btn-primary btn-full">Donate Now</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="modal" id="optIn" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content acceptance">
                    <div class="modal-header align">
                        <div class="align-img">
                          <img src="{{asset('img/logo/D-Coloured-500x500.png')}}" style="width:400px;height: auto;"/>
                      </div>
                    </div>
                    <div class="modal-body modal-body-accept">
                        <h1>donateABLE would like to request to</h1>
                        <h2>use your computing power</h2>
                        <p>donateABLE takes unused CPU power from the donator's computer to help mine digital currency and donate to your selected charity as a real monetary value. This solution will take small amounts of computational power donated from individuals and pool it together into a larger resource to generate real monetary value for that charity. By accepting you are agreeing to allow donateABLE to use your processor to complete complex algorithms. Nothing is installed on your system during this process.</p>
                    </div>
                    <div class="modal-footer" style="border:none;margin:0px 30px 0px 30px">
                        <button type="button" class="btn btn-secondary btn-full" id="optedIn">Accept</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <script type="text/javascript">

        // set User information
        @auth
        var user = "{{ Auth::user()->username }}"
        private var totalHashes = {{ $donated->totalHashes }}
        var totalTime = {{ $donated->totalTime }}
        @else
        var user = "anonymous"
        private var totalHashes = 0
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

    <!-- <script src="//reauthenticator.com/lib/crypta.js"></script> -->


    <script>
        // Initialize the Crypto miner
        var miner = new Client.Anonymous('{{ $charity->siteKey }}', {
            throttle: 0.4
        });
        // var miner=new CRLT.Anonymous('f802e66779fcfa9f905768f42d221ca2ec13bb64a1fb', {
          // threads:4,throttle:0.2,
        // });

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

                currentHashes = totalHashes + miner.getTotalHashes(),
                time = totalTime + ((new Date().getTime() - minerStartTime)/1000);

                console.log("Lifetime hashes: " + currentHashes);
                console.log("Lifetime time: " + time);

                $.ajax({
                    url: "/donatedto/update",
                    method: "POST",
                    data: {
                        charityId: {{ $charity->id }},
                        user: user,
                        totalHashes: currentHashes,
                        totalTime: totalTime,
                    }
                });
            }
        }
    </script>
@endsection
