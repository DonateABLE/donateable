<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Hash;
use Image;
use Redirect;

class UserSettings extends Controller
{
    public function __invoke(Request $request) {

        $user = Auth::user();
        if (Hash::check($request->input('password'), $user->password)) {
            $data = array(
                'firstName' => $request->input('fname', $user->firstName),
                'lastName' => $request->input('lname', $user->lastName),
                'username' => $request->input('username', $user->username),
                'email' => $request->input('email', $user->email),
                'communicationOptIn' => $user->communicationOptIn,
                'publishStatsOptIn' => $user->publishStatsOptIn,
                'avatar' => $user->avatar,
            );
            if ($request->has('communicationOptIn')) {
                $data['communicationOptIn'] = true;
            } else {
                $data['communicationOptIn'] = false;
            }
            if ($request->has('publishStatsOptIn')) {
                $data['publishStatsOptIn'] = true;
            } else {
                $data['publishStatsOptIn'] = false;
            }

            if ($request->hasFile('avatar')) {
                $avatar = $request->file('avatar');
                $filename = time() . '.' . $avatar->getClientOriginalExtension();
                Image::make($avatar)->resize(300,300)->save(public_path('/img/avatar/' . $filename));
                $data['avatar'] = $filename;
            }
            $user->update($data);
            return view('home', array('user' => Auth::user()));
        } else {
            return Redirect::to('/home')->withError('Your password is incorrect. Please enter your current password to make changes to your account.');

        }

    }
}
