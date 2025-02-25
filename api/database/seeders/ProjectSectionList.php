<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class ProjectSectionList extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('project_sections_list')->insert([
            [
                'name' => 'Overview',
                'slug' => 'overview',

            ], 
            [
                'name' => 'Amenities',
                'slug' => 'amenities',

            ], 
            [
                'name' => 'Price List',
                'slug' => 'price-list',
            ],
            [
                'name' => 'Highlights',
                'slug' => 'highlights',

            ],
            [
                'name' => 'Specifications',
                'slug' => 'specifications',

            ],
            [
                'name' => 'Master plan',
                'slug' => 'master-plan',

            ], 
            [
                'name' => 'Floor plan',
                'slug' => 'floor-plan',

            ],
            [
                'name' => 'Location Advantage',
                'slug' => 'location-advantage',

            ], 
            [
                'name' => 'Location',
                'slug' => 'location',

            ],
            [
                'name' => 'Gallery',
                'slug' => 'gallery',

            ],
            
            // Add More Section
        ]);
    }
}
