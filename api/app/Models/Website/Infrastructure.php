<?php

namespace App\Models\Website;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\File;

class Infrastructure extends Model
{
    use HasFactory;
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

    public static function search($query)
    {
        return empty($query) ? static::query()
            : static::where('title', 'like', '%'.$query.'%');
    }
}
