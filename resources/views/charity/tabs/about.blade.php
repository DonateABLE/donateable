<div class="tabcontainer">
    <div style="display: flex; flex: 1; flex-direction: column; min-height: 0; justify-items: center">
        <h1 class="aboutHeader"><span class="aboutSpan">About</span> {{ $charity->longName }}</h1>
        <ul class="social-icons-sp light">

            @foreach($charity->socialLinks as $link)
                <li>
                    <a href="{{ $link->socialUrl }}" target="_blank">
                        <i class="{{ $link->socialType->faLink }} fa-lg" style="padding: 0px;"></i>
                    </a>
                </li>
            @endforeach
        </ul>
        <p class="charity-long-description">
            <?php
            echo nl2br($charity->longDesc);
            ?>
        </p>
            <a onclick="openTab(event, 'Donate')" style="width: 100%;padding-bottom: 30px; max-width: 231px; align-self: center"><span class="btn btn-primary btn-full">Donate Now</span></a>

    </div>

</div>
