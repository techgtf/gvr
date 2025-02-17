<?php

namespace App\Models\Admin\Platter;

use App\Models\Admin\City;
use App\Models\Admin\Developer;
use App\Models\Admin\ProjectCategory;
use App\Models\Admin\Typology\SubTypology;
use App\Models\Website\Typology;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class Platter extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable = [
        'category',
        'developer',
        'typology',
        'sub_typology',
        'cities',
        'type',
        'name',
        'slug',
        'meta_title',
        'meta_keyword',
        'meta_description',
    ];


    static public  function generateSlug($name)
    {
        if (Platter::whereSlug($slug = Str::slug($name))->exists()) {
            $max = Platter::where('name',$name)->latest('id')->skip(1)->value('slug');        
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
        Platter::created(function ($project) {

            $project->slug = $project->generateSlug($project->name);
            $project->save();
        });
       
        static::updating(function ($project) {
            $project->slug = $project->generateSlug($project->name);
        });

    }
    public static function search($query)
    {
        return empty($query) ? static::query()
            : static::where('name', 'like', '%'.$query.'%');
    }



    public function developer(){
        return $this->belongsTo(Developer::class,'developer');
    }
    public function category(){
        return $this->belongsTo(ProjectCategory::class,'category');
    }
    public function typology(){
        return $this->belongsTo(Typology::class,'typology');
    }
    public function sub_typology(){
        return $this->belongsTo(SubTypology::class,'sub_typology');
    }
    public function cities(){
        return $this->belongsTo(City::class,'cities');
    }




}
