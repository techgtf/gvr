<?php

namespace App\Models\Website;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\File;

class Amenities extends Model
{
    use HasFactory;


    public function getIcons($raw = false)
    {
        if ($raw) {
            return $this->image_path;
        } else {
            return $this->image_url; // This will invoke the accessor getIconsAttribute()
        }
    }

   


    public function getIconsAttribute()
    {
        if(!empty($this->attributes['icons'])){
            if(File::exists(public_path('storage/'.$this->attributes['icons']))){
                return asset('storage/'.$this->attributes['icons']);
            }else{
                return  asset('default/default_project.jpg');
            }
        }
        return  asset('default/default_project.jpg');
    }




}
