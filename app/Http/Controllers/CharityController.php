<?php

namespace App\Http\Controllers;

use App\Charity;
use App\DonatedTo;
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
        $charity = Charity::where('longName', $charityName)->firstOrFail();
        if (Auth::check()) {
            $this->currentUser = Auth::user();
            error_log("UserId: " . $this->currentUser->id);
            error_log("CharityId: " .$this->currentUser->id);
            $donationInfo = DonatedTo::firstOrCreate(
                [
                    'userId' => $this->currentUser->id,
                    'charityId' => $charity->id,
                ],
                [
                    'userId' => $this->currentUser->id,
                    'charityId' => $charity->id,
                    'totalHashes' => 0,
                    'totalTime' => 0,
                ]
            );

            return View::make('charity.index')
                ->with('charity', $charity)
                ->with('user', $this->currentUser)
                ->with('donated', $donationInfo);
        }
        else {


            return View::make('charity.index')
                ->with('charity', $charity);
        }
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
