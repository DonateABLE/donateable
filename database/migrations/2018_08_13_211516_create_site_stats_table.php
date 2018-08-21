<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSiteStatsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('siteStats', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('charityId')->unsigned();
            $table->biginteger('currentlyDonating');
            $table->biginteger('totalDonors');
            $table->timestamps();

            // Foreign key contraint referencing the charity table
            $table->foreign('charityId')
              ->references('id')->on('charity')
              ->onDelete('cascade');
        });


    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('siteStats');
    }
}
