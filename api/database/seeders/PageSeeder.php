<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('pages')->insert([
            // 1
            ['name' => 'Home Page'],
            // 2
            ['name' => 'About Page'],
            // 3
            ['name' => 'Blog'],
            // 4
            ['name' => 'Contact us'],
            // 5
            ['name' => 'Career'],
            // 6
            ['name' => 'ESG'],
            // 7
            ['name' => 'Home Loans'],
            // 8
            ['name' => 'Tax Benefits'],
            // 9
            ['name' => 'Area Converter'],
            // 10
            ['name' => 'Property Investment'],
            // 11
            ['name' => 'NRI Corner'],
            // 12
            ['name' => 'NRI Investors'],
            // 13
            ['name' => 'Faq'],
            // 14
            ['name' => 'EMI Calculator'],
            // 15
            ['name' => 'Blog Details'],
            // 16
            ['name' => 'Testimonials'],
            // 17
            ['name' => 'Blogs'],
            // Add more data here
        ]);
    }
}
