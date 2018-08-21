@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="vertical-center">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">{{ __('Login to our site') }}<br />Enter your login and password to log on</div>

                            <div class="card-body">
                                <form method="POST" action="{{ route('login') }}" aria-label="{{ __('Login') }}">
                                    @csrf

                                    <div class="form-group row">
                                        <!-- <label for="email" class="col-sm-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label> -->

                                        <div class="col-md-12">
                                            <input placeholder="{{ __('E-Mail Address') }}" id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required autofocus>

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
                                        <div class="col-md-6 offset-md-4">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                                <label class="form-check-label" for="remember">
                                                    {{ __('Remember Me') }}
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group row mb-0">
                                        <div class="col-md-8 offset-md-4">
                                            <button type="submit" class="btn btn-primary">
                                                {{ __('Login') }}
                                            </button>

                                            <a class="btn btn-link" href="{{ route('password.request') }}">
                                                {{ __('Forgot Your Password?') }}
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
            <div class="container">
                <div class="row justify-content-center">

                    <div class="col-md-12">

                        <div class="card">

                            <div class="card-header">{{ __('Sign up now') }}<br />Fill in the form below and start tracking your donations.</div>

                            <div class="card-body">
                                <form method="POST" action="{{ route('register') }}" aria-label="{{ __('Register') }}">
                                    @csrf

                                    <div class="form-group row">
                                        <!-- <label for="firstName" class="col-md-4 col-form-label text-md-right">{{ __('First Name') }}</label> -->

                                        <div class="col-md-12">
                                            <input placeholder="{{ __('First Name') }}" id="firstName" type="text" class="form-control{{ $errors->has('firstName') ? ' is-invalid' : '' }}" name="firstName" value="{{ old('firstName') }}" required autofocus>

                                            @if ($errors->has('firstName'))
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $errors->first('firstName') }}</strong>
                                            </span>
                                            @endif
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <!-- <label for="lastName" class="col-md-4 col-form-label text-md-right">{{ __('Last Name') }}</label> -->

                                        <div class="col-md-12">
                                            <input placeholder="{{ __('Last Name') }}" id="lastName" type="text" class="form-control{{ $errors->has('lastName') ? ' is-invalid' : '' }}" name="lastName" value="{{ old('lastName') }}" required autofocus>

                                            @if ($errors->has('lastName'))
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $errors->first('lastName') }}</strong>
                                            </span>
                                            @endif
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <!-- <label for="username" class="col-md-4 col-form-label text-md-right">{{ __('Username') }}</label> -->

                                        <div class="col-md-12">
                                            <input placeholder="{{ __('Username') }}" id="username" type="text" class="form-control{{ $errors->has('username') ? ' is-invalid' : '' }}" name="username" value="{{ old('username') }}" required autofocus>

                                            @if ($errors->has('username'))
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $errors->first('username') }}</strong>
                                            </span>
                                            @endif
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <!-- <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label> -->

                                        <div class="col-md-12">
                                            <input placeholder="{{ __('E-Mail Address') }}" id="registrationEmail" type="registrationEmail" class="form-control{{ $errors->has('registrationEmail') ? ' is-invalid' : '' }}" name="registrationEmail" value="{{ old('registrationEmail') }}" required>

                                            @if ($errors->has('registrationEmail'))
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $errors->first('registrationEmail') }}</strong>
                                            </span>
                                            @endif
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <!-- <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label> -->

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
                                        <!-- <label for="password-confirm" class="col-md-4 col-form-label text-md-right">{{ __('Confirm Password') }}</label> -->

                                        <div class="col-md-12">
                                            <input placeholder="{{ __('Confirm Password') }}" id="password-confirm" type="password" class="form-control" name="registrationPassword_confirmation" required>
                                        </div>
                                    </div>

                                    <div class="form-group row mb-0">
                                        <div class="col-md-8 offset-md-3">
                                            <button type="submit" class="btn btn-primary">
                                                {{ __('Register') }}
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