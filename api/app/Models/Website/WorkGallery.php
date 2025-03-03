<?php

namespace App\Models\Website;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkGallery extends Model
{
    use HasFactory;

    protected $table = 'work_galleries';

    protected $hidden = ['updated_at', 'created_at'];

     
}
