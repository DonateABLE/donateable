<div class="tabcontainer">
<div class="container center">

<div class="site-links">
    <div class="stat-container left">
        @if($user->avatar == NULL)
        <div class="profile-standin">
            <div class="fake-img">
                <span>{{ substr($user->email, 0, 1)}}</span>
            </div>
        </div>
        @else
        <img src="{{ asset('img/avatar/' . $user->avatar ) }}">
        @endif
        <h5>{{ $user->name() }} Statistics</h5>
        <a class="stat-box dark">Charities donated to <span>{{ $user->totalCharitiesDonatedTo() }}</span></a>
        <a class="stat-box dark">Total Time <span>{{ $user->timeDonated() }}</span></a>
        <a class="stat-box dark">Total Hashes <span>{{ $user->hashesDonated() }}</span></a>
    </div>
    <div class="stat-container right">
        <img src="{{ asset('img/charity/donateable-charity.png') }}">
        <h5>donateABLE Statistics</h5>
        <a class="stat-box">Currently Donating <span>{{ App\SiteStats::getSitewideCurrentDonors() }}</span></a>
        <a class="stat-box">Donators to date <span>{{ App\SiteStats::getSitewideTotalDonors() }}</span></a>
        <a class="stat-box">Total Hashes <span>{{ App\DonatedTo::getSitewideHashes() }}</span></a>
    </div>
</div>
</div>
</div>
