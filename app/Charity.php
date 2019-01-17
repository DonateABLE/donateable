<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

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
}
