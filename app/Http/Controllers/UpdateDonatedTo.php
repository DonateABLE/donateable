<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\DonatedTo;

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
            'userId' => 1,
            'charityId' => $request->input('charityId'),
            'totalHashes' => $request->input('totalHashes'),
            'totalTime' => $request->input('totalTime'),
        );

        // If the user is authenticated, retrieve their id
        if (Auth::check()) {
            $data['userId'] = Auth::user()->id;
        }

        $donationRecord = DonatedTo::where('userId', $data['userId'])
            ->where('charityId', $data['charityId'])
            ->first();

        if ($donationRecord) {
            $data['totalHashes'] += $donationRecord->totalHashes;
            $data['totalTime'] += $donationRecord->totalTime;
            $donationRecord->update($data);
        }

        return;

    }
}
