@extends('layouts.app')

@section('content')

    <div class="content">
        <div class="site-callout">
                <img src="{{asset('img/donateABLE-square-colour-500.png')}}" style="width:400px;height: auto;"/>

                <h1>Support Local Charities in Guelph</h1>
                <h2>Without spending a dime</h2>
                <p style="padding-bottom: 5px;">Simply lend your computer's power to generate real value for the charity of your choice.</br>
                Donate to your favourite charities without opening your wallet.</br>
                It is that easy.</p>
        </div>
        <div class="site-links">
            <div class="left-link">
                <a href="#" class="link-box">Select Your Charity</a>
                <a href="#" class="link-box">How It Works</a>
                <a href="#" class="link-box">Privacy Policy</a>
            </div>
            <div class="right-link">
                <a class="stat-box">Currently Donating 1,234</a>
                <a class="stat-box">Donators to date 12,345</a>
                <a class="stat-box">Total Hashes 12,345,678</a>
            </div>
        </div>
      </div>

@endsection
