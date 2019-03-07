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
        $totalCommittedHashes = DonatedTo::all()->sum('totalHashes');
        $totalPendingHashes = DonationBuffer::all()->sum('totalHashes');
        $totalHashes = $totalCommittedHashes + $totalPendingHashes;
        return number_format($totalHashes, 0, ',', ' ');
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
