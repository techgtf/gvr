<?php

namespace App\Models\Admin\Project;

use App\Models\Admin\Typology\SubTypology;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProjectLocationAdvantage extends Model
{
    use HasFactory;
    protected $fillable = ['project_id','type','distance','name'];

   
}
