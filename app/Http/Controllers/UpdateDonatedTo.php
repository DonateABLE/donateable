<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\DonatedTo;
use App\DonationBuffer;

class UpdateDonatedTo extends Controller
{

    /**
     *
     *
     * @param  Request $request
     * @return Redirect
     */
    public function __invoke(Request $request)
    {

        $data = array(
            'charityId' => $request->input('charityId'),
            'totalHashes' => $request->input('totalHashes'),
            'totalTime' => $request->input('totalTime'),
        );

        $donationId = $request->input('donationId');
        $donationRecord = null;

        // If the user is authenticated retrieve from the donations table
        if (Auth::check()) {
            $donationRecord = DonatedTo::find($donationId);
        }
        // if the user is anonymous retrieve from the donation buffer table
        else {
            $donationRecord = DonationBuffer::find($donationId);
        }

        if ($donationRecord) {
            $data['totalHashes'] += $donationRecord->totalHashes;
            $data['totalTime'] += $donationRecord->totalTime;
            $donationRecord->update($data);
        }
        return;

    }
}
