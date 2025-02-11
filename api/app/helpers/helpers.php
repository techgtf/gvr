<?php 
use GuzzleHttp\Psr7\Message;    
use Illuminate\Support\Facades\Http;
use Illuminate\Support\HtmlString;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

function vite_assets(): HtmlString
{
    $devServerIsRunning = false;
    
    if (app()->environment('local')) {
        try {
            Http::get("http://localhost:3000");
            $devServerIsRunning = true;
        } catch (Exception) {
        }
    }
    
    if ($devServerIsRunning) {
        return new HtmlString(<<<HTML
            <script type="module" src="http://localhost:3000/@vite/client"></script>
            <script type="module" src="http://localhost:3000/resources/js/app.js"></script>
        HTML);
    }
    
    $manifest = json_decode(file_get_contents(
        public_path('build/manifest.json')
    ), true);
    
    return new HtmlString(<<<HTML
        <script type="module" src="/build/{$manifest['resources/js/app.js']['file']}"></script>
        <link rel="stylesheet" href="/build/{$manifest['resources/js/app.js']['css'][0]}">
    HTML);
}




function dltSingleImgFile($filename)
{
    if(File::exists(public_path('storage/'.$filename))) {
        File::delete(public_path('storage/'.$filename));
        
    }
}

function getprojectStatus($type=""){
    $array=array(
        1 => array('title'=>'New Launch','slug'=>'new-launch','icons'=>asset('frontend/images/property_types/prelaunch.svg'),'id'=>1),
        2 => array('title'=>'Under Constructions','slug'=>'under-constructions','icons'=>asset('frontend/images/property_types/ongoing.svg'),'id'=>2),
        3 => array('title'=>'Ready to Move','slug'=>'ready-to-move','icons'=>asset('frontend/images/property_types/ready_to_move.svg'),'id'=>3),
        // 4 => array('title'=>'Nearing Possesion','icons'=>"")

    );
    
    if(!empty($type)){
        return $array[$type];
    }else{
        return $array;
    }
}

function getProjectCategory($type="")
{
    $array = array(
        '1' => 'Residential',
        '2' => 'Commercial'
    );

    if(!empty($type)){
        return $array[$type];
    }else{
        return $array;
    }

}


function sizeType($value = '')
    {   
        $sqFt = array();
        $sqFt = [
            '1' => 'Sq. Ft.',
            '2' => 'Sq. Mt.',
            '3'=> 'Sq. Yd.'
        ];
       
        if(!empty($value) || $value==0){
            return $sqFt[$value];
        }else{
        return $sqFt;

        }
    }


    function pricetype($value = '')
    {   
        $sqFt = array();
        $sqFt = [
            '1' => 'Thousand',
            '2' => 'Lacs',
            '3'=> 'Cr*'
        ];
       
        if(!empty($value) || $value==0){
            return $sqFt[$value];
        }else{
        return $sqFt;

        }
    }
    

    function measurmentConvert($number,$from,$to){
        

        $result=$number;
        if($from==1 && $to==2){
            $result=($number*0.092903); // conversion square feet to square meter
        }elseif($from==2 && $to==1){
            $result=($number/0.092903); // conversion square meter  to square feet
        }elseif($from==3 && $to==2){
            $result=($number*0.83612); // conversion square yard to square meter
        }elseif($from==2 && $to==3){
            $result=($number/0.83612); // conversion square meter to square yard
        }elseif($from==3 && $to==1){
            $result=($number*9); // square yard to square feet
        }elseif($from==1 && $to==3){
            $result=($number/9); // square feet to  square yard 
        }
        return $result;
        
    }

 
    
    function no_to_words($no)
{
   

    if($no == 0) {
        return ' ';

    }else {
        $n =  strlen($no); // 7
    
        switch ($n) {
            
            case 3:
                $val = $no/100;
                $val = round($val, 2);
                $finalval =  $val ." hundred";
                break;
                
            case 4:
                $val = $no/1000;
                $val = round($val, 2);
                $finalval =  $val ." k";
                break;
            case 5:
                $val = $no/1000;
                $val = round($val, 2);
                $finalval =  $val ." k";
                break;
            case 6:
                $val = $no/100000;
                $val = round($val, 2);
                $finalval =  $val ." Lakh*";
                break;
            case 7:
                $val = $no/100000;
                $val = round($val, 2);
                $finalval =  $val ." Lakh*";
                break;
            case 8:
                $val = $no/10000000;
                $val = round($val, 2);
                $finalval =  $val ." Cr*";
                break;
            case 9:
                $val = $no/10000000;
                $val = round($val, 2);
                $finalval =  $val ." Cr*";
                break;

			case 10:
				$val = $no/10000000;
				$val = round($val, 2);
				$finalval =  $val ." crore";
				break;

            default:
            $finalval =  $no;
        }
   
        return $finalval;

    }
   

} 
function totapges(){
    $data=[
        1=>'home',
        2=>'about',
        3=>'verticles',
        4=>'blogs',
        5=>'contact-us',
        6=>'career',
        7=>'csr',
        8=>'home-loan',
        9=>'tax-benefits',
        10=>'area-conveter',
        11=>'property-investments',
        12=>'nri-corner',
        13=>'nri-investor',
        14=>'emi-calculator',
        15=>'faq',

    ];
}
function updateSingleRecord ($request)
{

    try {
        $validator = Validator::make($request,[
            'tableName'=>'required',
            'keyColumnName'=>'required',
            'keyColumnId'=>'required',
            'updateColumnName'=>'required',

        ],[
            'tableName.required'=>'City Name is Required',
            'keyColumnName.required'=>'City Name is Required',
            'keyColumnId.required'=>'City Name is Required',
            'updateColumnName.required'=>'City Name is Required',   
        ]);

        if($validator->fails()){
            
            return response()->json([
                'status'=>3,
                'statusCode'=>400,
                'message'=>$validator->errors()
            ]);

        } else {
            $query = DB::table($request['tableName'])->where($request['keyColumnName'], $request['keyColumnId'])->update([$request['updateColumnName'] => $request['updatecolumnVal']]);

            if($query == 1){
                return response()->json([
                    'status' => true,
                    'statusCode' => 200,
                    'message' => "Update Successfully",
                ]);
                
            } else {
                return response()->json([
                    'status' => true,
                    'statusCode' =>  404,
                    'message' => "Something went wrong!"
                ]);
            }
        }

        


    } catch (\Throwable $th) {
        return response()->json([
            'status' => false,
            'statusCode' => 500,
            'message' => $th->getMessage(),
        ]);
    }
}




function getJobType($index='')
{
    $arr = array(
        '1' => 'Full Time',
        '2' => 'Part Time',
        '3' => 'Hybrid'
    );

    if(!empty($index)){
        return $arr[$index];
    }

    return $arr;

}


function getJobYear ($index='')
{
    $arr = array(
        "1" => "0 - 2 Years",
        "2" => "3 - 5 Years",
        "3" => "6 - 10 Years",
        "4" => "12+ Years"
    );
    if(!empty($index)){
        return $arr[$index];
    }
    return $arr;
}


function locationType ($id='')
{

    $arr = array(
        ['value'=>"shopping_mall", 'name'=>"Shopping Mall", 'icons'=>asset('frontend/images/icons/mall.svg'),"id"=>1],
        ['value'=>"school", 'name'=>"School", 'icons'=>asset('frontend/images/icons/school.svg'),"id"=>2],
        ['value'=>"hospital", 'name'=>"Hospital", 'icons'=>asset('frontend/images/icons/hospital.svg'),"id"=>3],
        ['value'=>"rail", 'name'=>"Railway", 'icons'=>asset('frontend/images/icons/rail.svg'),"id"=>4],
        ['value'=>"highway", 'name'=>"Highway", 'icons'=>asset('frontend/images/icons/highway.svg'),"id"=>5],
        ['value'=>"metro", 'name'=>"Metro", 'icons'=>asset('frontend/images/icons/metro.svg'),"id"=>6],
        // ['value'=>"college", 'name'=>"College", 'icons'=>asset('frontend/images/icons/school.svg'),"id"=>7],
        ['value'=>"airport", 'name'=>"Airport", 'icons'=>asset('frontend/images/icons/airport.svg'),"id"=>8],
        ['value'=>"resturant", 'name'=>"Restaurant", 'icons'=>asset('frontend/images/icons/restaurant.svg'),"id"=>9],
        ['value'=>"park", 'name'=>"Park", 'icons'=>asset('frontend/images/icons/park.svg'),"id"=>10],
        ['value'=>"bank", 'name'=>"Bank", 'icons'=>asset('frontend/images/icons/bank.svg'),"id"=>11],
        ['value'=>"university", 'name'=>"University", 'icons'=>asset('frontend/images/icons/university.svg'),"id"=>12],
        ['value'=>"atm", 'name'=>"ATM", 'icons'=>asset('frontend/images/icons/atm.svg'),"id"=>13],
        ['value'=>"bus_station", 'name'=>"Bus Station", 'icons'=>asset('frontend/images/icons/bus-station.svg'),"id"=>14],
        // ['value'=>"train_station", 'name'=>"Train Station", 'icons'=>asset('frontend/images/icons/school.svg'),"id"=>15],
        ['value'=>"temple", 'name'=>"Temple", 'icons'=>asset('frontend/images/icons/temple.svg'),"id"=>15],
        ['value'=>"office", 'name'=>"Office", 'icons'=>asset('frontend/images/icons/office.svg'),"id"=>16],
        ['value'=>"club", 'name'=>"Club", 'icons'=>asset('frontend/images/icons/club.svg'),"id"=>17],
    );
    
    if (!empty($id)) {
        $filteredArr = array_values(array_filter($arr, function ($item) use ($id) {
            return $item['id'] == $id;
        }));
        return $filteredArr;
    }
  
    return $arr;
}


function footerPlatter ()
{   
    $arr = array(
        1 => 'Popular Builder',
        2 => 'Popular  Properties',
        3 => 'Popular  Cities',
        4 => 'Property Type',
        5 => 'Recommended  Properties'
    );

    return $arr;

}

 