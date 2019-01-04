@extends('layouts.app')

@section('content')
<div class="container">
    <div class="site-callout">
            <img src="{{asset('img/logo/D-Coloured-250x250.png')}}" style="width:125px;height: auto;"/>

            <p style="padding-bottom: 5px;">Simply lend your computer's power to generate real value for the charity of your choice.</br>
            Donate to your favourite charities without opening your wallet.</br>
            It is that easy.</p>
    </div>
    <div class="row" style="justify-content: center;">
        <div class="vertical-center">
            <div class="container left-signup">
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <div class="card signup-card">
                            <div class="card-header">{{ __('Login') }}</div>

                            <div class="card-body">
                                <form method="POST" action="{{ route('login') }}" aria-label="{{ __('Login') }}">
                                    @csrf

                                    <div class="form-group row">
                                        <!-- <label for="email" class="col-sm-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label> -->

                                        <div class="col-md-12">
                                            <input placeholder="{{ __('email') }}" id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required autofocus>

                                            @if ($errors->has('email'))
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $errors->first('email') }}</strong>
                                            </span>
                                            @endif
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <!-- <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label> -->

                                        <div class="col-md-12">
                                            <input placeholder="{{ __('Password') }}" id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

                                            @if ($errors->has('password'))
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $errors->first('password') }}</strong>
                                            </span>
                                            @endif
                                        </div>
                                    </div>


                                    <div class="form-group row">
                                        <div class="col-md-12">
                                            <button type="submit" class="btn btn-primary btn-full">
                                                {{ __('Submit') }}
                                            </button>

                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-12">

                                            <a class="btn btn-link" style="float:right" href="{{ route('password.request') }}">
                                                {{ __('Forgot Password?') }}
                                            </a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="vertical-center">
            <div class="container right-signup">
                <div class="row justify-content-center">

                    <div class="col-md-12">

                        <div class="card signup-card">

                            <div class="card-header header-dark">{{ __('Sign up') }}</div>

                            <div class="card-body">
                                <form method="POST" action="{{ route('register') }}" aria-label="{{ __('Register') }}">
                                    @csrf

                                    <div class="form-group row">

                                        <div class="col-md-12">
                                            <input placeholder="{{ __('Email') }}" id="registrationEmail" type="registrationEmail" class="form-control{{ $errors->has('registrationEmail') ? ' is-invalid' : '' }}" name="registrationEmail" value="{{ old('registrationEmail') }}" required>

                                            @if ($errors->has('registrationEmail'))
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $errors->first('registrationEmail') }}</strong>
                                            </span>
                                            @endif
                                        </div>
                                    </div>

                                    <div class="form-group row">

                                        <div class="col-md-12">
                                            <input placeholder="{{ __('Password') }}" id="registrationPassword" type="password" class="form-control{{ $errors->has('registrationPassword') ? ' is-invalid' : '' }}" name="registrationPassword" required>

                                            @if ($errors->has('registrationPassword'))
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $errors->first('registrationPassword') }}</strong>
                                            </span>
                                            @endif
                                        </div>
                                    </div>

                                    <div class="form-group row">

                                        <div class="col-md-12">
                                            <input placeholder="{{ __('Confirm Password') }}" id="password-confirm" type="password" class="form-control" name="registrationPassword_confirmation" required>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <div class="col-md-12">
                                            <button type="submit" class="btn btn-primary btn-full">
                                                {{ __('Submit') }}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
@endsection
