<?php

use Illuminate\Database\Seeder;

class AnonymousUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('Users')->insert([
            [
                'id' => '1',
                'firstName' => 'Anonymous',
                'lastName' => 'User',
                'username' => 'Anonymous',
                'email' => 'support@donateable.ca',
                'password' => Hash::make('$2152donateABLE$'),
                'communicationOptIn' => true,
                'publishStatsOptIn' => true,
                'isAdmin' => true,
            ]
        ]);
    }
}
