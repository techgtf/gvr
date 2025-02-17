<?php

namespace App\Models\Website\Project;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
class ProjectLocation extends Model
{
    use HasFactory;
    
    public function getCityAttribute()
    {       
        if(!empty($this->attributes['city'])){
           $data= DB::table('cities')->select('city')->find($this->attributes['city']);
           if($data->city){
            return $data->city;
           }
          
        }
      
    }

}
