<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Validator;
use Redirect;
use Illuminate\Validation\Rule;

class UserSettings extends Controller
{
    public function __invoke(Request $request) {

        $user = Auth::user();

           $validator = Validator::make($request->all(),[
             'email' => ['required', 'email', Rule::unique('users')->ignore($user->id)],
             'username' => [Rule::unique('users')->ignore($user->id), 'nullable'],

         ]);

         if ($validator->fails()) {
             return Redirect::back()->withErrors($validator)->withInput();
        }


        $data = array(
            'firstName' => $request->input('fname', $user->firstName),
            'lastName' => $request->input('lname', $user->lastName),
            'username' => $request->input('username', $user->username),
            'email' => $request->input('email', $user->email),
            'communicationOptIn' => $user->communicationOptIn,
            'publishStatsOptIn' => $user->publishStatsOptIn,
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

        $user->update($data);
        return Redirect::back()->withStatus('Account settings saved successfully!');
    }
}
