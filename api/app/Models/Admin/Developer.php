<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Developer extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['slug', 'developer', 'logo', 'mobile', 'address', 'rera', 'description', 'status'];
    
    protected $dates = ['deleted_at'];
    protected $hidden=['created_at','updated_at','deleted_at'];

    private function generateSlug($name)
    {
    
        if (Developer::whereSlug($slug = Str::slug($name))->exists()) {
            $max = Developer::where('developer',$name)->latest('id')->skip(1)->value('slug');        
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
        Developer::created(function ($category) {
            $category->slug = $category->generateSlug($category->developer);
            $category->save();
        });
    }



    
    public static function search($query)
    {
        return empty($query) ? static::query()
            : static::where('developer', 'like', '%'.$query.'%');
    }

    public function setDeveloperAttribute($value)
    {
        // Set the 'username' attribute value to the value of 'name'
        $this->attributes['developer'] = $value;
    }



    public function projects(): HasMany
    {
        return $this->hasMany(Projects::class);
    }


}
