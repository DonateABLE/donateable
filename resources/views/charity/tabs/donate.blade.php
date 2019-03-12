<div class="container" style="display: flex">

    <div class="row justify-content-center column" style="margin: 25px 0px">
        <div class="stat-container" style="padding-bottom: 15px;">
            <a class="stat-box">Total Hashes 	&nbsp;	&nbsp;<span id="sessionHashes" style="text-align: left;"># 0</span></a>
            <a class="stat-box">Total Time 	&nbsp;	&nbsp;<span id="sessionTime">0 Minutes</span></a>
            <a class="stat-box">Hashing Rate 	&nbsp;	&nbsp;<span id="sessionHashRate">0 Per Second</span></a>
        </div>
        <div class="row justify-content-center" style="padding: 0px 30px 30px 30px">
            <input type="range" class="miner-slider" min="1" max="100" value="50" class="slider" id="MinerRange">
            <output for="MinerRange" id="MinerValue">50% CPU </output>
            <div class="col-lg-1 btn-donate-right">

                <button class="btn-primary btn-full btn-donate" style="padding: 0px; width: 28px; height: 28px; margin-top: 22px;" data-toggle="modal" data-target="#donationHelp">?</button>
            </div>
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
