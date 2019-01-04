<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

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

    /* Utility method to return a count of all current donors stored in the db */
    public static function getSitewideCurrentDonors() {
        return SiteStats::all()->sum('currentlyDonating');

    }

    /* Utility method to return a count of all total donors stored in the db */
    public static function getSitewideTotalDonors() {
        return SiteStats::all()->sum('totalDonors');

    }
}
