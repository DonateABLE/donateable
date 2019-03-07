<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Notifications\VerifyEmail;
use App\Charity;
use App\Notifications\ResetPassword;
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
     * Send the password reset notification.
     *
     * @param  string  $token
     * @return void
     */
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new ResetPassword($token));
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

    /**
     * Returns an array of charity objects that signifies the user's top donations
     *
     * @return Array(App\Charity) or null
     */
    public function topDonations() {
        return $this->DonatedTo()->orderBy('totalHashes')->take(3)->get();
    }


    // probably not working
    public function dollarsDonated() {
        $totalHashes = $this->hashesDonated();
        try {
            $api_url = "https://min-api.cryptocompare.com/data/price?fsym=XMR&tsyms=BTC,USD,EUR";
            $api_json = file_get_contents($api_url);
            $api_array = json_decode($api_json, true);
            $monero_exchange = $api_array["USD"];

            return '$' . floor($monero_exchange * (($totalHashes / 1000000) * 0.00007217));
        } catch (\Exception $e) {
            return "We're having trouble calculating your donation right now. Check back later.";
        }
    }

    public function hashesDonated() {
        return $this->DonatedTo()->sum('totalHashes');
    }

    public function timeDonated() {
        return formatSeconds($this->DonatedTo()->sum('totalTime'));

    }

    public function totalCharitiesDonatedTo() {
        return $this->DonatedTo()->count();
    }

    private function secondsToTime($seconds) {
        if (!$seconds) {
            return "00:00:00";
        }
        $dtF = new \DateTime('@0');
        $dtT = new \DateTime("@$seconds");
        return $dtF->diff($dtT)->format('%a:%h:%i:%s');
    }

    public function name() {
        return $this->firstName . ' ' . $this->lastName;
    }


}
