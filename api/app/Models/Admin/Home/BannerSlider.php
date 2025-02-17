<?php

namespace App\Models\Admin\Home;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BannerSlider extends Model
{
    use HasFactory;

    protected $fillable = ['desktop_image', 'mobile_image', 'image_alt'];


}
