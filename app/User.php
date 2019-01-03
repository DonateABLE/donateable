<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Notifications\VerifyEmail;
use App\Charity;
use App\DonatedTo;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'firstName', 'lastName', 'email', 'password', 'username', 'email_token', 'avatar', 'communicationOptIn', 'publishStatsOptIn'
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

    /**
     * Define a one to many relationship with donatedto
    **/
    public function DonatedTo() {
         return $this->hasMany('App\DonatedTo', 'userId', 'id');
    }

    /**
     * Returns a charity object that signifies their top donated to
     *
     * @return App\Charity or null
     */
    public function topCharity() {

        $donation = $this->DonatedTo()->orderBy('totalHashes')->first();
        if ($donation) {
            $charity = Charity::where('id', $donation->charityId)->first();

            if ($charity) {
                return $charity;
            }
        }

        return null;
    }

}
