<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PagesFAQ extends Model
{
    use HasFactory;

    protected $fillable = ['question', 'answer', 'type'];

    protected $table = "pages_faqs";


}
