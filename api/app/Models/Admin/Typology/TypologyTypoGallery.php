<?php

namespace App\Models\Admin\Typology;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TypologyTypoGallery extends Model
{
    use HasFactory,SoftDeletes;
    
    protected $fillable = ['galleries_id', 'typologies_id'];

    protected $table = "typology_typo_galleries";

    public function typologies(){
        return $this->belongsTo(Typology::class,'typologies_id');
    }

    public function subtypology() {
        return $this->belongsTo(TypologiesGallery::class,'sub_typologies_id');
    }

}
