<?php

namespace App\Models\Website;

use File;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkGallery extends Model
{
    use HasFactory;

    protected $table = 'work_galleries';

    protected $hidden = ['updated_at', 'created_at'];


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
