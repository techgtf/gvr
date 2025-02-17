<?php

namespace App\Models\website;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Career extends Model
{
    use HasFactory;

    protected $fillable = ['experience_id', 'job_timing', 'destination', 'address', 'short_description', 'description'];

    protected $table = 'careers';



    public function getExperienceIdAttribute()
    {
        if(!empty($this->attributes['experience_id'])){
            return getJobYear($this->attributes['experience_id']);
        }
    }

    public function getJobTimingAttribute ()
    {
        if(!empty($this->attributes['job_timing'])){
            return getJobType($this->attributes['job_timing']);
        }
    }



    public static function search ($search)
    {

        return empty($search) ? static::query()
            : static::where('destination', 'like', '%'.$search.'%');
    }

}
