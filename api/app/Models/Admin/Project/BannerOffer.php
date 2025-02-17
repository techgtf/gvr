<?php

namespace App\Models\Admin\Project;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BannerOffer extends Model
{
    use HasFactory;

    protected $fillable = ['md_image', 'sm_image', 'alt'];

    protected $dates = ['deleted_at'];


    

}
