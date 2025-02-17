<?php

namespace App\Models\Admin\Enquiry;

use App\Models\Admin\Projects;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectEnquiry extends Model
{
    use HasFactory;

    protected $fillable = ['project_id', 'name', 'phone', 'email', 'message', 'status'];

    protected $dates = ['deleted_at'];


    public static function search ($query)
    {
        return empty($query) ? static::query()
        : static::where('name', 'like', '%'.$query.'%');
    }

   

}
