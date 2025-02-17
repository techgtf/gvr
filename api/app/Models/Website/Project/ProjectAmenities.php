<?php

namespace App\Models\Website\Project;

use App\Models\Website\Amenities;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProjectAmenities extends Model
{
    use HasFactory;
    protected $hidden=['project_id','amenities_id','status'];
    public function Amenities(){
        return $this->hasOne(Amenities::class,'id','amenities_id');
    }
}
