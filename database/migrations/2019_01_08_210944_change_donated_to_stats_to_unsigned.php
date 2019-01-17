<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ChangeDonatedToStatsToUnsigned extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('donatedTo', function (Blueprint $table) {
            $table->biginteger('totalHashes')->unsigned()->change();
            $table->biginteger('totalTime')->unsigned()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('donatedTo', function (Blueprint $table) {
            $table->biginteger('totalHashes')->change();
            $table->biginteger('totalTime')->change();
        });
    }
}
