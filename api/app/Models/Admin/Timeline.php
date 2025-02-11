<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class Timeline extends Model
{
    use HasFactory;


    public function getIcons($raw = false)
    {
        if ($raw) {
            return $this->image_path;
        } else {
            return $this->image_url; // This will invoke the accessor getIconsAttribute()
        }
    }

    public function getIconsAttribute($value)
    {
        return asset('storage/'.$this->attributes['icons']);
    }

    public static function search($query)
    {
        return empty($query) ? static::query()
            : static::where('title', 'like', '%'.$query.'%');
    }





}
