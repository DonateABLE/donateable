@extends('layouts.app')

@section('content')

<div class="content">
    <div class="site-callout">

        <h1>Support Local Charities in Guelph</h1>
        <h2>Without spending a dime</h2>
        <p>Simply lend your computer's power to generate real value for the charity of your choice.</br>
            Donate to your favourite charities without opening your wallet.</br>
            It is that easy.</p>
    </div>
    <div class="container">
        <div class="card-deck">
            @foreach($charities as $charity)
            <div class="card">
                <img class="card-img-top" src="{{ asset('img/charity/' . $charity->logo) }}" alt="Card image cap">
                <div class="card-body charity-card">
                    <h5>{{ $charity->longName }}</h5>
                    @if($charity->shortName != '')
                        <h6>({{ $charity->shortName}})</h6>
                    @else
                        <h6></h6>
                    @endif
                    <p class="card-text">{{ $charity->shortDesc }}</p>


                </div>
                <div class="floating-social">
                    <ul class="floating-social-icons">
                        <li>
                            <a href="https://facebook.com">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <i class="fab fa-twitter"></i>
                        </li>
                        <li>
                            <i class="fas fa-envelope"></i>
                        </li>
                        <li>
                            <i class="fas fa-globe"></i>
                        </li>
                    </ul>
                </div>
                <div class="card-footer nopad">
                    <button type="button" class="btn btn-primary btn-full">Donate</button>
                </div>
            </div>
            @endforeach
        </div>
    </div>
</div>

    @endsection
