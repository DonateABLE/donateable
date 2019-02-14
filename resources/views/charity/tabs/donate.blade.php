<div class="container" style="display: flex">

    <div class="row justify-content-center column" style="margin: 25px 0px">
        <div class="box">
            <div class="left">
                <p>Total Hashes </p>
                <p>Total Time </p>
                <p>Hashing Rate </p>
            </div>
            <div class="right">
                <p><span id="sessionHashes" style="text-align: left;"># 0</span></p>
                <p><span id="sessionTime">0 Minutes</span></p>
                <p><span id="sessionHashRate">0 Per Second</span></p>
            </div>
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
