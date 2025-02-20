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
            ['name' => 'Home Page', 'type' => null],
            // 2
            ['name' => 'About Page', 'type' => null],
            // 3
            ['name' => 'Blog', 'type' => null],
            // 4
            ['name' => 'Contact us', 'type' => null],
            // 5
            ['name' => 'Career', 'type' => null],
            // 6
<<<<<<< HEAD
<<<<<<< HEAD
            ['name' => 'ESG'],
=======
            ['name' => 'CSR', 'type' => null],
>>>>>>> 4b34a1d (make ESG api)
=======
            ['name' => 'ESG', 'type' => null],
>>>>>>> d495d8b (pages section)
            // 7
            ['name' => 'Home Loans', 'type' => null],
            // 8
            ['name' => 'Tax Benefits', 'type' => null],
            // 9
            ['name' => 'Area Converter', 'type' => null],
            // 10
            ['name' => 'Property Investment', 'type' => null],
            // 11
            ['name' => 'NRI Corner', 'type' => null],
            // 12
            ['name' => 'NRI Investors', 'type' => null],
            // 13
            ['name' => 'Faq', 'type' => null],
            // 14
            ['name' => 'EMI Calculator', 'type' => null],
            // 15
            ['name' => 'Blog Details', 'type' => null],
            // 16
            ['name' => 'Testimonials', 'type' => null],
            // 17
            ['name' => 'Blogs', 'type' => null],
            // 18
            [
                'name' => 'Residential',
                'type' => 'platter',
            ],
            //19
            [
                'name' => 'Commercial',
                'type' => 'platter',
            ],

            // Add more data here
        ]);
    }
}
