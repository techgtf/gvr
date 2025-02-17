<?php

namespace App\Models\Website;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\File;

class Education extends Model
{
    use HasFactory;

    // protected $table = 'csr_communities';

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

    public static function search($query)
    {
        return empty($query) ? static::query()
            : static::where('title', 'like', '%'.$query.'%');
    }
}
