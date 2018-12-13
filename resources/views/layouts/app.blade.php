<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'donateABLE') }}</title>

    <!-- Scripts -->
    <script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-light">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                    <img border="0", alt="donateABLE" src="{{ asset('img/donateABLE-long-colour-250.png') }}">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        @guest
                            <li class="nav-item">
                                <a class="nav-link nav-link-light" href="{{ route('login') }}">{{ __('Login') }}</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link">/</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link nav-link" href="{{ route('login') }}">{{ __('Sign Up') }}</a>
                            </li>
                        @else
                        <li class="nav-item">
                            <a class="nav-link nav-link" href="{{ route('home') }}">{{ __('My account') }}</a>
                        </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>

        <main class="py-4">
            @yield('content')
        </main>
        <div class="bottom-nav">
            <div class="bottom-nav-inner">
                <a href="#home" class="active">Home</a>|
                <a href="#about">About</a>|
                <a href="#charities">Charities</a>|
                <a href="#howitworks">How It Works</a>|
                <a href="#contact">Contact</a>|
                <a href="#privacypolicy">Privacy Policy</a>|
                <a href="#accessibility">Accessibility</a>
            </div>
        </div>
        <div class="bottom-nav-brand">
            <a href="https://www.synergenics.ca">Powered By <img class="bottom-brand" alt="Synergenics Inc. Logo" src="{{ asset('img/logo/Synergenics-Logo.png') }}"/></a>
        </div>
    </div>
</body>
</html>
