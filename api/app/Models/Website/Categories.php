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
    
    public function getImageAttribute()
    {
        if(!empty($this->attributes['image'])){
            if(File::exists(public_path('storage/'.$this->attributes['image']))){
                return asset('storage/'.$this->attributes['image']);
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
