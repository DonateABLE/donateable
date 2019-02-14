$(document).ready(function () {

    console.log('donate.js loaded');
    // set User information


    var minerStartTime = 0;
    var previousHashes = 0;
    $(window).bind('beforeunload', function () {
        $.ajax({
            url: "/sitestats/leave",
            method: "POST",
            data: {
                charityId: charityId
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
            var throttle = 1 - rate / 100;
            miner.setThrottle(throttle);
        }
    });

    // Initialize the Crypto miner
    var miner = new Client.Anonymous(siteKey, {
        throttle: 0.5, ads: 0
    });

    // Register callback on mining operation start
    miner.on('open', function () {
        var d = new Date();
        minerStartTime = d.getTime();
    });

    // register callback on stop button clicked
    $('#stopDonate').click(function () {
        console.log("stop pushed");
        if (miner.isRunning()) {
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
                    charityId: charityId
                }
            });
        }
    });

    // Register callback on opt-in dialogue acceptance
    $('#optedIn').click(function () {
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
                charityId: charityId
            }
        });
    });

    setInterval(updateDonatedTo, 10000);

    // Push updated stats to the server
    function updateDonatedTo() {

        if (miner.isRunning()) {
            var currentHashes = miner.getTotalHashes();
            var updatedData = {
                donationId: donationId,
                charityId: charityId,
                totalHashes: currentHashes - previousHashes,
                totalTime: 10
            };

            $.ajax({
                url: "/donatedto/update",
                method: "POST",
                data: updatedData,
                complete: function complete() {

                    console.log("data sent to server: " + (currentHashes - previousHashes));
                    console.log("previous hashes: " + previousHashes);
                    console.log("current hashes: " + currentHashes);
                    previousHashes = currentHashes;
                    console.log("updated hashes: " + previousHashes);
                }
            });
        }
    }

    // Update stats once per second
    setInterval(function () {
        var sessionHashRate = 0;
        var sessionHashes = 0;
        var sessionTime = 0;

        if (miner.isRunning()) {
            sessionHashRate = Math.round(miner.getHashesPerSecond());
            sessionHashes = miner.getTotalHashes();
            sessionTime = Math.round((new Date().getTime() - minerStartTime) / 1000);
        }
        // Output to HTML elements...
        document.getElementById('sessionHashes').innerHTML = '# ' + sessionHashes;
        document.getElementById('sessionTime').innerHTML = sessionTime + ' Seconds';
        document.getElementById('sessionHashRate').innerHTML = sessionHashRate + ' Per Second';
    }, 1000);
});