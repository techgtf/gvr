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
                'name' => 'Floor plan',
                'slug' => 'floor-plan',

            ], [
                'name' => 'Amenities',
                'slug' => 'amenities',

            ], [
                'name' => 'Master plan',
                'slug' => 'master-plan',

            ], [
                'name' => 'Location',
                'slug' => 'location',

            ], [
                'name' => 'Faq',
                'slug' => 'faq',

            ], [
                'name' => 'Form',
                'slug' => 'form',

            ], [
                'name' => 'Location Advantage',
                'slug' => 'location-advantage',

            ], [
                'name' => 'Gallery',
                'slug' => 'gallery',

            ], [
                'name' => 'Highlights',
                'slug' => 'highlights',

            ]
           
        ]);
    }
}
