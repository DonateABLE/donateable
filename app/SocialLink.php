<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SocialLink extends Model
{
    protected $table = "socialLink";

    /**
     * Get the charity that owns the social link.
     */
    public function Charity()
    {
        return $this->belongsTo('App\Charity', 'charityId', 'id');
    }

    /**
     * Get the social type that the social link belongs to.
     */
    public function SocialType()
    {
        return $this->belongsTo('App\SocialType', 'socialTypeId', 'id');
    }

}
