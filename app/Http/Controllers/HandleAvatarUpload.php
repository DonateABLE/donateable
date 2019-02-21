<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Hash;
use Image;
use Redirect;

class HandleAvatarUpload extends Controller
{
    public function __invoke(Request $request) {

        if ($request->hasFile('avatar')) {
            $user = Auth::user();
            $avatar = $request->file('avatar');
            $filename = time() . '.' . $avatar->getClientOriginalExtension();
            Image::make($avatar)->resize(300,300)->save(public_path('/img/avatar/' . $filename));
            $user->avatar = $filename;
            $user->save();

            return Redirect::back()->withStatus('Successfully uploaded profile picture!');
        }

    }
}
