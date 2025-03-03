<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EsgDetailsSection extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'short_description', 'image', 'type'];

    protected $table = "esg_details_section";

    public static function search ($query) {
        return empty($query) ? static::query()
        : static::where('name', 'like', '%'.$query.'%');
    }
    
}
