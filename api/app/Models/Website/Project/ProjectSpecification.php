<?php

namespace App\Models\Website\Project;

use App\Models\Admin\Typology\SubTypology;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\File;

class ProjectSpecification extends Model
{
    use HasFactory,SoftDeletes;
    protected $table="project_specifications";
    
    protected $hidden = ['created_at', 'updated_at', 'deleted_at'];
   
    public function ProjectSpecificationList()
    {
        return $this->hasMany(ProjectSpecificationList::class,  'spec_id', 'id');
    }
    
}
