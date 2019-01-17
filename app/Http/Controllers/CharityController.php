<?php

namespace App\Http\Controllers;

use App\Charity;
use App\DonatedTo;
use App\DonationBuffer;
use App\SocialLink;
use Illuminate\Http\Request;
use View;
use Auth;

class CharityController extends Controller
{

    private $currentUser = null;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $charities = Charity::with('SocialLinks.SocialType')->get();

        return View::make('charity.list')->with('charities', $charities);
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
     * @param  \App\Charity  $charity
     * @return \Illuminate\Http\Response
     */
    public function show(Charity $charity)
    {
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Charity  $charity
     * @return \Illuminate\Http\Response
     */
    public function showCharity(String $charityName)
    {
        $charity = Charity::with('Milestones')->where('longName', $charityName)->firstOrFail();

        return View::make('charity.index')
            ->with('charity', $charity);
    }

    /**
     * Donation page for charity
     *
     * @param  \App\Charity  $charity
     * @return \Illuminate\Http\Response
     */
    public function showDonate(String $charityName)
    {
        $charity = Charity::where('longName', $charityName)->firstOrFail();
        $userId = 1;
        $donationInfo = null;

        // override user id if authenticated
        if (Auth::check()) {
            $userId = Auth::user()->id;
            $donationInfo = DonatedTo::firstOrCreate(
                [
                    'userId' => $userId,
                    'charityId' => $charity->id,
                ],
                [
                    'userId' => $userId,
                    'charityId' => $charity->id,
                    'totalHashes' => 0,
                    'totalTime' => 0,
                ]
            );
        }
        // If not authenticated, generate a donation buffer
        // so that the user's contribution can be logged anyway
        else {
            $donationInfo = DonationBuffer::create([
                'charityId' => $charity->id,
                'totalHashes' => 0,
                'totalTime' => 0,
            ]);

        }


        return View::make('charity.donate')
            ->with('charity', $charity)
            ->with('donated', $donationInfo);
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Charity  $charity
     * @return \Illuminate\Http\Response
     */
    public function edit(Charity $charity)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Charity  $charity
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Charity $charity)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Charity  $charity
     * @return \Illuminate\Http\Response
     */
    public function destroy(Charity $charity)
    {
        //
    }


}
