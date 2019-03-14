<div class="tabcontainer connect">

        <div class="connect-content" style="order: 1">
        <h1>Connect with<br/><span style="color: #26607D">{{ $charity->longName}}</span></h1>
        <ul class="social-icons-sp light" style="margin-top: 15px; margin-bottom: 20px">

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
