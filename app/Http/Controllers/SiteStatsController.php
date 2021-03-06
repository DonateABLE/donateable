<?php

namespace App\Http\Controllers;

use App\SiteStats;
use Illuminate\Http\Request;
use Auth;

class SiteStatsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return SiteStats::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $siteStats = new SiteStats();
        $siteStats->fill($request->all());
        $siteStats->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\SiteStats  $siteStats
     * @return \Illuminate\Http\Response
     */
    public function show(SiteStats $siteStats)
    {
        return $siteStats;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\SiteStats  $siteStats
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SiteStats $siteStats)
    {
        $siteStats->fill($request->all());
        $siteStats->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\SiteStats  $siteStats
     * @return \Illuminate\Http\Response
     */
    public function destroy(SiteStats $siteStats)
    {
        $siteStats->delete();
    }

    /**
     * Increment the site stats for the provided charity.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function join(Request $request)
    {

        $userHasDonated = false;
        $charityId = $request->input('charityId');
        // Do not count logged in users that have already donated
        if (Auth::Check()) {
            // if this record exists, the user has donated
            if (Auth::User()->DonatedTo()->where('charityId', $charityId)->first()) {
                $userHasDonated = true;
            }
        }

        $site = SiteStats::where('charityId', $charityId)->firstOrCreate(
            [
                'charityId' => $charityId
            ],
            [
                'charityId' => $charityId,
                'currentlyDonating' => 0,
                'totalDonors' => 0
            ]
        );

        $site->currentlyDonating++;
        // only increment the total donors if the user has yet to donate
        if (!$userHasDonated) {
            $site->totalDonors++;
        }
        $site->save();
    }


    /**
     * Decrement the site stats for the provided charity.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function leave(Request $request)
    {
        $charityId = $request->input('charityId');
        $site = SiteStats::where('charityId', $charityId)->firstOrFail();

        $site->currentlyDonating--;
        $site->save();
    }
}
