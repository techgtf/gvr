<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkGallery extends Model
{
    use HasFactory;

    protected $fillable = ['image', 'alt_tag', 'cdn', 'type'];
    
}
