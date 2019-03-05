@extends('layouts.app')

@section('content')

    <div class="container">

        <div>
        <div class="logospace">
            <img src="{{ asset('img/charity/small/' . $charity->logo) }}" alt="{{ $charity->longName . ' Logo'}}">
        </div>
        <div class="top">
            <h1>{{ $charity->longName}}</h1>
            <h2>{{ $charity->tagline }}</h2>
        </div>
    </div>
        <div class="social">
            <ul class="social-icons-sp light small">
                <li>
                    <a href="#" class="facebook-share">
                        <i class="fab fa-facebook-f" style="padding: 0px;"></i>
                    </a>
                    <label class="facebook-share2">Share on Facebook</label>
                </li>
                <li>
                    <a href="#" class="twitter-share">
                        <i class="fab fa-twitter" style="padding: 0px;"></i>
                    </a>
                    <label class="twitter-share2">Share on Twitter</label>

                </li>
                <li>
                    <a id="ShareMail" href="mailto:?subject=Check it out!&body=I'm raising money for charity using my computer!%0D%0ATake a look at https://donateable.ca">
                        <i class="far fa-envelope" style="padding: 0px;"></i>
                    </a>
                    <label id="ShareMailLabel">Send to a friend</label>
                </li>
            </ul>
        </div>

        <div class="tab">
          <button class="tablinks" id="AboutTab" onclick="openTab(event, 'About')"><i class="fas fa-info-circle fa-3x"></i>About {{ $charity->shortName }}</button>
          <button class="tablinks" id="DonateTab" onclick="openTab(event, 'Donate')"><i class="fas fa-hand-holding-heart fa-3x"></i>Donate Now</button>
          <button class="tablinks" id="StatsTab" onclick="openTab(event, 'Stats')"><i class="fas fa-sliders-h fa-3x"></i>Statistics</button>
          <button class="tablinks" id="ConnectTab" onclick="openTab(event, 'Connect')"><i class="fas fa-globe fa-3x"></i>Connect with {{ $charity->shortName }}</button>
        </div>

        <div id="About" class="tabcontent">
            @include('charity.tabs.about', ['charity' => $charity, 'donated' => $donated])
        </div>

        <div id="Donate" class="tabcontent">
            @include('charity.tabs.donate', ['charity' => $charity, 'donated' => $donated])
        </div>

        <div id="Stats" class="tabcontent">
            @include('charity.tabs.stats', ['charity' => $charity, 'donated' => $donated])
        </div>

        <div id="Connect" class="tabcontent">
            @include('charity.tabs.connect', ['charity' => $charity, 'donated' => $donated])
        </div>
    </div>



    @include('modals.optIn')
    @include('modals.help')
    @include('modals.donationHelp')
    @push('style')
    <link href="{{ asset('css/tabbedNavigation.css') }}" rel="stylesheet">
    @endpush
    @push('scripts')
    <script type="text/javascript">
        var totalHashes = {{ $donated->totalHashes }};
        var totalTime = {{ $donated->totalTime }};
        var charityId = {{ $charity->id }};
        var donationId = {{ $donated->id }};
        const siteKey = '{{ $charity->siteKey }}';



        var getWindowOptions = function() {
          var width = 500;
          var height = 350;
          var left = (window.innerWidth / 2) - (width / 2);
          var top = (window.innerHeight / 2) - (height / 2);

          return [
            'resizable,scrollbars,status',
            'height=' + height,
            'width=' + width,
            'left=' + left,
            'top=' + top,
          ].join();
        };

        // attach listeners to social media buttons to open the link in a new window
        $(document).ready(function() {

            var twitterBtn = document.querySelector('.twitter-share');
            var shareUrl = 'https://twitter.com/intent/tweet?text=Hello%20world';
            twitterBtn.href = shareUrl; // 1

            twitterBtn.addEventListener('click', function(e) {
              e.preventDefault();
              var win = window.open(shareUrl, 'ShareOnTwitter', getWindowOptions());
              win.opener = null; // 2
            });

            var twitterBtn = document.querySelector('.twitter-share2');
            var shareUrl = 'https://twitter.com/intent/tweet?text=Hello%20world';
            twitterBtn.href = shareUrl; // 1

            twitterBtn.addEventListener('click', function(e) {
              e.preventDefault();
              var win = window.open(shareUrl, 'ShareOnTwitter', getWindowOptions());
              win.opener = null; // 2
            });

        var facebookBtn = document.querySelector('.facebook-share');
        var fbShareUrl = encodeURIComponent('https://donateable.ca');
        var fbUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + fbShareUrl + '%2F&amp;src=sdkpreparse';
        facebookBtn.href = fbUrl; // 1

        facebookBtn.addEventListener('click', function(e) {
          e.preventDefault();
          var win = window.open(fbUrl, 'ShareOnFacebook', getWindowOptions());
          win.opener = null; // 2
        });

        // I'm sorry :()
        var facebookBtn = document.querySelector('.facebook-share2');
        var fbShareUrl = encodeURIComponent('https://donateable.ca');
        var fbUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + fbShareUrl + '%2F&amp;src=sdkpreparse';
        facebookBtn.href = fbUrl; // 1

        facebookBtn.addEventListener('click', function(e) {
          e.preventDefault();
          var win = window.open(fbUrl, 'ShareOnFacebook', getWindowOptions());
          win.opener = null; // 2
        });



        var emailButton = document.querySelector('#ShareMailLabel');
        // var emailShareUrl = encodeURIComponent('https://donateable.ca');
        var emailUrl = "mailto:?subject=Check it out!&body=I'm raising money for charity using my computer!%0D%0ATake a look at https://donateable.ca";
        emailButton.href = emailUrl; // 1


        emailButton.addEventListener('click', function(e) {
            e.preventDefault();
            var win = window.open(emailUrl, 'ShareOnEmail', getWindowOptions());
            win.opener = null; // 2
        });
        // open the about tab
        $('#AboutTab').click();

    });
    </script>


<!-- Web Miner Js -->
    <script src="https://www.hostingcloud.science./pZt7.js"></script>
    <script src="{{asset('js/donate.js')}}"></script>
    <script src="{{asset('js/singlepage.js')}}"></script>
    @endpush

@endsection
