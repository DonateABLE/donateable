<div class="tabcontainer">
        <h1 class="aboutHeader"><span class="aboutSpan">About</span> {{ $charity->longName }}</h1>
        <p class="charity-long-description">
            <?php
            echo nl2br($charity->longDesc);
            ?>
        </p>
    <div style="padding: 0px 30px 0px 30px">

        <a onclick="openTab(event, 'Donate')" style="width: 100%;"><span class="btn btn-primary btn-full">Donate Now</span></a>

    </div>
</div>
