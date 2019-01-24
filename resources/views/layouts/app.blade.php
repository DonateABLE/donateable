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
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>

    <div id="app" class="parallax">
        <nav class="navbar navbar-expand-md navbar-light">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                    <img border="0", alt="donateABLE" src="{{ asset('img/logo/donateABLE-long-colour-250.png') }}">
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
                            <a class="nav-link nav-link-light" href="{{ route('home') }}">{{ __('My account') }}</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link">/</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link nav-link" href="{{ route('logout') }}"
                               onclick="event.preventDefault();
                                             document.getElementById('logout-form').submit();">
                                {{ __('Logout') }}
                            </a>
                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                @csrf
                            </form>
                        </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>

        <main class="py-4">
            @yield('content')
        </main>


        <!-- Persistent Nav -->
        <div class="bottom-nav">
            <div class="bottom-nav-inner">
                <a href="{{ url('/') }}">Home</a>|
                <a href="#about" data-toggle="modal" data-target="#aboutUsModal">About</a>|
                <a href="{{ url('/charities') }}">Charities</a>|
                <a href="#howitworks" data-toggle="modal" data-target="#howItWorksModal">How It Works</a>|
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
<!-- How it works modal -->
<div class="modal fade" id="howItWorksModal" tabindex="-1" role="dialog" aria-labelledby="howItWorksModalTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" id="howitworksdialog" role="document">
    <div class="modal-content howitworks" id="howitworkscontent">
      <div class="modal-header align">
          <div class="align-img">
            <img src="{{asset('img/logo/donateABLE-long-white-500.png')}}" style="width:400px;height: auto;"/>
        </div>
            <button style="align-self: flex-start;"type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span class="modal-x" aria-hidden="true">X</span>
            </button>
      </div>
      <div class="modal-body">
          <div class="site-callout">

                  <h1 class="modal-h1">Use your computer power to generate</h1>
                  <h2 class="modal-h2">money for your chosen charity</h2>

          </div>
          <div class="step-container">
              <div class="step">
                  <img src="{{asset('img/howto/1.png')}}" style="width:125px;height: auto;"/>
                  <h3 class="modal-h3">Select your charity</h3>
                  <p class="modal-p">The first step is the easiest, or the hardest depending on how you look at it, which is selecting the charity you would like to donate to. Simply select a charity out of our provided list that you wish to donate to and begin lending your computer's processor to solve complex algorithms. It's easy and anyone with a computer is able to donate.</p>
              </div>
              <div class="step">
                  <img src="{{asset('img/howto/2.png')}}" style="width:125px;height: auto;"/>
                  <h3 class="modal-h3">Set your power</h3>
                  <p class="modal-p">The second step is setting the amount of processing power you would like to donate. Basically, the more processor power you donate, the more algorithms get solved, which is then translated into digital currency that is then converted into real money to help your charity continue to do good in their community.</p>
              </div>
              <div class="step">
                  <img src="{{asset('img/howto/3.png')}}" style="width:125px;height: auto;"/>
                  <h3 class="modal-h3">Start donating</h3>
                  <p class="modal-p">The third step is the easiest. Now that you have selected your charity and set your processing power you are now ready to start donating. Select the start button and carry on with your day. You can browse websites, go walk the dog, or take a trip. No matter what you do just leave donateABLE on and running and we do the rest.</p>
              </div>
          </div>

          <div class="modal-button-wrap">
          <button style="align-self: center" data-dismiss="modal" class="btn btn-primary modal-button">
              {{ __('Start Donating') }}
          </button>
        </div>
      </div>

    </div>
  </div>
</div>
@include('modals.aboutUs')
</html>
