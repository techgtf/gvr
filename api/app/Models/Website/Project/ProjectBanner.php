<?php

namespace App\Models\Website\Project;

use App\Models\Admin\Typology\SubTypology;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\File;

class ProjectBanner extends Model
{
    use HasFactory,SoftDeletes;


    public function getDesktopImageAttribute()
    {
        if(!empty($this->attributes['desktop_image'])){
            if(File::exists(public_path('storage/'.$this->attributes['desktop_image']))){
                return asset('storage/'.$this->attributes['desktop_image']);
            }else{
                return  asset('default/default_project.jpg');
            }
        }
        return  asset('default/default_project.jpg');
    }

    public function getMobileImageAttribute()
    {
        if(!empty($this->attributes['mobile_image'])){
            if(File::exists(public_path('storage/'.$this->attributes['mobile_image']))){
                return asset('storage/'.$this->attributes['mobile_image']);
            }else{
                return  asset('default/default_project.jpg');
            }
        }
        return  asset('default/default_project.jpg');
    }


}
