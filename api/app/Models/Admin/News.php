<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class News extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable = ['headingg', 'image', 'alt_tag', 'cdn'];


    public static function search($query)
    {
        return empty($query) ? static::query()
            : static::where('heading', 'like', '%'.$query.'%');
    }
}
