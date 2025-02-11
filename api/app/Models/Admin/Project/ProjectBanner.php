<?php
namespace App\Models\Admin\Project;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class ProjectBanner extends Model
{
    use HasFactory;
    
    protected $fillable = ['project_id', 'alt_text','desktop_image','mobile_image'];

}
