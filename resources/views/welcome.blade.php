@extends('layouts.app')

@section('content')

    <div class="content">
        <div class="site-callout" style="padding-top: 25px; padding-bottom: 25px">
                <img src="{{asset('img/logo/D-Coloured-250x250.png')}}" style="width:200px;height: auto;"/>

                <h1 style="margin-bottom: 0px;">Support Local Charities in Guelph</h1>
                <h2>Without opening your wallet</h2>
        </div>
        <div class="site-links">
            <div class="left-link">
                <a href="{{ url('charities') }}" id="highlight" class="link-box">Select Your Charity</a>
                <a href="#" class="link-box light" data-toggle="modal" data-target="#howItWorksModal">How It Works</a>
                <a href="#" class="link-box light">Privacy Policy</a>
            </div>
            <div class="right-link">
                <a class="stat-box">Currently Donating 	&nbsp;	&nbsp;{{ $currentDonors }}</a>
                <a class="stat-box">Donators to date 	&nbsp;	&nbsp;{{ $totalDonors }}</a>
                <a class="stat-box">Total Hashes 	&nbsp;	&nbsp;{{ $totalHashes }}</a>
            </div>
        </div>
      </div>

@endsection
