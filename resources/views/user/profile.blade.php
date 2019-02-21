@extends('layouts.app')

@section('content')

@if (Auth::user())
<?php
$user = Auth::user();
$topCharity = $user->topCharity();
?>
@endif

<div class="container">

    @if (session('status'))
    <div class="alert alert-success alert-dismissible fade show" role="alert">
        {{ session('status') }}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
    </div>
@endif
    @if (session()->has('failures'))
        @foreach ($failures->all() as $failure)
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                {{$failure}}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
            </div>
        @endforeach
    @endif

    <div>
        <div class="logospace">
            <!-- Profile Picture display or simulation -->
            <!-- <form name="ProfilePictureUpload"> -->
            <form name="AvatarUpload" method="POST" enctype="multipart/form-data" action="{{ route('avatar') }}" aria-label="{{ __('Profile Image') }}">
                @csrf
            <div class="profile-img" href="#">
                <div class="img__overlay">EDIT
                    <input type='file' id="imageUpload" name="avatar" accept=".png, .jpg, .jpeg"/>
                    <label class="img__overlay clear" for="imageUpload"></label>
                </div>
                @if($user->avatar == NULL)
                <div id="imagePreview" class="img__underlay"><span id="placeholderAvatar">{{ substr($user->email, 0, 1)}}</span></div>
                @else

                <div id="imagePreview" class="img__underlay" style="background-image: url({{ asset('img/avatar/' . $user->avatar )}}); background-color: white"></div>

                @endif
            </div>
            </form>
        </div>
        <div class="top">

            <h1>{{ $user->name() }}</h1>
        </div>
    </div>
    <div class="social">
        <ul class="social-icons-sp light small">
            <li>
                <a href="#" class="facebook-share">
                    <i class="fab fa-facebook-f" style="padding: 0px;"></i>
                </a>
                <label>Share on Facebook</label>
            </li>
            <li>
                <a href="#" class="twitter-share">
                    <i class="fab fa-twitter" style="padding: 0px;"></i>
                </a>
                <label>Share on Twitter</label>

            </li>
            <li>
                <a href="mailto:?subject=Check it out!&body=I'm raising money for charity using my computer!%0D%0ATake a look at https://donateable.ca">
                    <i class="far fa-envelope" style="padding: 0px;"></i>
                </a>
                <label>Send to a friend</label>
            </li>
        </ul>
    </div>

    <div class="tab">
        <button class="tablinks" id="AccountTab" onclick="openTab(event, 'Account')"><i class="fas fa-cog fa-3x"></i>Account Settings</button>
        <button class="tablinks" id="LeaderboardTab" onclick="openTab(event, 'Leaderboard')"><i class="fas fa-trophy fa-3x"></i>Top Charities</button>
        <button class="tablinks" id="StatsTab" onclick="openTab(event, 'Stats')"><i class="fas fa-sliders-h fa-3x"></i>Your Statistics</button>
        <button class="tablinks" id="PasswordTab" onclick="openTab(event, 'Password')"><i class="fas fa-lock fa-3x"></i>Reset Password</button>
    </div>

    <div id="Account" class="tabcontent">
        @include('user.tabs.account', ['user' => $user])
    </div>

    <div id="Leaderboard" class="tabcontent">
        @include('user.tabs.leaderboard', ['donations' => $user->topDonations()])
    </div>

    <div id="Stats" class="tabcontent">
        @include('user.tabs.stats', ['user' => $user])
    </div>

    <div id="Password" class="tabcontent">
        @include('user.tabs.password', ['user' => $user])
    </div>
</div>



@include('modals.optIn')
@include('modals.help')
@push('style')
<link href="{{ asset('css/tabbedNavigation.css') }}" rel="stylesheet">
<link href="{{ asset('css/profilePage.css') }}" rel="stylesheet">
@endpush
@push('scripts')
<script type="text/javascript">

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

    var facebookBtn = document.querySelector('.facebook-share');
    var fbShareUrl = encodeURIComponent('https://donateable.ca');
    var fbUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + fbShareUrl + '%2F&amp;src=sdkpreparse';
    facebookBtn.href = fbUrl; // 1

    facebookBtn.addEventListener('click', function(e) {
        e.preventDefault();
        var win = window.open(fbUrl, 'ShareOnFacebook', getWindowOptions());
        win.opener = null; // 2
    });

    $("#imageUpload").change(function() {
        console.log("event")
        readURL(this);
    });

    // Select the top tab

    @if(session('tab'))
    $('#{{session('tab')}}').click();
    @else
    $("#AccountTab").click();
    @endif
});


function readURL(input) {
    console.log("test")
    if (input.files && input.files[0]) {
        var filesize = ((input.files[0].size/1024)/1024).toFixed(4); // MB
        if (filesize > 2) {
            // handle this better
            alert("file is too big")
            return;
        }
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#placeholderAvatar').remove();
            $('#imagePreview').css('background-image', 'url('+e.target.result +')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
        $('form[name=AvatarUpload]').submit();
    }
    }


</script>

<script src="{{asset('js/singlepage.js')}}"></script>
<script src="{{asset('js/profilepage.js')}}"></script>
@endpush



@endsection