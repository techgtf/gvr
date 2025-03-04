<?php

namespace App\Models\Website;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\File;

class News extends Model
{
    use HasFactory,SoftDeletes;
    protected $table="news";
   
    protected $hidden = ['updated_at', 'deleted_at'];
 
    
    public function getFileAttribute()
    {
        if(!empty($this->attributes['file'])){
            if(File::exists(public_path('storage/'.$this->attributes['file']))){
                return asset('storage/'.$this->attributes['file']);
            }else{
                return  asset('default/default_project.jpg');
            }
        }
        return  asset('default/default_project.jpg');
    }

}
