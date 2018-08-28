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
    return view('welcome');
});

use App\Mail\TestMail;

Route::get('/mail', function() {
    // Mail::to('jsmith@synergenics.ca')->send(new TestMail());
    Mail::send('email.test', [], function($m) {
        $m->from('donateable@donateable.ca', 'DonateABLE')->to('jsmith@synergenics.ca');
    });
});
Route::get('/verify/{token}', 'VerifyController@verify')->name('verify');

Route::get('/charity', function() {
    return View::make('charity.index');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/{charity}', 'CharityController@showCharity');

Route::post('/sitestats/join', 'SiteStatsController@join');
Route::post('/sitestats/leave', 'SiteStatsController@leave');
