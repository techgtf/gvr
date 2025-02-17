<?php

namespace App\Models\Admin;

use App\Models\Admin\Typology\Typology;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
class CategoryTypology extends Model
{
    use HasFactory;
    protected $fillable = ['categories_id', 'typologies_id'];


    public function typologies(){
        return $this->belongsTo(Typology::class,'typologies_id');
    }
    public function categories() {
        return $this->belongsTo(Categories::class,'categories_id');
    }
}
