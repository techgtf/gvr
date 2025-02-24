<?php

namespace App\Models\Admin\Project;

use App\Models\Admin\Typology\SubTypology;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProjectFloorPlan extends Model
{
    use HasFactory,SoftDeletes;
    protected $fillable = ['project_id','type','image','sub_typology','protected','price','size','carpet_area','balcony_area','super_area','sizes_type'];



    public function getPriceAttribute($value)
    {
        return '₹ ' . no_to_words($value);
    }

    public function subTypology(){
        return $this->belongsTo(SubTypology::class,'sub_typology','id');
    }

}
