<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
use Illuminate\Http\Response;
use Illuminate\Http\Request;

Route::get('/', function (Request $request) {
    $currentDonors = App\SiteStats::getSitewideCurrentDonors();
    $totalDonors = App\SiteStats::getSitewideTotalDonors();
    $totalHashes = App\DonatedTo::getSitewideHashes();

    return View::make('welcome')
        ->with('currentDonors', $currentDonors)
        ->with('totalDonors', $totalDonors)
        ->with('totalHashes', $totalHashes);
});

Route::get('/onboard', function(Request $request) {
    $response = new Response(view('onboarding.onboard'));
    $response->withCookie(cookie('visited'));
    return $response;
});

Route::get('/verify/{token}', 'VerifyController@verify')->name('verify');


Auth::routes();
Route::post('/sitestats/join', 'SiteStatsController@join');
Route::post('/sitestats/leave', 'SiteStatsController@leave');
Route::post('/form/joinProgramForm', 'ContactFormController@handleJoinProgramForm')->name('JoinProgram');
Route::post('/form/technicalSupportForm', 'ContactFormController@handleTechnicalSupportForm')->name('TechnicalSupport');

Route::post('/donatedto/update', 'UpdateDonatedTo')->name('donationUpdate');
Route::post('/account-settings', 'UserSettings')->name('settings');
Route::post('/account-avatar', 'HandleAvatarUpload')->name('avatar');
Route::post('/change-password', 'Auth\ChangePasswordController@changePassword')->name('changePassword');
Route::get('/home', 'HomeController@index')->name('home');

Route::get('/sendVerification', function() {
    Auth::user()->sendVerificationEmail();
    return back()->with('status', 'Verification email has been resent. Please check your spam folder.');
});

Route::post('/resendVerification', function(Request $request) {
    $this->middleware('auth');
    Auth::user()->sendVerificationEmail();
    return redirect('/home');
})->name('resend');
Route::get('/charities', 'CharityController@index');
// Route::get('/{charity}', 'CharityController@showCharity');

Route::get('/{charity}', 'CharityController@showDonate');
