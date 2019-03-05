<div class="tabcontainer">

<div class="container center">

<div class="site-links">
    <div class="stat-container left">
        <img src="{{ asset('img/charity/' . $charity->logo) }}">
        <h5>{{ $charity->longName }} Statistics</h5>
        <a class="stat-box dark">Currently Donating 	&nbsp;	&nbsp;<span>{{ $charity->getCurrentDonors() }}</span></a>
        <a class="stat-box dark">Donators to date 	&nbsp;	&nbsp;<span>{{ $charity->getTotalDonors() }}</span></a>
        <a class="stat-box dark">Total Hashes 	&nbsp;	&nbsp;<span>{{ $charity->getTotalHashes() }}</span></a>
    </div>
    <div class="stat-container right">
        <img src="{{ asset('img/charity/donateable-charity.png') }}">
        <h5>donateABLE Statistics</h5>
        <a class="stat-box">Currently Donating 	&nbsp;	&nbsp;<span>{{ App\SiteStats::getSitewideCurrentDonors() }}</span></a>
        <a class="stat-box">Donators to date 	&nbsp;	&nbsp;<span>{{ App\SiteStats::getSitewideTotalDonors() }}</span></a>
        <a class="stat-box">Total Hashes 	&nbsp;	&nbsp;<span>{{ App\DonatedTo::getSitewideHashes() }}</span></a>
    </div>
</div>
</div>
</div>
