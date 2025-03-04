<?php

namespace App\Models\Website;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\File;
use Illuminate\Database\Eloquent\SoftDeletes;

class Blog extends Model
{
    use HasFactory, SoftDeletes;
 
   
    
    public function blogDetails(){
        return $this->hasMany(BlogsDetails::class, 'blog_id');
    }

    public static function search($query)
    {
        return empty($query) ? static::query()
            : static::where('heading', 'like', '%'.$query.'%');
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

    public function getThumbnailAttribute()
    {
        if(!empty($this->attributes['thumbnail'])){
            if(File::exists(public_path('storage/'.$this->attributes['thumbnail']))){
                return asset('storage/'.$this->attributes['thumbnail']);
            }else{
                return  asset('default/default_project.jpg');
            }
        }
        return  asset('default/default_project.jpg');
    }

}
