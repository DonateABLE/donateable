<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class SiteStats extends Model
{
    protected $table = "siteStats";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'charityId', 'totalDonors', 'currentlyDonating'
    ];

    /* Utility method to return a count of all current donors stored in the db
     * This is achieved by counting both logged in and anonymous donation
     * records that have occurred within the past 10 minutes
     */
    public static function getSitewideCurrentDonors() {

        $now = Carbon::now()->subMinutes(10);
        $timeThreshold = $now->format('H:i:s');
        $dateThreshold = $now->toDateString();
        $donatedTo = DonatedTo::whereDate('updated_at', '=', $dateThreshold)
            ->whereTime('updated_at', '>', $timeThreshold)
            ->count();

        $donationBuffer = DonationBuffer::whereDate('updated_at', '=', $dateThreshold)
            ->whereTime('updated_at', '>', $timeThreshold)
            ->count();

        $totalDonorsAtCurrent = $donatedTo + $donationBuffer;
        return number_format($totalDonorsAtCurrent, 0, ',', ' ');


    }

    /* Utility method to return a count of all total donors stored in the db */
    public static function getSitewideTotalDonors() {
        $totalDonorsLifetime = SiteStats::all()->sum('totalDonors');
        return number_format($totalDonorsLifetime, 0, ',', ' ');


    }
}
