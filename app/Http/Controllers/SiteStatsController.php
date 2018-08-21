<?php

namespace App\Http\Controllers;

use App\SiteStats;
use Illuminate\Http\Request;

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
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\SiteStats  $siteStats
     * @return \Illuminate\Http\Response
     */
    public function show(SiteStats $siteStats)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\SiteStats  $siteStats
     * @return \Illuminate\Http\Response
     */
    public function edit(SiteStats $siteStats)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\SiteStats  $siteStats
     * @return \Illuminate\Http\Response
     */
    public function destroy(SiteStats $siteStats)
    {
        //
    }

    /**
     * Increment the site stats for the provided charity.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
     public function join(Request $request) {
         $charityId = $request->input('charityId');
         $site = SiteStats::where('charityId', $charityId)->firstOrFail();

         $site->currentlyDonating++;
         $site->totalDonors++;
         $site->save();

     }


     /**
      * Decrement the site stats for the provided charity.
      *
      * @param  \Illuminate\Http\Request  $request
      * @return \Illuminate\Http\Response
      */
      public function leave(Request $request) {
          $charityId = $request->input('charityId');
          $site = SiteStats::where('charityId', $charityId)->firstOrFail();

          $site->currentlyDonating--;
          $site->save();

      }
}
