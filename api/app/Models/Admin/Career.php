<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Career extends Model
{
    use HasFactory;

    protected $fillable = ['slug','experience_id', 'destination', 'job_timing', 'short_description', 'description', 'address'];


    protected $dates = ['deleted_at'];


    
    private function generateSlug($name)
    {
        if (Career::whereSlug($slug = Str::slug($name))->exists()) {
            $max = Career::where('destination',$name)->latest('id')->skip(1)->value('slug');  
          
            
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
        Career::created(function ($post) {
            $post->slug = $post->generateSlug($post->destination);
            $post->save();
        });

        self::updating(function ($model) {
       
                return  $model->slug = $model->generateSlug($model->destination);
      
        });

    }



    
    public static function search ($search)
    {
        return empty($search) ? static::query()
            : static::where('destination', 'like', '%'.$search.'%');
    }

}
