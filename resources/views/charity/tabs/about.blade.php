<div class="tabcontainer">
    <div style="display: flex; flex: 1; flex-direction: column;">
        <h1 class="aboutHeader"><span class="aboutSpan">About</span> {{ $charity->longName }}</h1>
        <p class="charity-long-description">
            <?php
            echo nl2br($charity->longDesc);
            ?>
        </p>
            <a onclick="openTab(event, 'Donate')" style="width: 100%; margin-bottom: 30px; max-width: 231px; align-self: center"><span class="btn btn-primary btn-full">Donate Now</span></a>

    </div>

</div>
