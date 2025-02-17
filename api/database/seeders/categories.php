<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class categories extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            [
                'slug' => 'commercial',
                'name' => 'Commercial',
                'status' => 1,

            ],
            [
                'slug' => 'residential',
                'name' => 'Residential',
                'status' => 1,

            ],[
                'slug' => 'Hospitality',
                'name' => 'Hospitality',
                'status' => 0,
    
            ]
        ]);
    }
}
