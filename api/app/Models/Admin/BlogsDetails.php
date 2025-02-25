<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogsDetails extends Model
{
    use HasFactory;

    protected $fillable = ['blog_id', 'heading', 'description']; 

}
