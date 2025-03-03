<?php

namespace App\Models\Website;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TypologyTypoGallery extends Model
{
    use HasFactory,SoftDeletes;
    
    protected $hidden = ['typologies_id', 'created_at', 'updated_at', 'deleted_at'];

    protected $table = "typology_typo_galleries";
 

    public function getTypologiesImages() {
        return $this->belongsTo(TypologiesGallery::class,'galleries_id');
    }

}
