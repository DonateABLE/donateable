<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\DonatedTo;
use App\DonationBuffer;
use Carbon\Carbon;
use App\Charity;

class DumpDonationBuffer extends Controller
{
    /**
     * Push stale donations from the buffer table into the donatedTo table
     *
     *
     * @return null
     */
    public function __invoke()
    {
        // ORM object to retrieve records from before midnight of the current day
        $staleDonations = DonationBuffer::whereDate('updated_at', '<', Carbon::today()->toDateString());

        // iterate through each charity id
        foreach (Charity::all() as $charity) {
            // extend the query to cover the current charity
            $staleDonationsForCharity = $staleDonations->where('charityId', $charity->id);
            // Retrieve the sums for time and hashes that were donated
            $staleDonationTime = $staleDonationsForCharity->sum('totalTime');
            $staleDonationHashes = $staleDonationsForCharity->sum('totalHashes');

            // Only store data if it is complete
            if ($staleDonationTime && $staleDonationHashes) {
                // userId = 1 is the secret, anonymous user for aggregated data
                // here, we increment the correct fields by the new totals
                DonatedTo::where('userId', 1)
                    ->where('charityId', $charity->id)
                    ->increment('totalTime', $staleDonationTime);
                DonatedTo::where('userId', 1)
                    ->where('charityId', $charity->id)
                    ->increment('totalHashes', $staleDonationHashes);
            }

        }

        // Finally, purge these records
        $staleDonations->delete();
    }
}
