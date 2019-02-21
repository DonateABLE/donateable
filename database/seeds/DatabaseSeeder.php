<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $this->call(AnonymousUserSeeder::class);
        $this->call(SocialTypeSeeder::class);
        $this->call(CharitySeeder::class);
        $this->call(GHSCharitySeeder::class);
        $this->call(DonateABLECharitySeeder::class);
    }
}
