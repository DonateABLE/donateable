@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-xl-4 col-lg-6 col-md-12">
                <div class="vertical-center" style="padding-right: 30px">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="social-frame">
                                <h2>Connect with {{ $charity->shortName}}</h2>
                                <iframe src="{{ $charity->socialFeed }}" width="350" height="500" style="border-right: 2px #26607D solid;overflow:hidden;" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                            </div>
                            <div class="site-links charity">
                                <div class="right-link charity">
                                    <a class="stat-box">Currently Donating {{ $charity->getCurrentDonors() }}</a>
                                    <a class="stat-box">Donators to date {{ $charity->getTotalDonors() }}</a>
                                    <a class="stat-box">Total Hashes {{ $charity->getTotalHashes() }}</a>
                                </div>
                            </div>
                            <ul class="social-icons">
                                @foreach($charity->socialLinks as $link)
                                    <li>
                                        <a href="{{ $link->socialUrl }}" target="_blank">
                                            <i class="{{ $link->socialType->faLink }}"></i>
                                        </a>
                                    </li>
                                @endforeach
                                <p class="donateMoney">To make a monetary donation <a href="{{ $charity->canadaHelpsUrl }}" target="_blank">click here.</a></p>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            <div class="col-xl-8 col-lg-6 col-md-12" style="border-left: 2px #26607D solid;">
                <div class="vertical-center">
                    <div class="container nopad">
                        <div class="row justify-content-center">
                            <img src="{{ asset('img/charity/' . $charity->logo) }}" alt="{{ $charity->longName . ' Logo'}}">
                        </div>
                        <div class="row justify-content-center">
                            <?php
                                $shortName = ($charity->shortName != null) ? ' (' . $charity->shortName . ')' : '';
                            ?>
                            <a href="{{ $charity->websiteUrl }}" target="_blank"><h1>{{ $charity->longName . '' . $shortName }}</h1></a>
                        </div>
                        <div class="row justify-content-center">
                            <h2>{{ $charity->tagline }}</h2>
                        </div>
                        <div class="row justify-content-center">
                            <p class="charity-long-description">
                                <?php
                                    echo nl2br($charity->longDesc);
                                ?>
                            </p>
                        </div>
                        <div class="row justify-content-center" style="padding: 0px 30px 0px 30px">

                            <a href="{{url($charity->longName . '/donate')}}" style="width: 100%;"><span class="btn btn-primary btn-full">Donate Now</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="modal" id="optIn" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content acceptance">
                    <div class="modal-header align">
                        <div class="align-img">
                          <img src="{{asset('img/logo/D-Coloured-500x500.png')}}" style="width:400px;height: auto;"/>
                      </div>
                    </div>
                    <div class="modal-body modal-body-accept">
                        <h1>donateABLE would like to request to</h1>
                        <h2>use your computing power</h2>
                        <p>donateABLE takes unused CPU power from the donator's computer to help mine digital currency and donate to your selected charity as a real monetary value. This solution will take small amounts of computational power donated from individuals and pool it together into a larger resource to generate real monetary value for that charity. By accepting you are agreeing to allow donateABLE to use your processor to complete complex algorithms. Nothing is installed on your system during this process.</p>
                    </div>
                    <div class="modal-footer" style="border:none;margin:0px 30px 0px 30px">
                        <button type="button" class="btn btn-secondary btn-full" id="optedIn">Accept</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
