<?php

namespace App\Models\Admin;

use App\Models\Admin\Enquiry\ProjectEnquiry;
use App\Models\Admin\Typology\Typology;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class Projects extends Model
{
    use HasFactory,SoftDeletes;

    static public  function generateSlug($name)
    {
    

        if (Projects::whereSlug($slug = Str::slug($name))->exists()) {
            $max = Projects::where('name',$name)->latest('id')->skip(1)->value('slug');        
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
        Projects::created(function ($project) {

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
        return $this->belongsTo(Developer::class,'developer_id');
    }
    public function category(){
        return $this->belongsTo(ProjectCategory::class,'categorie_id');
    }
    public function typologie(){
        return $this->belongsTo(Typology::class,'typologie_id');
    }

    public function enquiries()
    {
        return $this->belongsTo(ProjectEnquiry::class);
    }
   




    protected $fillable = [
        'categorie_id',
        'typologie_id',
        'sub_typologie_id',
        'developer_id',
        'project_status',
        'name','ivr_no',
        'whatsapp_no',
        'payment_plan',
        'slug',
        'rera_no',
        'logo',
        'feature_image',
        'thumbnail',
        'short_description',
        'brochure',
        'meta_title',
        'meta_keyword',
        'meta_description',
        'head_data',
        'footer_data',
        'cdn'
    ];


    
}
