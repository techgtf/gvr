<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('pages')->insert([
            ['name' => 'Home Page'],
            ['name' => 'About Page'],
            ['name' => 'Career'],
            ['name' => 'Blog'],
            ['name' => 'Contact us'],
            ['name' => 'Faq'],
            ['name' => 'Testimonial'],
            ['name' => 'Work Culture'],


            // Add more data here
        ]);
    }
}
