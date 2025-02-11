<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Locality extends Model
{
    use HasFactory;

    protected $fillable = ['city_id', 'slug', 'locality'];

    private function generateSlug($name)
    {
        if (Locality::whereSlug($slug = Str::slug($name))->exists()) {
            $max = Locality::where('locality',$name)->latest('id')->skip(1)->value('slug');  
            
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
        Locality::created(function ($post) {
            $post->slug = $post->generateSlug($post->locality);
            $post->save();
        });

        self::updating(function ($model) {
       
                return  $model->slug = $model->generateSlug($model->locality);
      
        });

    }




    public static function search($query)
    {
        return empty($query) ? static::query()
            : static::where('locality', 'like', '%'.$query.'%');
    }

}
