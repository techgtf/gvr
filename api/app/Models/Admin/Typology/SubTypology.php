<?php

namespace App\Models\Admin\Typology;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\SoftDeletes;

class SubTypology extends Model
{
    use HasFactory,SoftDeletes;
    

    protected $fillable = ['slug', 'typology'];

    private function generateSlug($name)
    {
    

        if (SubTypology::whereSlug($slug = Str::slug($name))->exists()) {
            $max = SubTypology::where('typology',$name)->latest('id')->skip(1)->value('slug');        
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
        SubTypology::created(function ($category) {
            $category->slug = $category->generateSlug($category->typology);
            $category->save();
        });
    }





    public static function search($query)
    {
        return empty($query) ? static::query()
            : static::where('typology', 'like', '%'.$query.'%');
    }

    public function subTypologyOfTypology()
    {
        return $this->hasMany(TypologySubTypology::class,'sub_typologies_id');
    }


    
}
