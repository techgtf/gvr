<?php

namespace App\Models\Website;

use File;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class TypologiesGallery extends Model
{
    use HasFactory,SoftDeletes;

    protected $hidden = ['created_at', 'updated_at', 'deleted_at'];

    protected $table = "typologies_galleries";

    public function getFileAttribute()
    {
        if(!empty($this->attributes['file'])){
            if(File::exists(public_path('storage/'.$this->attributes['file']))){
                return asset('storage/'.$this->attributes['file']);
            }else{
                return  asset('default/default_project.jpg');
            }
        }
        return  asset('default/default_project.jpg');
    }


}
