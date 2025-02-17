<?php

namespace App\Models\Admin\Platter;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlatterBanner extends Model
{

    protected $fillable = [
        'platter_id',
        'desktop_image',
        'mobile_image',
        'alt_text',
    ];


    use HasFactory;
}
