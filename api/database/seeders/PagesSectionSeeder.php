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
                'section_permissions'=>json_encode(['description'=>'false','image'=>'true','sub_heading'=>'true']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Short Description','image'=>'Image','alt'=>'Alt text','description'=>'Description'])


            ],
            [
                'name' => 'our-projects',
                'page_type_id' => '1',
                'title'=>'Our Projects',
                'section_permissions'=>json_encode(['description'=>'false','image'=>'false','sub_heading'=>'false']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])



            ],
            [
                'name' => 'our-verticals',
                'page_type_id' => '1',
                'title'=>'Other verticals',
                'section_permissions'=>json_encode(['description'=>'false','image'=>'false','sub_heading'=>'false']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])



            ],
            [
                'name' => 'home-testimonial',
                'page_type_id' => '1',
                'title'=>'Our  Testimonial',
                'section_permissions'=>json_encode(['description'=>'false','image'=>'false','sub_heading'=>'false']),
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
                'section_permissions'=>json_encode(['description'=>'fasle','image'=>'true','sub_heading'=>'fasle']),
                'fields_name'=>json_encode(['heading'=>'Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])
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
                'section_permissions'=>json_encode(['description'=>'true','image'=>'true','sub_heading'=>'false']),
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
                'name' => 'blogs-banner',
                'page_type_id' => '3', // blogs
                'title'=>'banner',
                'section_permissions'=>json_encode(['description'=>'false','image'=>'true','sub_heading'=>'false']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])


            ],
            [
                'name' => 'contact-banner',
                'page_type_id' => '4', // contact-us
                'title'=>'banner',
                'section_permissions'=>json_encode(['description'=>'false','image'=>'true','sub_heading'=>'false']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'career-banner',
                'page_type_id' => '5', // career
                'title'=>'banner',
                'section_permissions'=>json_encode(['description'=>'false','image'=>'true','sub_heading'=>'false']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'career-overview',
                'page_type_id' => '5', // work culture
                'title'=>'Overview',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'false','sub_heading'=>'false']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'career-work-culture',
                'page_type_id' => '5', // work culture
                'title'=>'work culture',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'true','sub_heading'=>'false']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'esg-banner',
                'page_type_id' => '6', // esg
                'title'=>'Banner',
                'section_permissions'=>json_encode(['description'=>'false','image'=>'true','sub_heading'=>'false']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'esg-overview',
                'page_type_id' => '6', // esg
                'title'=>'overview',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'true','sub_heading'=>'false']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'esg-social',
                'page_type_id' => '6', // esg
                'title'=>'social',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'false','sub_heading'=>'false']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'esg-environment-center',
                'page_type_id' => '6', // esg
                'title'=>'Environment Center',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'false','sub_heading'=>'true']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Title','image'=>'Image','alt'=>'Alt text','description'=>'Short Description'])

            ],
            [
                'name' => 'esg-governance-center',
                'page_type_id' => '6', // esg governance
                'title'=>'Governance Center',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'false','sub_heading'=>'true']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Title','image'=>'Image','alt'=>'Alt text','description'=>'Short Description'])

            ],
            [
                'name' => 'loan-banner',
                'page_type_id' => '7', // home loan
                'title'=>'banner',
                'section_permissions'=>json_encode(['description'=>'false','image'=>'true','sub_heading'=>'false']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'loan-overview',
                'page_type_id' => '7', // home loan
                'title'=>'overview',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'false','sub_heading'=>'true']),
                'fields_name'=>json_encode(['heading'=>'Title','sub_heading'=>'short Description','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'tax-banner',
                'page_type_id' => '8', // tax benefits
                'title'=>'banner',
                'section_permissions'=>json_encode(['description'=>'false','image'=>'true','sub_heading'=>'false']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'tax-overview',
                'page_type_id' => '8', // tax benefits
                'title'=>'overview',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'true','sub_heading'=>'true']),
                'fields_name'=>json_encode(['heading'=>'Heading','sub_heading'=>'Short Description','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'area-converterbanner',
                'page_type_id' => '9', // area converter
                'title'=>'banner',
                'section_permissions'=>json_encode(['description'=>'false','image'=>'true','sub_heading'=>'false']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'investment-banner',
                'page_type_id' => '10', // propety investment
                'title'=>'banner',
                'section_permissions'=>json_encode(['description'=>'false','image'=>'true','sub_heading'=>'false']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            ],
            // [
            //     'name' => 'investment-overview',
            //     'page_type_id' => '10', // propety investment
            //     'title'=>'overview',
            //     'section_permissions'=>json_encode(['description'=>'true','image'=>'true','sub_heading'=>'true']),
            //     'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            // ],
            [
                'name' => 'nri-corner-banner',
                'page_type_id' => '11', // nri corner
                'title'=>'banner',
                'section_permissions'=>json_encode(['description'=>'false','image'=>'true','sub_heading'=>'false']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'nri-investor-banner',
                'page_type_id' => '12', // nri investor
                'title'=>'banner',
                'section_permissions'=>json_encode(['description'=>'false','image'=>'true','sub_heading'=>'false']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'nri-investor-overview',
                'page_type_id' => '12', // nri investor
                'title'=>'overview',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'true','sub_heading'=>'false']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'faq-banner',
                'page_type_id' => '13', // faq
                'title'=>'banner',
                'section_permissions'=>json_encode(['description'=>'false','image'=>'true','sub_heading'=>'false']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'emi-banner',
                'page_type_id' => '14', // EMI Calculator
                'title'=>'banner',
                'section_permissions'=>json_encode(['description'=>'false','image'=>'true','sub_heading'=>'false']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'blog-details',
                'page_type_id' => '15', // Blog Details
                'title'=>'banner',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'true','sub_heading'=>'true']),
                'fields_name'=>json_encode(['heading'=>'Section Heading','sub_heading'=>'Section Sub Heading','image'=>'Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'testimonials-banner',
                'page_type_id' => '16', // Testimonials
                'title'=>'banner',
                'section_permissions'=>json_encode(['description'=>'false','image'=>'true','sub_heading'=>'false']),
                'fields_name'=>json_encode(['heading'=>'Heading','sub_heading'=>'Section Sub Heading','image'=>'Banner Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'testimonials-overview',
                'page_type_id' => '16', // Testimonials
                'title'=>'overview',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'false','sub_heading'=>'false']),
                'fields_name'=>json_encode(['heading'=>'Heading','sub_heading'=>'Section Sub Heading','image'=>'Banner Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'blogs-banner',
                'page_type_id' => '17', // Blogs
                'title'=>'overview',
                'section_permissions'=>json_encode(['description'=>'false','image'=>'true','sub_heading'=>'false']),
                'fields_name'=>json_encode(['heading'=>'Heading','sub_heading'=>'Section Sub Heading','image'=>'Banner Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'residential-banner',
                'page_type_id' => '18', // Residential
                'title'=>'Banner',
                'section_permissions'=>json_encode(['description'=>'false','image'=>'true','sub_heading'=>'false']),
                'fields_name'=>json_encode(['heading'=>'Heading','sub_heading'=>'Section Sub Heading','image'=>'Banner Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'residential-overview',
                'page_type_id' => '18', // Residential
                'title'=>'Overview',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'true','sub_heading'=>'false']),
                'fields_name'=>json_encode(['heading'=>'Heading','sub_heading'=>'Section Sub Heading','image'=>'Banner Image','alt'=>'Alt text','description'=>'Description'])

            ],[
                'name' => 'commercial-banner',
                'page_type_id' => '19', // Commercial
                'title'=>'Banner',
                'section_permissions'=>json_encode(['description'=>'false','image'=>'true','sub_heading'=>'false']),
                'fields_name'=>json_encode(['heading'=>'Heading','sub_heading'=>'Section Sub Heading','image'=>'Banner Image','alt'=>'Alt text','description'=>'Description'])

            ],
            [
                'name' => 'commercial-overview',
                'page_type_id' => '19', // Commercial
                'title'=>'Overview',
                'section_permissions'=>json_encode(['description'=>'true','image'=>'true','sub_heading'=>'false']),
                'fields_name'=>json_encode(['heading'=>'Heading','sub_heading'=>'Section Sub Heading','image'=>'Banner Image','alt'=>'Alt text','description'=>'Description'])

            ],

        ]);
    }
}
