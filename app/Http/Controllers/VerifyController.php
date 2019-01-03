<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class VerifyController extends Controller
{
    /*
     * Verify the user with a given token
     *
     * @param string $token
     * @return Response
     *
    */
    public function verify($token) {

        User::where('email_token', $token)->firstOrFail()
                    ->update(['email_token' => null]);

        return redirect()->route('home')->withStatus('Your Account has been verified.');
    }
}
