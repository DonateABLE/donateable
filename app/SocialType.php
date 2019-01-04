<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SocialType extends Model
{
    protected $table = "socialType";

    /**
     * Define a one to many relationship with sociallinks
    **/
    public function socialLinks()
    {
        return $this->hasMany('App\SocialLink');
    }
}
