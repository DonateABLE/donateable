@extends('layouts.app')

@section('content')

@if (Auth::user())
<?php
    $user = Auth::user();
?>
@endif
<div>
     <a class="dropdown-item" href="{{ route('logout') }}"
        onclick="event.preventDefault();
                      document.getElementById('logout-form').submit();">
         {{ __('Logout') }}
     </a>
</div>
     <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
         @csrf
     </form>
    <div class="row justify-content-center" style="margin: 0px; padding 0px;">
        <div class="col-md-4 profile-stats">
            <div style="display: flex; flex-direction: column;justify-content: center;">
                <div class="align column">
                    <i class="fas fa-money-bill-alt"></i>
                    <h3>approximate dollars donated</h3>
                    <h4>Equal to 500,000,000 hashes</h4>
                </div>

                <div class="align column">
                    <i class="fas fa-hashtag"></i>
                    <h3>total hashes donated</h3>
                    <h4>Equal to 12,000,000 hashes</h4>
                </div>

                <div class="align column">
                    <i class="fas fa-clock"></i>
                    <h3>Total time donated</h3>
                    <h4>Priceless</h4>
                </div>
            </div>
        </div>
        <div class="col-md-8">
            @if (session('status'))
                <div class="alert alert-success" role="alert">
                    {{ session('status') }}
                </div>
            @endif

            @if (Auth::user()->verified())
            <div class="alert alert-success" role="alert">
                And verified!
            </div>
            @else
            <div class="alert alert-warning" role="alert">
                Your email address has not been verified.
                <a href="{{ route('resend') }}"
                   onclick="event.preventDefault();
                    document.getElementById('resend-form').submit();">
                    Click Here
                </a> to resend verification email.
            </div>
            <form id="resend-form" action="{{ route('resend') }}" method="POST" style="display: none;">
                @csrf
            </form>
            @endif
            <div class="row jusify-content-center profile-image-line">

                <a class="profile-img" href="#">
                  <div class="img__overlay">EDIT</div>
                  @if($user->avatar == 'default.png')
                  <div class="img__underlay">{{ substr($user->email, 0, 1)}}</div>
                  @else
                  <img src="{{ asset('img/avatar/' . $user->avatar )}}"/>
                  @endif
                </a>

                @if($user->firstName == '')
                <div class="col align-self-center profile-name">Tell us a bit about yourself:</div>
                @else
                <div class="col align-self-center profile-name">{{ $user->firstName . ' ' . $user->lastName}}</div>
                @endif
            </div>

            <div class="container">
                <label for="Account Settings" class="settings-label">Account Settings</label>

                <form method="POST" action="{{ route('login') }}" aria-label="{{ __('Account Settings') }}">
                    @csrf

                    <div class="form-group row">

                        <div class="col-md-6">
                            <input placeholder="{{ __('First Name') }}" id="fname" type="fname" class="form-control{{ $errors->has('fname') ? ' is-invalid' : '' }}" name="fname" value="{{ old('fname') }}" autofocus>

                            @if ($errors->has('fname'))
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $errors->first('fname') }}</strong>
                            </span>
                            @endif
                        </div>
                        <div class="col-md-6">
                            <input placeholder="{{ __('Last Name') }}" id="lname" type="lname" class="form-control{{ $errors->has('lname') ? ' is-invalid' : '' }}" name="lname" value="{{ old('lname') }}" autofocus>

                            @if ($errors->has('lname'))
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $errors->first('lname') }}</strong>
                            </span>
                            @endif
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-md-12">
                            <input placeholder="{{ __('Email') }}" id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" required>

                            @if ($errors->has('email'))
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $errors->first('email') }}</strong>
                            </span>
                            @endif
                        </div>
                    </div>

                    <div class="form-group row">

                        <div class="col-md-6">
                            <input placeholder="{{ __('Password') }}" id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" value="{{ old('password') }}" required autofocus>

                            @if ($errors->has('password'))
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $errors->first('password') }}</strong>
                            </span>
                            @endif
                        </div>
                        <div class="col-md-6">
                            <input placeholder="{{ __('Confirm Password') }}" id="password-confirm" type="password" class="form-control{{ $errors->has('password-confirm') ? ' is-invalid' : '' }}" name="password-confirm" value="{{ old('password-confirm') }}" required autofocus>

                            @if ($errors->has('password-confirm'))
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $errors->first('password-confirm') }}</strong>
                            </span>
                            @endif
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-md-12 optin">
                            <input type="checkbox" aria-label="Checkbox for media communication opt-in"
                                @if($user->communicationOptIn)
                                checked="checked"
                                @endif
                            >
                            I would like to receive emails from donateable about new features, stats, and other communications.
                        </div>
                    </div>


                    <div class="form-group row">
                        <div class="col-md-12 optin">
                            <input type="checkbox" aria-label="Checkbox for collection of statistics opt-in"
                                @if($user->publishStatsOptIn)
                                checked="checked"
                                @endif
                            >
                            I agree to allow donateable to post my statistics and keep track of my donations, hashes, and time spent.
                        </div>
                    </div>


                    <div class="form-group row">
                        <div class="col-md-12">
                            <button type="submit" class="btn btn-primary btn-full">
                                {{ __('Save') }}
                            </button>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
