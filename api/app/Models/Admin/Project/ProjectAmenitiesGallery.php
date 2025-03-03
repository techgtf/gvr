<?php

namespace App\Models\Admin\Project;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProjectAmenitiesGallery extends Model
{
    use HasFactory,SoftDeletes;
    
    protected $table="project_amenities_galleries";

    protected $fillable = ['project_id', 'alt_text','image'];
    
}
