<?php

namespace App\Models\Website;

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
        return $this->belongsTo(SubTypology::class,'cities');
    }




}
