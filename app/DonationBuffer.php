<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DonationBuffer extends Model
{
    protected $table = "donationBuffer";

    protected $fillable = [
        'charityId',
        'totalHashes',
        'totalTime',
    ];

    /**
     * Get the charity that the donation is for.
     */
    public function Charity()
    {
        return $this->belongsTo('App\Charity', 'charityId', 'id');
    }
}
