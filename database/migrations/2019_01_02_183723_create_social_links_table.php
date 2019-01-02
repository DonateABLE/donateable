<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSocialLinksTable extends Migration
{
    /**
    * Run the migrations.
    *
    * @return void
    */
    public function up()
    {
        Schema::create('socialLink', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('charityId')->unsigned();
            $table->integer('socialTypeId')->unsigned();
            $table->string('socialUrl');

            $table->foreign('charityId')
                ->references('id')->on('charity')
                ->onDelete('cascade');

            $table->foreign('socialTypeId')
                ->references('id')->on('socialType')
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
        Schema::dropIfExists('socialLink');
    }
}
