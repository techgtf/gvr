<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\SoftDeletes;

class Blog extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['heading', 'blog_categories_id', 'slug', 'image', 'short_description', 'description', 'status'];
    protected $dates = ['deleted_at'];

    

    private function generateSlug($name)
    {
    
        if (Blog::whereSlug($slug = Str::slug($name))->exists()) {
            $max = Blog::where('heading',$name)->latest('id')->skip(1)->value('slug');        
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
        Blog::created(function ($category) {
            $category->slug = $category->generateSlug($category->heading);
            $category->save();
        });

        static::updating(function ($category) {
            $category->slug = $category->generateSlug($category->heading);
        });

    }



    public function blogDetails(){
        return $this->hasMany(BlogsDetails::class, 'blog_id');
    }


    public static function search($query)
    {
        return empty($query) ? static::query()
            : static::where('heading', 'like', '%'.$query.'%');
    }
}
