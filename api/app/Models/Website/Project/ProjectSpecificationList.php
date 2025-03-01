<?php

namespace App\Models\Website\Project;

use App\Models\Admin\Typology\SubTypology;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\File;

class ProjectSpecificationList extends Model
{
    use HasFactory,SoftDeletes;
    protected $table="project_specification_lists";
   
    protected $hidden = ['created_at', 'updated_at', 'deleted_at'];


    public function getIconsAttribute()
    {
        if(!empty($this->attributes['icons'])){
            if(File::exists(public_path('storage/'.$this->attributes['icons']))){
                return asset('storage/'.$this->attributes['icons']);
            }else{
                return  asset('default/default_project.jpg');
            }
        }
        return  asset('default/default_project.jpg');
    }

}
