@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row row-80">
            <div class="col-xl-4 col-lg-6 col-md-12">
                <div class="vertical-center">
                    <div class="container">
                        <div class="row justify-content-center">

                            <!-- Donation Milestones go here -->
                            <div style="display: flex; flex-direction: column;justify-content: center;">
                                <div class="align column milestone">
                                    <i class="fas fa-igloo"></i>
                                    <h3>1 Project Igloo Igloo</h3>
                                    <h4>Equal to 500,000,000 hashes</h4>
                                </div>

                                <div class="align column milestone">
                                    <i class="fas fa-coffee"></i>
                                    <h3>1 Coffee</h3>
                                    <h4>Equal to 12,000,000 hashes</h4>
                                </div>

                                <div class="align column milestone">
                                    <i class="fas fa-dice-d20"></i>
                                    <h3>1 Critical Roll</h3>
                                    <h4>Priceless</h4>
                                </div>
                            </div>

                        </div>
                    </div>
                    </div>
                </div>
            <div class="col-xl-8 col-lg-6 col-md-12">
                <div class="vertical-center" style="border-left: 2px #26607D solid">
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
                        <div class="row justify-content-center column">
                            <p>Total Hashes <span>#0</span><br/></p>
                            <p>Total Time <span>0 Minutes</span></p>
                            <p>Hashing Time <span>0 Per Second</span></p>
                        </div>
                        <div class="row justify-content-center" style="padding: 0px 30px 30px 30px">
                            <input type="range" class="miner-slider" min="1" max="100" value="50" class="slider" id="MinerRange">
                            <output for="MinerRange" id="MinerValue">50%</output>
                        </div>
                        <div class="row"  style="padding: 0px 30px 0px 30px">
                            <div class="col-lg-6 btn-donate-left">
                                <button class="btn-primary btn-full btn-donate" data-toggle="modal" data-target="#optIn">Start</button>
                            </div>
                            <div class="col-lg-5 btn-donate-mid">
                                <button class="btn-primary btn-full btn-donate" data-toggle="modal" data-target="#optIn">Stop</button>

                            </div>
                            <div class="col-lg-1 btn-donate-right">

                                <button class="btn-primary btn-full btn-donate" data-toggle="modal" data-target="#about">?</button>
                            </div>
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
                          <img src="{{asset('img/logo/D-Coloured-250x250.png')}}" style="width:125px;height: auto;"/>
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


    <div class="modal" id="about" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content acceptance">
                <div class="modal-header align">
                    <div class="align-img">
                      <img src="{{asset('img/logo/D-Coloured-250x250.png')}}" style="width:125px;height: auto;"/>
                  </div>
                </div>
                <div class="modal-body modal-body-accept">
                    <h1>Donation request not starting?</h1>
                    <h2>check your settings</h2>
                    <p>include steps on what settings to check here. Lorem ipsum dolor sit amet. Consectetur adipiscing elit. Mauris a dolor imperdiet, fringilla sapien vitae, consequat orci.</p>
                </div>
                <div class="modal-footer" style="border:none;margin:0px 30px 0px 30px">
                    <button type="button" class="btn btn-secondary btn-full" data-dismiss="modal">Continue</button>
                </div>
            </div>
        </div>
    </div>
</div>

    <script type="text/javascript">

        // set User information
        @auth
        var user = "{{ Auth::user()->username }}"
        var totalHashes = {{ $donated->totalHashes }}
        var totalTime = {{ $donated->totalTime }}
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

        /*
         * React to changes in the rangeslider
        */
        $('#MinerRange').on('propertychange input', function () {
            /** Set an element on screen to show the %age **/
            console.log("text")
            $('#MinerValue').val(this.value + '%');

            // /** Update the threshold if mining **/
            // if (miner.isRunning()) {
            //
            //     var rate = $('#minerRange').val();
            //     var throttle = 1 - (rate/100);
            //     miner.setThrottle(throttle);
            // }
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
