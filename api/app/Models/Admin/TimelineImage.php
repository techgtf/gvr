<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TimelineImage extends Model
{
    use HasFactory;

    protected $fillable = ['year', 'image', 'alt'];
    
}
