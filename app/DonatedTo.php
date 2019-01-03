<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DonatedTo extends Model
{
    protected $table = "donatedTo";

    protected $fillable = [
        'userId',
        'charityId',
        'totalHashes',
        'totalTime',
    ];

    /* Utility method to return a count of all hashes stored in the db */
    public static function getSitewideHashes() {
        return DonatedTo::all()->sum('totalHashes');
    }

    /**
     * Get the charity that the donation is for.
     */
    public function Charity()
    {
        return $this->belongsTo('App\Charity', 'charityId', 'id');
    }


    /**
     * Get the user that owns the donation.
     */
    public function User()
    {
        return $this->belongsTo('App\User', 'userId', 'id');
    }
}
