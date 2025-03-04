<?php

namespace App\Models\Website;

use File;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\SoftDeletes;

class Categories extends Model
{
    use HasFactory, SoftDeletes;
    
    public function getThumbnailAttribute()
    {
        if(!empty($this->attributes['thumbnail'])){
            if(File::exists(public_path('storage/'.$this->attributes['thumbnail']))){
                return asset('storage/'.$this->attributes['thumbnail']);
            }else{
                return  asset('images/default_icon.png');
            }
        }
        return  asset('images/default_icon.png');
    }

    public function typologies()
    {
        return $this->belongsToMany(Typology::class, 'category_typologies', 'categories_id', 'typologies_id');
    }


}
