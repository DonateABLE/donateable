<?php

use Illuminate\Database\Seeder;

class CharitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        /**
         * Begin Seed Data for VSW Wellington
        **/
        DB::table('charity')->insert([
            [
                'shortName' => 'VSW',
                'longName' => 'Victim Services Wellington',
                'logo' => 'Victim-Services.png',
                'shortDesc' => 'VSW create opportunities to heal, foster hope, and promote a safer and healthier community to every victim of crime or tragic circumstances.',
                'longDesc' => 'Anyone can be a victim. It is in times of trauma that victims need compassion, support, and assistance most. Whether an accident has occurred, a crime committed, or a loss suffered. Victim Services Wellinton (VSW) is available 24 hours a day, 7 days a week, all year round to support victims.

                A non-profit organization, established in 1997, VSW has partnerships with Guelph Police Services and the Ontario Provinicial Police to deliver support to victims of crime in our area. Volunteers are available on scene to help victims and their families through difficult events and refer them to appropriate community groups and organizations.

                VSW volunteers are trained extensively to help meet the short-term needs of victims. They are backed with widespread knowledge and experience in communication, crisis interpresence to what can be highly emotional, stressful, and overwhelming circumstances.',
                'tagline' => 'Community. Connection. Crisis Support.',
                'socialFeed' => 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fwww.vswguelph.on.ca%2F&tabs=timeline&width=400&height=420&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=571839313007975',
                'websiteUrl' => 'http://www.vswguelph.on.ca/',
                'canadaHelpsUrl' => 'https://www.canadahelps.org/en/charities/victim-services-wellington/',
                'siteKey' => '68fec9995e69129eb0405e983ce8e2f66a2e4412e05eb6b94c4375d52fd63999'
            ],
        ]);

        $charityId = DB::getPdo()->lastInsertId();

        DB::table('socialLink')->insert([
            [
                'charityId' => $charityId,
                'socialTypeId' => '1', //facebook
                'socialUrl' => 'https://www.facebook.com/www.vswguelph.on.ca/'
            ],
            [
                'charityId' => $charityId,
                'socialTypeId' => '2', //twitter
                'socialUrl' => 'https://twitter.com/vs_wellington'
            ],
            [
                'charityId' => $charityId,
                'socialTypeId' => '5', //website
                'socialUrl' => 'http://www.vswguelph.on.ca/'
            ]
        ]);

        DB::table('milestone')->insert([
            [
                'charityId' => $charityId,
                'faLink' => 'fas fa-battery-full',
                'title' => 'Lifesaver Bracelet Battery',
                'description' => 'Cost = $5 - Approx. 500,000,000 Hashes',

            ],
            [
                'charityId' => $charityId,
                'faLink' => 'fas fa-hand-holding-heart',
                'title' => 'Volunteer Training',
                'description' => 'Cost = $100 - Approx. 10,000,000,000 Hashes',

            ],
            [
                'charityId' => $charityId,
                'faLink' => 'fas fa-ambulance',
                'title' => 'Lifesaver Bracelet',
                'description' => 'Cost = $400 - Approx. 40,000,000,000 Hashes',

            ],
        ]);
        /**
         * End Seed Data for VSW Wellington
        **/

    }
}
