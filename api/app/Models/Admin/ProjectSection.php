<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class ProjectSection extends Model
{
    use HasFactory;

    protected $fillable = ['project_id', 'section_type', 'heading', 'sub_heading', 'image', 'image_alt', 'description'];
  
    public static function search()
    {
        return empty($query) ? static::query()
        : static::where('section_type', 'like', '%'.$query.'%');
    }
}
