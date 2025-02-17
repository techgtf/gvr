<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PageMeta extends Model
{
    use HasFactory;
    protected $fillable = ['page','meta_title', 'meta_keyword', 'meta_description', 'head_data', 'footer_data'];

    public static function search($query)
    {
        return empty($query) ? static::query()
            : static::where('meta_title', 'like', '%'.$query.'%');
    }

    public function PageName(){
        return $this->belongsTo(Page::class, 'page');
    }


}
