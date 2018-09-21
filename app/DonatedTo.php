<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DonatedTo extends Model
{
    protected $table = "donatedTo";

    protected $fillable = [
        'userId',
        'charityId',
        'totalHashes',
        'totalTime',
    ];

}
