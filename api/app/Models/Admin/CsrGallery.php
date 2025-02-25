<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CsrGallery extends Model
{
    use HasFactory;

    protected $fillable = ['image', 'alt'];
    
    protected $table = "esg_galleries";

}
