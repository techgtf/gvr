<?php

namespace App\Models\Admin\Project;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectSpecificationList extends Model
{
    use HasFactory;

    protected $fillable = ['spec_id', 'title', 'value'];

}
