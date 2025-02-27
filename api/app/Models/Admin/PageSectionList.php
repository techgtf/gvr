<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PageSectionList extends Model
{
    use HasFactory;

    protected $fillable = ['heading', 'image', 'alt', 'page_section', 'page_id', 'sub_heading', 'description'];

    public static function search($query)
    {
        return empty($query) ? static::query()
            : static::where('title', 'like', '%'.$query.'%');
    }

   
}
