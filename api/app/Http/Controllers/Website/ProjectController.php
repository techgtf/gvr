<?php

namespace App\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use App\Models\Admin\Categories;
use App\Models\Admin\Project\ProjectPrice;
use App\Models\Website\Project\ProjectBanner;
use App\Models\Website\Project\ProjectLocationAdvantage;
use App\Models\Website\Project\ProjectFaq;
use App\Models\Website\Project\ProjectAmenities;
use App\Models\Website\Project\ProjectAmenitiesGallery;
use App\Models\Website\Project\ProjectFloorPlan;
use App\Models\Website\Project\ProjectSection;
use App\Models\Website\Project\ProjectHighlight;
use App\Models\Website\Project\ProjectGallery;
use App\Models\Website\Project\ProjectSpecification;
use App\Models\Website\Project\ProjectSpecificationList;
use App\Models\Website\Projects;
use App\Models\Website\TypologiesGallery;
use App\Models\Website\Typology;
use Illuminate\Http\Request;
use Livewire\ComponentConcerns\RendersLivewireComponents;

class ProjectController extends Controller
{
    
    public function index(Request $request){

        if($request->category == 'commercial'){
            $this->getCommercialPlatter($request);
        }
        
        $perPage = $request->input('per_page', 4); // Number of products per page
        $page = $request->input('page', 1); // Current page number
         
        $category = $request->input('category');
  
        $project = Projects::with(['location','typologie','developer','category','subtypologie','startingSize'=>function($query){
                $query->min('size');
            }
        ]);
        
        $project->when($request->budget,function($q,$budget){
            $q->whereHas('startingPrice', function($query) use ($budget) {
                $query->selectRaw('min(price) as min_price, project_id')
                      ->groupBy('project_id');
                        if($budget==1){
                            $query->havingRaw('min_price <= 2500000');
                        }else if($budget==2){
                            $query->havingRaw('min_price BETWEEN 2500000 AND  5000000');

                        }
                        else if($budget==3){
                            $query->havingRaw('min_price BETWEEN 5000000 AND  10000000');

                        }
                        else if($budget==4){
                            $query->havingRaw('min_price BETWEEN 10000000 AND  100000000');

                        }
                        else if($budget==5){
                            $query->havingRaw('min_price >= 100000000');

                        }  
            });
    });
    $project->when($request->city,function($q,$city){
        $q->whereHas('location', function($query) use ($city) {
            $query->groupBy('project_id');
                  $query->where('city',$city);

        });
        

    })

    ->with(['startingPrice' => function($query) {
        $query->selectRaw('min(price) as price, project_id')->groupBy('project_id');
    }]);

        if($category){
         $project->whereHas('category', function ($query) use ($category) {
                $query->where('slug', $category);
            });
        }

      
        $project->when($request->is_feature,function($q,$is_feature){
            $q->where('is_feature',$is_feature);
        });

        $project->when($request->sub_typology,function($q,$sub_typology){
            $q->where('sub_typology',$sub_typology);
        });

        $project->when($request->developer,function($q,$developer){
            $q->where('developer_id',$developer);
        });


        
        $project->when($request->propertyStatus,function($q,$propertyStatus){
            $q->whereIn('project_status',explode(',',$propertyStatus));
        });

        $project->when($request->propertyType,function($q,$propertyType){
            $q->whereIn('typologie_id',explode(',',$propertyType));
        });
        $project->when($request->search,function($q,$search){
            $q->where('name', 'like', "%{$search}%");
        });

        $project->when($request->budget,function($q,$budget){
            if($budget==1){

                // $q->where('name', 'like', "%{$search}%");
            }
        });


        
        $result=$project->paginate($perPage, ['*'], 'page', $page);



        if(!$result){
            return response()->json([
                'status'=>true,
                'statusCode'=>400,
                'message'=>"No more data ",
                
            ]); 
        }
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
            'data'=>$result
        ]);


    }

    public function details($slug,Request $request){
        $categoryUrl=$request->category;
        $project = Projects::with(['category','location','typologie.TypologyOfGalleries.getTypologiesImages','subtypologie','developer','startingPrice'=>function($query){
            $query->min('price');
        }        
        ,'startingSize'=>function($query){
            $query->min('size');
        }
        ])
        ->whereHas('category', function ($query) use ($categoryUrl) {
            $query->where('slug', $categoryUrl);
        })
        
        ->where('slug',$slug)->first();
        if(!$project){
            return response()->json([
                'status'=>true,
                'statusCode'=>400,
                'message'=>"Not found ",
            ]);
        }
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
            'data'=>$project
        ]);
    }

    public function gallery($project_id,Request $request){
        $perPage = $request->input('per_page', 10); // Number of products per page
        $page = $request->input('page', 1); // Current page number
        $projectgallery=ProjectGallery::where('project_id',$project_id)->paginate($perPage, ['*'], 'page', $page);
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
            'data'=>$projectgallery
        ]);

    }

    public function banner($project_id,Request $request){
        $perPage = $request->input('per_page', 10); // Number of products per page
        $page = $request->input('page', 1); // Current page number
        $banners=ProjectBanner::where('project_id',$project_id)->paginate($perPage, ['*'], 'page', $page);
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
            'data'=>$banners
        ]);

    }



    public function keyhighlights($project_id,Request $request){
        $perPage = $request->input('per_page', 10); // Number of products per page
        $page = $request->input('page', 1); // Current page number
        $projectgallery=ProjectHighlight::where('project_id',$project_id)->where('key_highlight',1)->paginate($perPage, ['*'], 'page', $page);
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
            'data'=>$projectgallery
        ]);

    }

    public function highlights($project_id){
        $highlights = ProjectHighlight::where('project_id',$project_id)->get();
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
            'data'=>$highlights
        ]);

    }

    public function FloorPlan($project_id){
    
        $floorplans = ProjectFloorPlan::with('subTypology')->where('project_id',$project_id)->get()->groupBy('type');
        return response()->json([
            'status' => true,
            'statusCode' => 200,
            'message' => "Success",
            'data' => $floorplans
        ]);

    }
    public function Price($project_id){
    
        $floorplans=ProjectPrice::with('subTypology')->where('project_id',$project_id)->get();
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
            'data'=>$floorplans
        ]);

    }

    // public function Amenities($project_id){
    
    //     $floorplans = ProjectAmenities::with('Amenities')->where('project_id',$project_id)->get();
    //     return response()->json([
    //         'status'=>true,
    //         'statusCode'=>200,
    //         'message'=>"Success ",
    //         'data'=>$floorplans
    //     ]);

    // }

    // public function AmenitiesGalleries($project_id){
    
    //     $floorplans=ProjectAmenitiesGallery::where('project_id',$project_id)->get();
    //     return response()->json([
    //         'status'=>true,
    //         'statusCode'=>200,
    //         'message'=>"Success ",
    //         'data'=>$floorplans
    //     ]);

    // }

    public function Amenities($project_id) {
        $amenities = ProjectAmenities::with('Amenities')->where('project_id', $project_id)->get();
        $amenitiesGalleries = ProjectAmenitiesGallery::where('project_id', $project_id)->get();
    
        return response()->json([
            'status' => true,
            'statusCode' => 200,
            'message' => "Success",
            'data' => [
                'amenities_icons' => $amenities,
                'amenities_galleries' => $amenitiesGalleries
            ]
        ]);
    }
    

    public function getFaq($project_id){
    
        $floorplans=ProjectFaq::where('project_id',$project_id)->get();
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
            'data'=>$floorplans
        ]);

    }


    public function LocationAdvantage($project_id){
    
        $floorplans = ProjectLocationAdvantage::where('project_id', $project_id)->get()->groupBy('type');

        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
            'data'=>$floorplans
        ]);

    }
    
    

    public function projectSections($project_id){
        
        $projectSection = ProjectSection::where('project_id',$project_id)->orderBy('seq','ASC')->get();
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success ",
            'data'=>$projectSection
        ]);

    }

    public function projectSectionsData($section){
        $sectiondata=ProjectSection::find($section);
        if($sectiondata){
            return response()->json([
                'status'=>true,
                'statusCode'=>200,
                'message'=>"Success ",
                'data'=>$sectiondata
            ]);
        }else{
            return response()->json([
                'status'=>true,
                'statusCode'=>400,
                'message'=>"Success ",
            ]);
        }
    }


    public function Specifications ($project_id){

        $specifications = ProjectSpecification::with('ProjectSpecificationList')
        ->whereHas('ProjectSpecificationList', function ($query) use ($project_id) {
            $query->where('project_id', $project_id);
        })
        ->get();
    
        if($specifications){
            return response()->json([
                'status'=>true,
                'statusCode'=>200,
                'message'=>"Success ",
                'data'=>$specifications
            ]);
        }else{
            return response()->json([
                'status'=>true,
                'statusCode'=>400,
                'message'=>"Success ",
            ]);
        }
    }


    public function ProjectImages(Request $request) {
        
        $perPage = $request->input('per_page', 10);
        $page = $request->input('page', 1);

        try {

            $projectgallery=ProjectGallery::paginate($perPage, ['*'], 'page', $page);
            return response()->json([
                'status'=>true,
                'statusCode'=>200,
                'message'=>"Success ",
                'data'=>$projectgallery
            ]);

        } catch (\Throwable $th) {

            return response()->json([
                'status' => true,
                'statusCode' => 200,
                'message' => 'Something went wrong!',
                'errors' => $th->getMessage(),
            ]);
            
        }
    }


    public function getCommercialPlatter ($request) {
        $records = "";

        $getAllTypologies = \App\Models\Website\Categories::with('getTypologies')
        ->whereHas('getTypologies')
        ->get();
        dd($getAllTypologies);

        if(!$records){
            return response()->json([
                'status'=>true,
                'statusCode'=>400,
                'message'=>"Not found ",
            ]);
        }
        return response()->json([
            'status'=>true,
            'statusCode'=>200,
            'message'=>"Success",
            'data'=>$records
        ]);

    }

}
