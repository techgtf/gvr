<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Testimonials extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'image', 'video', 'iframe_url', 'destination', 'description'];

    protected $dates = ['deleted_at'];




    public static function search($query)
    {
        return empty($query) ? static::query()
            : static::where('name', 'like', '%'.$query.'%');
    }
}
