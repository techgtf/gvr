<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;

    protected $fillable = ['name','image','desgination', 'bio'];

    
    
    public static function search($query)
    {
        return empty($query) ? static::query()
        : static::where('name', 'like', '%'.$query.'%');
    }

}
