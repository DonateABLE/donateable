<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Notifications\VerifyEmail;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'firstName', 'lastName', 'email', 'password', 'username', 'email_token'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'isAdmin'
    ];

    /**
     * Returns true if the user is verified
     *
     * @return bool
     */
    public function verified() {

        return $this->email_token === NULL;
    }


    /**
     * Sends the user a verification email
     *
     * @return void
     */
    public function sendVerificationEmail() {

        $this->notify(new VerifyEmail($this));

    }
}
