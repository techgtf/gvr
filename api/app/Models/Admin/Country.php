<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Country extends Model
{
    use HasFactory;

    protected $fillable = ['slug', 'country', 'country_code'];


    private function generateSlug($name)
    {
        if (Country::whereSlug($slug = Str::slug($name))->exists()) {
            $max = Country::where('country',$name)->latest('id')->skip(1)->value('slug');  
            
            if (isset($max[-1]) && is_numeric($max[-1])) {
                return preg_replace_callback('/(\d+)$/', function($mathces) {
                    return $mathces[1] + 1;
                }, $max);
            }
            return "{$slug}-2";
        }        
        return $slug;
    }   


    public static function boot()
    {
   
        parent::boot();
        Country::created(function ($post) {
            $post->slug = $post->generateSlug($post->country);
            $post->save();
        });

        self::updating(function ($model) {
       
                return  $model->slug = $model->generateSlug($model->country);
      
        });

    }


    public static function search($query)
    {
        return empty($query) ? static::query()
            : static::where('country', 'like', '%'.$query.'%');
    }

}
