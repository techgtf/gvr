<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class Handler extends ExceptionHandler
{
    public function render($request, Throwable $exception)
    {
        if ($exception instanceof NotFoundHttpException) {
            return response()->json([
                'error' => 'Not Found',
                'status'=>false,
                'statusCode'=>404,
                'message' => 'The requested resource was not found.'
            ], 404);
        }
    
        return parent::render($request, $exception);
    }
}
