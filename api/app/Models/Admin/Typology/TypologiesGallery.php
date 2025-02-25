<?php

namespace App\Models\Admin\Typology;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class TypologiesGallery extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable = ['type', 'file'];

}
