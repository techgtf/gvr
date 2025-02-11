<?php

namespace App\Models\Admin\Typology;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TypologySubTypology extends Model
{
    use HasFactory,SoftDeletes;
    protected $fillable = ['categories_id', 'typologies_id'];

    public function typologies(){
        return $this->belongsTo(Typology::class,'typologies_id');
    }
    public function subtypology() {
        return $this->belongsTo(SubTypology::class,'sub_typologies_id');
    }
   
  
}
