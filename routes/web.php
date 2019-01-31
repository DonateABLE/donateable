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

Route::get('/', function () {
    $currentDonors = App\SiteStats::getSitewideCurrentDonors();
    $totalDonors = App\SiteStats::getSitewideTotalDonors();
    $totalHashes = App\DonatedTo::getSitewideHashes();

    return View::make('welcome')
        ->with('currentDonors', $currentDonors)
        ->with('totalDonors', $totalDonors)
        ->with('totalHashes', $totalHashes);
});


Route::get('/verify/{token}', 'VerifyController@verify')->name('verify');


Auth::routes();
Route::post('/sitestats/join', 'SiteStatsController@join');
Route::post('/sitestats/leave', 'SiteStatsController@leave');
Route::post('/form/joinProgramForm', 'ContactFormController@handleJoinProgramForm')->name('JoinProgram');
Route::post('/form/technicalSupportForm', 'ContactFormController@handleTechnicalSupportForm')->name('TechnicalSupport');

Route::post('/donatedto/update', 'UpdateDonatedTo')->name('donationUpdate');
Route::post('/account-settings', 'UserSettings')->name('settings');
Route::get('/home', 'HomeController@index')->name('home');
Route::post('/resendVerification', function(Request $request) {
    $this->middleware('auth');
    Auth::user()->sendVerificationEmail();
    return redirect('/home');
})->name('resend');
Route::get('/charities', 'CharityController@index');
Route::get('/{charity}', 'CharityController@showCharity');

Route::get('/{charity}/donate', 'CharityController@showDonate');
