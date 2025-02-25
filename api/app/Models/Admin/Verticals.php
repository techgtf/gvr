<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Verticals extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'short_description', 'image', 'description', 'price'];
    
    protected $dates = ['deleted_at'];



    public static function search($query)
    {
        return empty($query) ? static::query()
        : static::where('name', 'like', '%'.$query.'%');
    }
}
