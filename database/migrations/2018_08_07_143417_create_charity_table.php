<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCharityTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('charity', function (Blueprint $table) {
            $table->increments('id');
            $table->string('shortName')->default(null);
            $table->string('longName');
            $table->string('logo');
            $table->text('shortDesc');
            $table->text('longDesc');
            $table->text('tagline');
            $table->text('socialFeed');
            $table->text('websiteUrl');
            $table->string('siteKey');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('charity');
    }
}
