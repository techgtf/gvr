<?php

namespace App\Models\Website\Project;

use App\Models\Admin\Typology\SubTypology;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\File;

class ProjectFloorPlan extends Model
{
    use HasFactory,SoftDeletes;
   
    protected $hidden=['sub_typology','project_id','created_at','updated_at','deleted_at','status','size_type'];
    public function subTypology(){
        return $this->belongsTo(SubTypology::class,'sub_typology','id');
    }

   

    
    public function getsizeAttribute()
    {
   
                if(!empty($this->attributes['size'])){

             return  round(measurmentConvert($this->attributes['size'],2,$this->attributes['size_type'])).' '.sizeType($this->attributes['size_type']);

        }
        // Perform your conversion operation here
    }

    public function getpriceAttribute()
    {
   
        if(!empty($this->attributes['price'])){
            // return no_to_words($this->attributes['price']);
            return $this->attributes['price'];

        }
    }

    public function getImageAttribute()
    {
        if(!empty($this->attributes['image'])){
            if(File::exists(public_path('storage/'.$this->attributes['image']))){
                return asset('storage/'.$this->attributes['image']);
            }else{
                return  asset('default/default_project.jpg');
            }
        }
        return  asset('default/default_project.jpg');
    }

}
