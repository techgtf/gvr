<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class PagesSectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

//         title
// section_permissions

        DB::table('page_sections')->insert([
            [
                'name' => 'home-about',
                'page_type_id' => '1',
                'title'=>'About Us',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'true','sub_heading'=>'true']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])


            ],
            [
                'name' => 'our-projects',
                'page_type_id' => '1',
                'title'=>'Our Projects',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'true','sub_heading'=>'true']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])



            ],
            [
                'name' => 'our-verticals',
                'page_type_id' => '1',
                'title'=>'Other verticals',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'true','sub_heading'=>'true']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])



            ],
            [
                'name' => 'home-testimonial',
                'page_type_id' => '1',
                'title'=>'Our  testimonial',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'true','sub_heading'=>'true']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])


            ],
            [
                'name' => 'home-media',
                'page_type_id' => '1',
                'title'=>' Our media coverage',
                'section_permissions'=>json_encode(['description'=>'false','image'=>'false','sub_heading'=>'fasle']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])


            ],
            [
                'name' => 'home-blogs',
                'page_type_id' => '1',
                'title'=>'Blog',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'true','sub_heading'=>'true']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])


            ],
            [
                'name' => 'about-banner',
                'page_type_id' => '2', // about page
                'title'=>'Banner',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'true','sub_heading'=>'fasle']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])
            ],
            [
                'name' => 'about-overview',
                'page_type_id' => '2', // about page
                'title'=>'Overview',
                'section_permissions'=>json_encode(['description'=>'false','image'=>'false','sub_heading'=>'false']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])


            ],
            [
                'name' => 'about-mission',
                'page_type_id' => '2', // about page
                'title'=>'mission',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'false','sub_heading'=>'false']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])


            ],
            [
                'name' => 'about-vision',
                'page_type_id' => '2', // about page
                'title'=>'vision',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'false','sub_heading'=>'false']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])


            ],
            [
                'name' => 'about-team',
                'page_type_id' => '2', // about page
                'title'=>'Team',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'fasle','sub_heading'=>'false']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])


            ],
            [
                'name' => 'about-our-journey',
                'page_type_id' => '2', // about page
                'title'=>'Our Journey',
                'section_permissions'=>json_encode(['description'=>'fasle','image'=>'fsale','sub_heading'=>'false']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])


            ],
            [
                'name' => 'about-our-verticals',
                'page_type_id' => '2', // about page
                'title'=>'Our Verticals',
                'section_permissions'=>json_encode(['description'=>'false','image'=>'false','sub_heading'=>'false']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])


            ],
            [
                'name' => 'verticals-banner',
                'page_type_id' => '3', // verticles
                'title'=>'our-banner',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'true','sub_heading'=>'true']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'verticals-overview',
                'page_type_id' => '3', // verticles
                'title'=>'overview',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'true','sub_heading'=>'true']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'blogs-banner',
                'page_type_id' => '4', // blogs
                'title'=>'banner',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'true','sub_heading'=>'true']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])


            ],
            [
                'name' => 'contact-banner',
                'page_type_id' => '5', // contact-us
                'title'=>'banner',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'true','sub_heading'=>'true']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'career-banner',
                'page_type_id' => '6', // career
                'title'=>'banner',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'true','sub_heading'=>'true']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'work-culture-banner',
                'page_type_id' => '6', // work culture
                'title'=>'work culture',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'true','sub_heading'=>'true']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'csr-banner',
                'page_type_id' => '7', // csr
                'title'=>'Banner',
                'section_permissions'=>json_encode(['description'=>'false','image'=>'true','sub_heading'=>'false']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'csr-overview',
                'page_type_id' => '7', // csr
                'title'=>'overview',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'true','sub_heading'=>'true']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'csr-communities',
                'page_type_id' => '7', // csr
                'title'=>'communities',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'false','sub_heading'=>'false']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'csr-education-center',
                'page_type_id' => '7', // csr
                'title'=>'education center',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'false','sub_heading'=>'true']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Title','image'=>'Image','alt'=>'Alt text','description'=>'Short Description'])

            ],
            [
                'name' => 'loan-banner',
                'page_type_id' => '8', // home loan
                'title'=>'banner',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'true','sub_heading'=>'true']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'loan-overview',
                'page_type_id' => '8', // home loan
                'title'=>'overview',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'true','sub_heading'=>'true']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'tax-banner',
                'page_type_id' => '9', // tax benefits
                'title'=>'banner',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'true','sub_heading'=>'true']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'tax-overview',
                'page_type_id' => '9', // tax benefits
                'title'=>'overview',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'true','sub_heading'=>'true']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'area-converterbanner',
                'page_type_id' => '10', // area converter
                'title'=>'banner',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'true','sub_heading'=>'true']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'investment-banner',
                'page_type_id' => '11', // propety investment
                'title'=>'banner',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'true','sub_heading'=>'true']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'investment-overview',
                'page_type_id' => '11', // propety investment
                'title'=>'overview',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'true','sub_heading'=>'true']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'nri-corner-banner',
                'page_type_id' => '12', // nri corner
                'title'=>'banner',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'true','sub_heading'=>'true']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'nri-corner-faq',
                'page_type_id' => '12', // nri corner
                'title'=>'faq',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'true','sub_heading'=>'true']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            ],


            [
                'name' => 'nri-investor-banner',
                'page_type_id' => '13', // nri investor
                'title'=>'banner',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'true','sub_heading'=>'true']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'nri-investor-overview',
                'page_type_id' => '13', // nri investor
                'title'=>'overview',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'true','sub_heading'=>'true']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'faq-banner',
                'page_type_id' => '15', // faq
                'title'=>'banner',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'true','sub_heading'=>'true']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'emi-banner',
                'page_type_id' => '15', // EMI Calculator
                'title'=>'banner',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'true','sub_heading'=>'true']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'blog-details',
                'page_type_id' => '15', // Blog Details
                'title'=>'banner',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'true','sub_heading'=>'true']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            ],
           
        ]);
    }
}
