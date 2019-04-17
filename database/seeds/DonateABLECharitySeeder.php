<?php

use Illuminate\Database\Seeder;

class DonateABLECharitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /**
         * Begin Seed Data for donateABLE
        **/
        DB::table('charity')->insert([
            [
                'shortName' => '',
                'longName' => 'donateABLE',
                'logo' => 'donateable-charity.png',
                'shortDesc' => 'donateABLE allows anyone with a computer to make a difference by donating unused computer CPU and turning it into real monetary value.',
                'longDesc' => 'DonateABLE is a website project developed and managed by Synergenics. This solution will take small amounts of computational power donated from individuals and pool it together into a larger resource to generate real monetary value for your charity. This website is going to allow anyone with a computer to make a difference no matter what their financial situation is, by donating unused computer time.

DonateABLE will take unused CPU power from the donators computer to help mine digital currency and donate to charities as a real monetary value. Dealing in the world of technology, we have identified a special and unique opportunity to help generate revenue for charities without any actual cash outlay from those who wish to help.',
                'tagline' => 'Support Local Charities in Guelph Without Opening your Wallet.',
                'socialFeed' => 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FdonateABLE%2F&tabs=timeline&width=400&height=420&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=571839313007975',
                'websiteUrl' => 'https://donateable.ca/',
                'canadaHelpsUrl' => '',
                'siteKey' => '033c1578247273f85dc4ae8cac6b3d8314568ff18cd77a66172bee2ded4a59bd'
            ],
        ]);

        $charityId = DB::getPdo()->lastInsertId();

        DB::table('socialLink')->insert([
            [
                'charityId' => $charityId,
                'socialTypeId' => '1', //facebook
                'socialUrl' => 'https://www.facebook.com/donateABLE/'
            ],
            [
                'charityId' => $charityId,
                'socialTypeId' => '2', //twitter
                'socialUrl' => 'https://twitter.com/donateABLE_ca'
            ],
            [
                'charityId' => $charityId,
                'socialTypeId' => '5', //website
                'socialUrl' => 'https://donateable.ca/'
            ]
        ]);

        /**
         * End Seed Data for donateABLE
        **/
    }
}
