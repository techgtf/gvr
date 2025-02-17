<?php

namespace App\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Website\Loan;


class LoanController extends Controller
{
    public function index () {
        try {
            $record = Loan::all();

            return response()->json([
                'staus' => true,
                'statusCode' => 200,
                'message' => 'Success',
                'data' => $record
            ]);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'statusCode' => 500,
                'message' => 'Failed',
                'errors' => $th->getMessage(),
            ]);
        }

    }
}
