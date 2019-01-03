@extends('layouts.app')

@section('content')

    <div class="content">
        <div class="site-callout">
                <img src="{{asset('img/logo/D-Coloured-250x250.png')}}" style="width:200px;height: auto;"/>

                <h1>Support Local Charities in Guelph</h1>
                <h2>Without spending a dime</h2>
                <p>Simply lend your computer's power to generate real value for the charity of your choice.</br>
                Donate to your favourite charities without opening your wallet.</br>
                It is that easy.</p>
        </div>
        <div class="site-links">
            <div class="left-link">
                <a href="{{ url('charities') }}" id="highlight" class="link-box">Select Your Charity</a>
                <a href="#" class="link-box" data-toggle="modal" data-target="#howItWorksModal">How It Works</a>
                <a href="#" class="link-box">Privacy Policy</a>
            </div>
            <div class="right-link">
                <a class="stat-box">Currently Donating {{ $currentDonors }}</a>
                <a class="stat-box">Donators to date {{ $totalDonors }}</a>
                <a class="stat-box">Total Hashes {{ $totalHashes }}</a>
            </div>
        </div>
      </div>

@endsection
