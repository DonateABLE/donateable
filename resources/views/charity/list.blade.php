@extends('layouts.app')

@section('content')

<div class="content">
    <div class="site-callout" style="padding-bottom: 25px;">

        <h1>Support Local Charities in Guelph</h1>
        <h2>Without opening your wallet</h2>
    </div>
    <div class="container">
        <div class="card-deck">
            @foreach($charities as $charity)
            @if ($charity->comingSoon)
            <div class="card">
                <!-- <img class="card-img-top" src="{{ asset('img/charity/' . $charity->logo) }}" alt="Card image cap"> -->
                <div class="card-body charity-card" style="display: flex; align-items: center; justify-content: center;">
                    <h5 style="color: #c9c9c9; font-size: 1.5rem;">Coming Soon</h5>
                    <!-- <p class="card-text">{{ $charity->shortDesc }}</p> -->


                </div>
                <div class="floating-social">
                    <ul class="floating-social-icons">
                        <?php
                            $donateable = app\Charity::where('longName', 'donateABLE')->first();
                        ?>
                        @foreach($donateable->socialLinks as $link)
                            <li>
                                <a href="{{ $link->socialUrl }}" target="_blank">
                                    <i class="{{ $link->socialType->faLink }}"></i>
                                </a>
                            </li>
                        @endforeach
                    </ul>
                </div>
                <div class="card-footer nopad">
                    <a href="#" class="btn btn-primary btn-full">Donate</a>
                </div>
            </div>
            @else
            <div class="card">
                <img class="card-img-top" src="{{ asset('img/charity/' . $charity->logo) }}" alt="Card image cap">
                <div class="card-body charity-card">
                    <h5>{{ $charity->longName }}</h5>
                    <p class="card-text">{{ $charity->shortDesc }}</p>


                </div>
                <div class="floating-social">
                    <ul class="floating-social-icons">
                        @foreach($charity->socialLinks as $link)
                            <li>
                                <a href="{{ $link->socialUrl }}" target="_blank">
                                    <i class="{{ $link->socialType->faLink }}"></i>
                                </a>
                            </li>
                        @endforeach
                    </ul>
                </div>
                <div class="card-footer nopad">
                    <a href="{{ url( $charity->longName ) }}" class="btn btn-primary btn-full">Donate</a>
                </div>
            </div>
            @endif
            @endforeach
        </div>
    </div>
</div>

    @endsection
