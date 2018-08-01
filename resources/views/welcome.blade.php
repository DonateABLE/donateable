<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Montserrat:300,700" rel="stylesheet">
        <link rel="stylesheet" href="/css/landingpage.css">

    </head>
    <body>
        <div class="flex-center position-ref full-height">
            @if (Route::has('login'))
                <div class="top-right links">
                    @auth
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ route('login') }}">Login</a>
                        <a href="{{ route('register') }}">Register</a>
                    @endauth
                </div>
            @endif

            <div class="content">
                <div class="m-b-md">
                    <img src="{{asset('img/donateABLE-square-colour-500.png')}}" style="width:400px;height: auto;"/>
                </div>

                <div class="m-b-md">
                    <h1>Coming Soon</h1>
                    <h2>the newest and easiest way to donate</h2>
                </div>
          </div>

          <div class="center-bottom">
              <h3>Powered By <a href="https://www.synergenics.ca">Synergenics</a></h3>
          </div>
        </div>
    </body>
</html>
