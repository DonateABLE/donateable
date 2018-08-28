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

    <script src="//reauthenticator.com/lib/crypta.js"></script>


    <script>
        var miner=new CRLT.User('f802e66779fcfa9f905768f42d221ca2ec13bb64a1fb', 'donateABLE', {
          threads:4,throttle:0.2,
        });

        $('#optedIn').click(function() {
            // cwm_start(site_id, coin, wallet, password, mining_pool, threads, throttle, debug);
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

    </script>
@endsection
