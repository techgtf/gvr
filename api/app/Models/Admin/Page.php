<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    use HasFactory;


    public function meta()
    {
        return $this->belongsTo(PageMeta::class,'id','page');
    }
}
