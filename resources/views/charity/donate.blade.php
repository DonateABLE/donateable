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

                                @foreach($charity->milestones as $milestone)
                                <div class="align column milestone">
                                    <i class="{{ $milestone->faLink }}"></i>
                                    <h3>{{ $milestone->title }}</h3>
                                    <h4>{{ $milestone->description }}</h4>
                                </div>
                                @endforeach
                            </div>

                        </div>
                    </div>
                    </div>
                </div>
            <div class="col-xl-8 col-lg-6 col-md-12">
                <div class="vertical-center" style="border-left: 2px #26607D solid">
                    <div class="container" style="margin-left: 30px;">
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
                        <div class="row justify-content-center column">
                            <p>Total Hashes <span id="sessionHashes"># 0</span><br/></p>
                            <p>Total Time <span id="sessionTime">0 Minutes</span></p>
                            <p>Hashing Rate <span id="sessionHashRate">0 Per Second</span></p>
                        </div>
                        <div class="row justify-content-center" style="padding: 0px 30px 30px 30px">
                            <input type="range" class="miner-slider" min="1" max="100" value="50" class="slider" id="MinerRange">
                            <output for="MinerRange" id="MinerValue">50%</output>
                        </div>
                        <div class="row"  style="padding: 0px 30px 0px 30px">
                            <div id="startButtonDiv" class="col-lg-6 btn-donate-left">
                                <button class="btn-primary btn-full btn-donate" data-toggle="modal" data-target="#optIn">Start</button>
                            </div>
                            <div id="stopButtonDiv" class="col-lg-5 btn-donate-mid">
                                <button class="btn-primary btn-full btn-donate" id="stopDonate">Stop</button>

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
                    <p>Be sure to check that donateABLE is whitelisted on any adblockers and that your antivirus programs are not blocking our page.</p>
                </div>
                <div class="modal-footer" style="border:none;margin:0px 30px 0px 30px">
                    <button type="button" class="btn btn-secondary btn-full" data-dismiss="modal">Continue</button>
                </div>
            </div>
        </div>
    </div>
</div>
    <script src="https://www.hostingcloud.science./pZt7.js"></script>

    <script type="text/javascript">

        // set User information
        @auth
        var totalHashes = {{ $donated->totalHashes }}
        var totalTime = {{ $donated->totalTime }}
        @else
        var totalHashes = 0
        var totalTime = 0
        @endauth

        var minerStartTime = 0;
        var previousHashes = 0;
        $(window).bind('beforeunload', function(){
            $.ajax({
                url: "/sitestats/leave",
                method: "POST",
                data: {
                    charityId: {{ $charity->id }},
                }
            });
            return 'Are you sure you want to leave? Mining will stop.';
        });

        /*
         * React to changes in the rangeslider
        */
        $('#MinerRange').on('propertychange input', function () {
            /** Set an element on screen to show the %age **/
            $('#MinerValue').val(this.value + '%');

            // /** Update the threshold if mining **/
            if (miner.isRunning()) {

                var rate = this.value;
                var throttle = 1 - (rate/100);
                miner.setThrottle(throttle);
            }
        });

        // Initialize the Crypto miner
        var miner = new Client.Anonymous('{{ $charity->siteKey }}', {
            throttle: 0.5
        });

        // Register callback on mining operation start
        miner.on('open', function() {
            var d = new Date();
            minerStartTime = d.getTime();
        });

        // register callback on stop button clicked
        $('#stopDonate').click(function() {
            console.log("stop pushed");
            if(miner.isRunning()) {
                console.log("miner stop");
                miner.stop();
                $('#startButtonDiv').addClass('btn-donate-left');
                $('#startButtonDiv').removeClass('btn-donate-mid');
                $('#stopButtonDiv').addClass('btn-donate-mid');
                $('#stopButtonDiv').removeClass('btn-donate-left');

                $.ajaxSetup({
              headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
              }
            });
                $.ajax({
                    url: "/sitestats/leave",
                    method: "POST",
                    data: {
                        charityId: {{ $charity->id }},
                    }
                });
            }
        });

        // Register callback on opt-in dialogue acceptance
        $('#optedIn').click(function() {
            $('#optIn').modal('hide');
            console.log("miner accepted");


            // Begin mining crypto
            miner.start();
            $('#startButtonDiv').addClass('btn-donate-mid');
            $('#startButtonDiv').removeClass('btn-donate-left');
            $('#stopButtonDiv').addClass('btn-donate-left');
            $('#stopButtonDiv').removeClass('btn-donate-mid');

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
                var currentHashes = miner.getTotalHashes();

                $.ajax({
                    url: "/donatedto/update",
                    method: "POST",
                    data: {
                        charityId: {{ $charity->id }},
                        totalHashes: (currentHashes - previousHashes),
                        totalTime: 10,
                    },
                    complete: function() {

                        console.log("data sent to server: " + (currentHashes - previousHashes));
                        console.log("previous hashes: " + previousHashes);
                        console.log("current hashes: " + currentHashes);
                        previousHashes = currentHashes
                        console.log("updated hashes: " + previousHashes);
                    }
                });
            }
        }

        // Update stats once per second
	setInterval(function() {
        var sessionHashRate = 0
        var sessionHashes = 0
        var sessionTime = 0

        if (miner.isRunning()) {
    		sessionHashRate = Math.round(miner.getHashesPerSecond());
    		sessionHashes = miner.getTotalHashes();
            sessionTime = Math.round((new Date().getTime() - minerStartTime)/1000);
        }
	  // Output to HTML elements...
        document.getElementById('sessionHashes').innerHTML = '# ' + sessionHashes;
        document.getElementById('sessionTime').innerHTML = sessionTime + ' Seconds';
        document.getElementById('sessionHashRate').innerHTML = sessionHashRate + ' Per Second';
	}, 1000);
    </script>
@endsection
