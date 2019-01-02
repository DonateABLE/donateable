<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMilestonesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('milestone', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('charityId')->unsigned();
            $table->string('faLink');
            $table->string('title');
            $table->string('description');


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
        Schema::dropIfExists('milestone');
    }
}
