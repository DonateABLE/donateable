<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Response;
use Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();

        if ($user->showOnboard) {
                $user->showOnboard = false;
                $user->save();
                return view('onboarding.onboard')->with(['newUser' => true]);
        }
        return view('user.profile');
    }
}
