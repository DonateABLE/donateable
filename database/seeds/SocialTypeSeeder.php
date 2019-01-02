<?php

use Illuminate\Database\Seeder;

class SocialTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('socialType')->insert([
            [
                'name' => 'facebook',
                'faLink' => 'fab fa-facebook-f'
            ],
            [
                'name' => 'twitter',
                'faLink' => 'fab fa-twitter'
            ],
            [
                'name' => 'instagram',
                'faLink' => 'fab fa-instagram'
            ],
            [
                'name' => 'email',
                'faLink' => 'fas fa-envelope'
            ],
            [
                'name' => 'website',
                'faLink' => 'fas fa-globe'
            ],
        ]);

    }
}
