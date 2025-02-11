<?php

namespace App\Models\Admin\Project;

use App\Models\Admin\Typology\SubTypology;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProjectPrice extends Model
{
    use HasFactory,SoftDeletes;
    protected $fillable = ['project_id', 'size','size_type','price','sub_typology'];

    public function subTypology(){
        return $this->belongsTo(SubTypology::class,'sub_typology','id');
    }

    public function getStartingPriceAttribute()
    {
        return $this->floorPlans->min('price');
    }

    public function getsizeAttribute()
    {
                if(!empty($this->attributes['size'])){
             return  measurmentConvert($this->attributes['size'],2,$this->attributes['size_type']).' '.sizeType($this->attributes['size_type']);

                
        }
        // Perform your conversion operation here
    }

    public function getpriceAttribute()
    {
   
        if(!empty($this->attributes['price'])){
            return no_to_words($this->attributes['price']);
        }
    }

}
