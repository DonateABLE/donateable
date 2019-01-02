<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Milestone extends Model
{
    protected $table = "milestone";

    /**
     * Get the charity that owns the social link.
     */
    public function Charity()
    {
        return $this->belongsTo('App\Charity', 'charityId', 'id');
    }}
