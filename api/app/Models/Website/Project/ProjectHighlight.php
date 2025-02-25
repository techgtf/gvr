<?php

namespace App\Models\Website\Project;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectHighlight extends Model
{
    use HasFactory;

    protected $hidden = ['project_id', 'created_at', 'updated_at', 'key_highlight'];

}
