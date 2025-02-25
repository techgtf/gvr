<?php

namespace App\Models\Website;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TimelineImage extends Model
{
    use HasFactory;

    protected $fillable = ['year', 'image'];

    protected $table = "timeline_images";

}
