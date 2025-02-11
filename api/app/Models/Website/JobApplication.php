<?php

namespace App\Models\Website;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobApplication extends Model
{
    use HasFactory;

    protected $fillable = ['destination', 'experience_id', 'name', 'phone', 'email', 'resume'];

    protected $table = 'job_applications';



    public function getExperienceIdAttribute()
    {
        if(!empty($this->attributes['experience_id'])){
            return getJobYear($this->attributes['experience_id']);
        }
    }


    public static function search ($search)
    {
        return empty($query) ? static::query()
            : static::where('developer', 'like', '%'.$query.'%');
    }
  
}
