<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- You can use Open Graph tags to customize link previews.
    Learn more: https://developers.facebook.com/docs/sharing/webmasters -->
  <meta property="og:url"           content="https://donateable.ca" />
  <meta property="og:type"          content="website" />
  <meta property="og:title"         content="{{ config('app.name', 'donateABLE') }}" />
  @yield('facebook')

    <title>{{ config('app.name', 'donateABLE') }}</title>

    <!-- Scripts -->
    <script
    src="https://code.jquery.com/jquery-3.3.1.min.js"
    integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous"></script>
    <script type="text/javascript">
        @if(isset($newUser))
        const donateable = '{{ url('/home') }}'
        @else
        const donateable = '{{ url('/') }}'
        @endif
    </script>
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script src="{{ asset('js/contactUs.js') }}"></script>
    <script type="text/javascript">

    const onboard = '{{ url("/onboard") }}'
    </script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Barlow" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    @stack('style')
    @stack('scripts')
</head>
<body>

    <div id="app" class="parallax">
        <nav class="navbar navbar-expand-md navbar-light">
            <!-- <div class="container"> -->
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
                            <a class="nav-link">&nbsp;/&nbsp;</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link nav-link" href="{{ route('login') }}">{{ __('Sign Up') }}</a>
                        </li>
                        @else
                        <li class="nav-item">
                            <a class="nav-link nav-link-light" href="{{ route('home') }}">{{ __('Account') }}</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link">&nbsp;/&nbsp;</a>
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
            <!-- </div> -->
        </nav>

        <main class="py-4">

            @yield('content')
        </main>


        <!-- Persistent Nav -->
        <div class="bottom-nav">
            <div class="bottom-nav-inner">
                <a href="{{ url('/') }}">Home</a>|
                <a href="#about" data-toggle="modal" data-target="#aboutUsModal">About</a>|
                <a href="#howitworks" data-toggle="modal" data-target="#howItWorksModal">How It Works</a>|
                <a href="{{ url('/charities') }}">Charities</a>|
                <a href="#privacypolicy" data-toggle="modal" data-target="#privacyPolicyModal">Privacy Policy</a>|
                <a href="#contact" data-toggle="modal" data-target="#contactUsModal">Contact</a>|
                <a href="#faq" data-toggle="modal" data-target="#faqModal">FAQ</a>
            </div>
        </div>
        <div class="bottom-nav-brand">
            <a href="https://www.synergenics.ca" target="_blank">Powered By <img class="bottom-brand" alt="Synergenics Inc. Logo" src="{{ asset('img/logo/Synergenics-Logo-2008-White.png') }}"/></a>
        </div>
    </div>
    <div id="mobile" class="parallax">
        <main class="py-4" style="height: 100%; height: 100vh;">

        <div class="content" style="justify-content: space-between">
            <div class="site-callout">
                    <img src="{{asset('img/donateABLE-square-colour-500.png')}}" style="width:200px;height: auto;"/>


            </div>
            <div style="display:flex; flex-direction: column; align-items: center">
                <h1 style="margin-bottom: 0px; font-size: 1.2rem;">Support Local Charities in Guelph</h1>
                <h2 style="font-size: 1.2rem;">Without opening your wallet</h2>
            </div>
            <div class="site-links">
                <div class="right-link" style="padding-left: 0px; margin: auto; border-left: none;">
                    <?php $currentDonors = App\SiteStats::getSitewideCurrentDonors();
                    $totalDonors = App\SiteStats::getSitewideTotalDonors();
                    $totalHashes = App\DonatedTo::getSitewideHashes(); ?>
                    <a class="stat-box" style="width: 300px; background-color: #26607D; border-color: #26607D">Mobile Version coming soon</a>
                    <a class="stat-box" style="width: 300px">Currently Donating 	&nbsp;	&nbsp;{{ $currentDonors }}</a>
                    <a class="stat-box" style="width: 300px">Donators to date 	&nbsp;	&nbsp;{{ $totalDonors }}</a>
                    <a class="stat-box" style="width: 300px" id="totalHashesMobile">Total Hashes 	&nbsp;	&nbsp;{{ $totalHashes }}</a>
                </div>
            </div>
            <div id="poweredby" style="color: white; display: flex; justify-self: flex-end; justify-content: center;">
                Powered By &nbsp;<a href="https://www.synergenics.ca" target="_blank"><img src="{{ asset('img/logo/Synergenics-Logo-2008-White.png') }}" style="width: 100px"></a>
            </div>
          </div>
      </main>
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
                  <img class="how-it-works-image" src="{{asset('img/howto/1.png')}}"/>
                  <h3 class="modal-h3">Select your charity</h3>
                  <p class="modal-p">The first step is the easiest, or the hardest depending on how you look at it, which is selecting the charity you would like to donate to. Simply select a charity out of our provided list that you wish to donate to and begin lending your computer's processor to solve complex algorithms. It's easy and anyone with a computer is able to donate.</p>
              </div>
              <div class="step">
                  <img class="how-it-works-image" src="{{asset('img/howto/2.png')}}"/>
                  <h3 class="modal-h3">Set your power</h3>
                  <p class="modal-p">The second step is setting the amount of processing power you would like to donate. Basically, the more processor power you donate, the more algorithms get solved, which is then translated into digital currency that is then converted into real money to help your charity continue to do good in their community.</p>
              </div>
              <div class="step">
                  <img class="how-it-works-image" src="{{asset('img/howto/3.png')}}"/>
                  <h3 class="modal-h3">Start donating</h3>
                  <p class="modal-p">The third step is the easiest. Now that you have selected your charity and set your processing power you are now ready to start donating. Select the start button and carry on with your day. You can browse websites, go walk the dog, or take a trip. No matter what you do just leave donateABLE on and running and we do the rest.</p>
              </div>
          </div>

          <div class="modal-button-wrap">
          <a style="align-self: center" href="{{ url('/charities') }}"class="btn btn-primary modal-button">
              {{ __('Start Donating') }}
          </a>
        </div>
      </div>

    </div>
  </div>
</div>
@include('modals.aboutUs')
@include('modals.contactUs')
@include('modals.privacyPolicy')
@include('modals.faq')

</html>
<script type="text/javascript">
if (window.matchMedia("(min-width: 768px)").matches) {
             /* the view port is at least 900 pixels wide */
             isMobile = false;
             // document.getElementById("mobile").display = "none";
             $("#mobile").hide();
             console.log("desktop");
         } else {
             /* the view port is less than 900 pixels wide */
             // document.getElementById("app").display = "none";
             $("#app").hide();
             isMobile = true;
             // app.$el = '#mobile'
             // app.$mount(app.$el);
             if (window.matchMedia("(max-width: 375px)").matches) {
                 $("#totalHashesMobile").hide();
             }
             console.log("mobile");
         }
</script>
