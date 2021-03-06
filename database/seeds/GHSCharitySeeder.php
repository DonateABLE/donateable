<?php

use Illuminate\Database\Seeder;

class GHSCharitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /**
         * Begin Seed Data for Guelph Humane Society
        **/
        DB::table('charity')->insert([
            [
                'shortName' => 'GHS',
                'longName' => 'Guelph Humane Society',
                'logo' => 'ghs.png',
                'shortDesc' => 'GHS provides hope, care and compassion to the over 3,000 animals that enter their care each year, that need more than just a temporary home.',
                'longDesc' => 'The Guelph Humane Society envisions a world where all animals are treated humanely, with respect and compassion. Our mission is to advocate for all animals, and in particular those animals whose lives we can influence, through care, education, community support, protection, and leadership. To achieve those goals, we provide animal sheltering, pet rehoming, adoption services, veterinary care, pet identification, a progressive spay/neuter program, and return of lost pets. We actively participate in innovative programs like Cat Healthy, Capacity for Care and Cats & Birds. We also provide care and assistance with sick, orphaned and injured wildlife.

As an affiliate of the Ontario Society for the Prevention of Cruelty to Animals (OSPCA), we employ OSPCA Agents to investigate allegations of cruelty or neglect in Guelph and Wellington County under provincial and federal animal cruelty legislation, and enforce those laws when necessary.

The Guelph Humane Society also boasts strong education programs that impact thousands of children and youth annually. Through weekly school visits in Guelph and Wellington County, children have the opportunity to participate in welfare and animal safety-based curriculum delivered by our Humane Educator. We also offer a weekday Junior Humane Club, a March Break Camp and summer camp programs.

The Guelph Humane Society is contracted by the City of Guelph, the Township of Centre Wellington and the Township of Guelph-Eramosa to provide animal services. Our staff enforce animal related by-laws, help stray domestic animals, respond to citizens with animal concerns, and provide emergency response to stray animals or animals (including wildlife) that are sick or injured.',
                'tagline' => '',
                'socialFeed' => 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FGuelphHumaneSociety%2F&tabs=timeline&width=400&height=420&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=571839313007975',
                'websiteUrl' => 'https://guelphhumane.ca/',
                'canadaHelpsUrl' => 'https://www.canadahelps.org/en/charities/the-guelph-humane-society/',
                'siteKey' => '9c97017814f71ddfc15d453e4a794a3cfd1e44e27da24c8cdd49f1d348ef69c4'
            ],
        ]);

        $charityId = DB::getPdo()->lastInsertId();

        DB::table('socialLink')->insert([
            [
                'charityId' => $charityId,
                'socialTypeId' => '1', //facebook
                'socialUrl' => 'https://www.facebook.com/GuelphHumaneSociety/'
            ],
            [
                'charityId' => $charityId,
                'socialTypeId' => '2', //twitter
                'socialUrl' => 'https://twitter.com/GuelphHumane'
            ],
            [
                'charityId' => $charityId,
                'socialTypeId' => '5', //website
                'socialUrl' => 'https://guelphhumane.ca/'
            ]
        ]);

        DB::table('milestone')->insert([
            [
                'charityId' => $charityId,
                'faLink' => 'fas fa-bone',
                'title' => 'Dog Bone',
                'description' => 'Cost = $.50 - ≈ 500,000 Hashes',
                'comment' => 'A tasty treat that will give your companion genuine joy.'
            ],
            [
                'charityId' => $charityId,
                'faLink' => 'fas fa-shopping-bag',
                'title' => 'Bag of Food',
                'description' => 'Cost = $40 - ≈ 4,000,000,000 Hashes',
                'comment' => 'Providing key nutrients every meal to your furry friend.'
            ],
            [
                'charityId' => $charityId,
                'faLink' => 'fas fa-microchip',
                'title' => 'Micro Chip Scanner',
                'description' => 'Cost = $80 - ≈ 8,000,000,000 Hashes',
                'comment' => 'A scanner used to read pet microchips and help reunite lost pets with their families.'
            ],
        ]);

        /**
         * End Seed Data for Guelph Humane Society
        **/
    }
}
