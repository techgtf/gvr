<?php

namespace App\Models\Website\Project;

use App\Models\Website\Amenities;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProjectAmenitiesGallery extends Model
{
    use HasFactory;

    protected $hidden=['project_id','status'];


}
