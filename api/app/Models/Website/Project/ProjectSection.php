<?php

namespace App\Models\Website\Project;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;

class ProjectSection extends Model
{
    use HasFactory;

   
    public static function search()
    {
        return empty($query) ? static::query()
        : static::where('section_type', 'like', '%'.$query.'%');
    }

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
