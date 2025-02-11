<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\SoftDeletes;

class BlogCategory extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['slug', 'name'];
    protected $dates = ['deleted_at'];
    protected $table = 'blog_categories';

    
    

    private function generateSlug($name)
    {
    
        if (BlogCategory::whereSlug($slug = Str::slug($name))->exists()) {
            $max = BlogCategory::where('name',$name)->latest('id')->skip(1)->value('slug');        
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
        BlogCategory::created(function ($category) {
            $category->slug = $category->generateSlug($category->name);
            $category->save();
        });

        

    }

 



    public static function search($query)
    {
        return empty($query) ? static::query()
            : static::where('name', 'like', '%'.$query.'%');
    }
}
