<?php

namespace App\Models\Admin\Home;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BannerContent extends Model
{
    use HasFactory;

    protected $fillable = ['sub_heading', 'headinng', 'description'];    

    

}
