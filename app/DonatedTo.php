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

}
