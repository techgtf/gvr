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
            ['name' => 'Our Verticals'],
            // 4
            ['name' => 'Blog'],
            // 5
            ['name' => 'Contact us'],
            // 6
            ['name' => 'Career'],
            // 7
            ['name' => 'CSR'],
            // 8
            ['name' => 'Home Loans'],
            // 9
            ['name' => 'Tax Benefits'],
            // 10
            ['name' => 'Area Converter'],
            // 11
            ['name' => 'Property Investment'],
            // 12
            ['name' => 'NRI Corner'],
            // 13
            ['name' => 'NRI Investors'],
            // 14
            ['name' => 'Faq'],
            // 15
            ['name' => 'EMI Calculator'],
            // 16
            ['name' => 'Blog Details'],
            // Add more data here
        ]);
    }
}
