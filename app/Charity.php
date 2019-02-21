<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Charity extends Model
{
    protected $table = 'charity';


    /**
     * Define a one to many relationship with sociallinks
    **/
    public function SocialLinks()
    {
        return $this->hasMany('App\SocialLink', 'charityId', 'id');
    }


    /**
     * Define a one to many relationship with milestones
    **/
    public function Milestones()
    {
        return $this->hasMany('App\Milestone', 'charityId', 'id');
    }

    /**
     * Define a one to many relationship with donatedto
    **/
    public function DonatedTo()
    {
        return $this->hasMany('App\DonatedTo', 'charityId', 'id');
    }

    /**
     * Define a one to many relationship with donatedto
    **/
    public function DonationBuffer()
    {
        return $this->hasMany('App\DonationBuffer', 'charityId', 'id');
    }

    /* Utility method to return a count of current donors (for the charity)
     * stored in the db
     * This is achieved by counting both logged in and anonymous donation
     * records that have occurred within the past 10 minutes
     */
    public function getCurrentDonors() {

        // format a timestring representing 10 minutes ago
        $now = Carbon::now()->subMinutes(10);
        $timeThreshold = $now->format('H:i:s');
        // Create a datestring of today
        $dateThreshold = $now->toDateString();

        // Query donatedTo table
        $donatedToCurrent = $this->donatedTo()->whereDate('updated_at', '=', $dateThreshold)
            ->whereTime('updated_at', '>', $timeThreshold)
            ->count();

        $donationBufferCurrent = $this->donationBuffer()->whereDate('updated_at', '=', $dateThreshold)
            ->whereTime('updated_at', '>', $timeThreshold)
            ->count();

        $totalDonorsAtCurrent = $donatedToCurrent + $donationBufferCurrent;
        return number_format($totalDonorsAtCurrent, 0, ',', ' ');

    }

    /**
     * Utility method to return a count of lifetime donors to the charity
    **/
    public function getTotalDonors() {

        // Count all hashes in the donationBuffer table
        $donatedToDonors = $this->DonatedTo()->count();
        // Count all donors in the donationBuffer table
        $donationBufferDonors = $this->DonationBuffer()->count();
        // return the total count
        return number_format(($donatedToDonors + $donationBufferDonors), 0, ',', ' ');
    }

    /**
     * Utility method to return a count of all hashes donated to the charity
    **/
    public function getTotalHashes() {
        // Sum all hashes in the donatedTo table
        $donatedToHashes = $this->DonatedTo()->sum('totalHashes');

        // Sum all hashes in the donationBuffer table
        $donationBufferHashes = $this->DonationBuffer()->sum('totalHashes');

        // return the total count
        return number_format(($donatedToHashes + $donationBufferHashes), 0, ',', ' ');

    }


    public function smallLogo() {
        echo "<img src=" . asset('img/charity/small/' . $this->logo) . " alt=" . $this->longName . " Logo>";
    }
}
