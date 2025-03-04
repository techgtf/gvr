<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryOverview extends Model
{
    use HasFactory;

    protected $fillable = ['heading', 'description'];

}
