<?php

namespace App\Models\Website\Project;

use App\Models\Admin\Typology\SubTypology;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProjectLocationAdvantage extends Model
{
    use HasFactory;


    public function getTypeAttribute()
    {
  
    
        return locationType($this->attributes['type']);

    }

   
}
