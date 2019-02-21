<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Auth;
use Redirect;

use ResetsPasswords;


class ChangePasswordController extends Controller
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


    public function changePassword(Request $request) {


        $validator = Validator::make($request->all(),[
            'password' => 'required|string|min:6|confirmed',
      ]);

      if ($validator->fails()) {
          return Redirect::back()->withErrors($validator)->withTab('PasswordTab');
     }

        if ($request->has('password')) {

            $user = Auth::user();
            $password = $request->input('password');
            $user->password = Hash::make($password);
            $user->save();
            Auth::login($user);
        }
        return Redirect::back()->withStatus('Password updated successfully!');

    }
}
