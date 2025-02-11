<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Website\Contact;
use Illuminate\Http\Request;
use App\Models\Admin\Dashboard;
use App\Models\Admin\Developer;
use App\Models\Admin\Amenities;
use App\Models\Admin\Blog;
use App\Models\Admin\Testimonials;
use App\Models\Admin\JobApplication;
use App\Models\Admin\Projects;

class DashboardController extends Controller
{

    public function developer ()
    {
        $data = Developer::count();
        return $data;
    }


    public function amenities ()
    {
        $data = Amenities::count();
        return $data;
    }


    public function blog ()
    {
        $data = Blog::count();
        return $data;
    }


    public function testimonials ()
    {
        $data = Testimonials::count();
        return $data;
    }


    public function jobApplication ()
    {
        $data = JobApplication::count();
        return $data;
    }

    

    public function project ()
    {
        $data = Projects::count();
        return $data;
    }
    
    public function totalEnquiry ()
    {
        $data = Contact::count();
        return $data;
    }

    public function index()
    {
        return response()->json([
            'status' => true,
            'statusCode' => 200,
            'message' => 'success',
            'data' => [
                'developer' => ['name'=>'Developers', 'count'=>$this->developer()],
                'amenities' => ['name'=>'Amenities', 'count' => $this->amenities()],
                'blog' => ['name' => 'Blogs', 'count' => $this->blog()],
                'testimonials' => ['name' => 'Testimonials', 'count' => $this->testimonials()],
                'jobApplication' => ['name' => 'Job Applications', 'count' => $this->jobApplication()],
                'project' => ['name' => 'Projects', 'count' => $this->project()],
                'total_enquiry' => ['name' => 'Total Enquiry', 'count' => $this->totalEnquiry()]

            ]
        ]);
    }

}
