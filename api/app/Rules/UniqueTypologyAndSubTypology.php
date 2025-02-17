<?php

namespace App\Rules;

use App\Models\Admin\Typology\TypologySubTypology;
use Illuminate\Contracts\Validation\Rule;

class UniqueTypologyAndSubTypology implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        // Assuming $value is an array containing category_id and sub_category_id
        $typologies_id = $value['typologies_id'];
        $sub_typologies_id = $value['sub_typologies_id'];

        // Check if the combination exists in the database
        return !TypologySubTypology::where('typologies_id', $typologies_id)
                                ->where('sub_typologies_id', $sub_typologies_id)
                                ->exists();
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The validation error message.';
    }
}
