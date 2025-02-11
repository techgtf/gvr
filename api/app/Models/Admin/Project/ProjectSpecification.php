<?php

namespace App\Models\Admin\Project;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectSpecification extends Model
{
    use HasFactory;

    protected $fillable = ['project_id', 'heading'];

}
