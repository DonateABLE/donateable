<div class="tabcontainer connect">
    <div class="connect-content social-feed">
            <iframe src="{{ $charity->socialFeed }}" width="350" height="500" style="overflow:hidden;" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
    </div>
        <div class="connect-content" style="order: 1">
        <h1>Connect with {{ $charity->shortName}}</h1>
        <ul class="social-icons-sp" style="margin-bottom: 10px">

            @foreach($charity->socialLinks as $link)
                <li>
                    <a href="{{ $link->socialUrl }}" target="_blank">
                        <i class="{{ $link->socialType->faLink }} fa-lg" style="padding: 0px;"></i>
                    </a>
                </li>
            @endforeach
        </ul>
        <a href="{{ $charity->canadaHelpsUrl }}" target="_blank"><span class="btn btn-primary" style="width: 425px; margin-bottom: 10px;">Make a monetary donation</span></a>
        <a onclick="openTab(event, 'Donate')"><span class="btn btn-primary" style="width: 425px">Make A donation with <span style="text-transfor: none">donateABLE</span></span></a>
    </div>
</div>
