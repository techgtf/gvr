<?php

namespace App\Models\Website;

use App\Models\Admin\CategoryTypology;
use App\Models\Website\TypologyTypoGallery;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\File;

class Typology extends Model
{
    use HasFactory,SoftDeletes;
    

    protected $fillable = ['slug', 'typology'];

    private function generateSlug($name)
    {
    

        if (Typology::whereSlug($slug = Str::slug($name))->exists()) {
            $max = Typology::where('typology',$name)->latest('id')->skip(1)->value('slug');        
            if (isset($max[-1]) && is_numeric($max[-1])) {
                return preg_replace_callback('/(\d+)$/', function($mathces) {
                    return $mathces[1] + 1;
                }, $max);
            }
            return "{$slug}";
        }        
        return $slug;
    }

    public static function boot()
    {
        parent::boot();
        Typology::created(function ($category) {
            $category->slug = $category->generateSlug($category->typology);
            $category->save();
        });
    }





    public static function search($query)
    {
        return empty($query) ? static::query()
            : static::where('typology', 'like', '%'.$query.'%');
    }

    public function TypologyOfCategory()
    {
        return $this->hasMany(CategoryTypology::class,'typologies_id');
    }

    

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

    

    public function categories()
    {
        return $this->belongsToMany(Categories::class, 'category_typologies', 'typologies_id', 'categories_id');
    }

    public function galleries () 
    {
        return $this->belongsToMany(TypologiesGallery::class, 'typology_typo_galleries', 'typologies_id', 'galleries_id');
    }

}
