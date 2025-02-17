<?php

namespace App\Models\Admin;

use App\Models\Admin\Project\ProjectLocation;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class City extends Model
{
    use HasFactory;

    protected $fillable = ['state_id', 'slug', 'city'];

    
    private function generateSlug($name)
    {
        if (City::whereSlug($slug = Str::slug($name))->exists()) {
            $max = City::where('city',$name)->latest('id')->skip(1)->value('slug');  
          
            
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
        City::created(function ($post) {
            $post->slug = $post->generateSlug($post->city);
            $post->save();
        });

        self::updating(function ($model) {
       
                return  $model->slug = $model->generateSlug($model->city);
      
        });

    }



    public function state(): BelongsTo
    {
        return $this->belongsTo(State::class);
    }


    public function propertiesLocation() 
    {
        return $this->hasMany(ProjectLocation::class,'city');
    }


    public static function search($query)
    {
        return empty($query) ? static::query()
            : static::where('city', 'like', '%'.$query.'%');
    }

}
