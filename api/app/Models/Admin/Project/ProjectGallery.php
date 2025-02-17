<?php

namespace App\Models\Admin\Project;

use App\Models\Admin\Typology\SubTypology;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProjectGallery extends Model
{
    use HasFactory;
    protected $table="project_gallery";
    protected $fillable = ['project_id', 'alt_text','image'];

}
