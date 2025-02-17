<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin\Country;
use App\Models\Admin\State;
use App\Models\Admin\City;
use App\Models\Admin\Locality;
use Illuminate\Support\Facades\Http;

class LocationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $country = $request->country;
        $countryCode = $request->country_code;
        $city = $request->city;
        $state = $request->state;
        $locality = $request->locality;

        if(!empty($country)){
            $location = array();
            $countrylist = array();
            $statelist = array();
            $citylist = array();
            $cityid = 0;
            $localityid = 0;


            $locatlitylist=array();


            $checkcounty = Country::where('country', 'like', '%' .$country. '%')->first();

                if(!empty($checkcounty->id)){
                
                    $countrylist['id'] = $checkcounty->id;
                    $countrylist['slug'] = $checkcounty->country;
                    $countrylist['country'] = $checkcounty->country;
                
                }else{
                
                    $checkcounty = Country::create(['country' => $country,'slug' => $country, 'country_code' => $countryCode]);
                    $countrylist['id'] = $checkcounty->id;
                    $countrylist['slug'] = $checkcounty->slug;
                    $countrylist['country'] = $checkcounty->country;
                
                }

                if(!empty($countrylist['id']) && !empty($state)){
                
                    $statecheck = State::where('state', 'like', '%' .$state. '%')->where('country_id',$countrylist['id'])->first();
                    
                    if(!empty($statecheck->id)){
                        $statelist['id'] = $statecheck->id;
                        $statelist['country_id'] = $statecheck->country_id;
                        $statelist['slug'] = $statecheck->slug;
                        $statelist['state'] = $statecheck->state;

                    }else{
                    
                        $checkcounty = State::create(['state' => $state,'country_id'=>$countrylist['id'],'slug'=>$state]);
                     
                        $statelist['id'] = $checkcounty->id;
                        $statelist['slug'] = $checkcounty->slug;
                        $statelist['state'] = $checkcounty->state;

                    }
            

                    if(!empty($statelist['id']) && !empty($city)){
                        $citycheck = City::where('city', 'like', '%' .$city. '%')->where('state_id',$statelist['id'])->first();
                        if(!empty($citycheck->id)){

                            $cityid=$citycheck->id;

                        }else{

                            $citycheck = City::create(array('city' => $city,'slug'=>$city,'state_id'=>$statelist['id']));
                            $cityid=$citycheck->id;

                        }


                        if(!empty($cityid) && !empty($locality)){
                            $checklocaliy = Locality::where('locality', 'like', '%' .$locality. '%')->where('city_id',$cityid)->first();
                            if(!empty($checklocaliy->id)){

                                $localityid=$checklocaliy->id;

                            }else{
                                $checklocaliy = Locality::create(['locality' => $locality,'city_id'=> $cityid, 'slug' => $locality]);
                                $localityid = $checklocaliy->id;
                            }

                            $locatlitylist = Locality::where('city_id',$cityid)->get();

                        }
                        $citylist = City::where('state_id',$statelist['id'])->get();
                    }
                    $location['country'] = $countrylist;
                    $location['state'] = $statelist;
                    $location['city'] = array('selected'=> $cityid,'list'=>$citylist);
                    $location['locatlity'] = array('selected'=> $localityid,'list'=>$locatlitylist);
                    $location['locations']= array('latitude'=>$request->latitude,'longtitude'=>$request->longtitude);
                    $location['address'] = $request->address;

                

                    return response()->json([
                        'status'=>true,
                        'statusCode'=>200,
                        'data'=>$location
                    ]);


                }
            
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // 
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    private function calculateDistance($lat1, $lon1, $lat2, $lon2) {
        $earthRadius = 6371000; // meters
        $deltaLat = deg2rad($lat2 - $lat1);
        $deltaLon = deg2rad($lon2 - $lon1);
        $a = sin($deltaLat / 2) * sin($deltaLat / 2) +
             cos(deg2rad($lat1)) * cos(deg2rad($lat2)) *
             sin($deltaLon / 2) * sin($deltaLon / 2);
        $c = 2 * atan2(sqrt($a), sqrt(1 - $a));
        $distance = $earthRadius * $c;
        return $distance;
    }
    public function nearby(Request $request){

        $lat = $request->lat;
        $long = $request->long;

        $radius = $request->radius*1000;
        $key =env('GOOGLE_API');

        $ch = curl_init();
        $params="";
        
        if(!empty($request->type)){
            $params="&name=".$request->type;

        }
        if(!empty($request->search)){
            $params="&name=".$request->search;

        }
       

        if(!empty($request->nextPageToken)){
            $params.="&nextPageToken=".$request->nextPageToken;
        }

       
      

    $curlConfig = array(
                CURLOPT_URL=> "https://maps.googleapis.com/maps/api/place/nearbysearch/json?singleEvents=true&location=".$lat.",".$long."&radius=".$radius."&key=".$key.$params,
                CURLOPT_POST => true,
                CURLOPT_RETURNTRANSFER=> true,
                CURLOPT_POSTFIELDS=> array(
                    'field1' => 'some date',
                    'field2' => 'some other data',
                )
            );
        curl_setopt_array($ch, $curlConfig);
        $result = curl_exec($ch);

        $response = json_decode($result, true);


            if(!empty($response['results'])){
                foreach ($response['results'] as &$place) {
                    $placeLat = $place['geometry']['location']['lat'];
                    $placeLong = $place['geometry']['location']['lng'];
                    $distance = $this->calculateDistance($lat, $long, $placeLat, $placeLong);
                    $place['distance'] = round($distance/1000,2);
                }
            
            }
      

    
        return $response;


    }
}
