<?php

namespace App\Http\Controllers;

use App\Models\Payment as Transaction;
use Illuminate\Http\Request;
use Malico\MeSomb\Deposit;
use Malico\MeSomb\Payment;

class PaymentController extends Controller
{
    public function withdraw(Request $request)
    {
        $max = $request->max;
        $request->validate([
            'type' => 'required|string',
            'amount' => "required|integer|min:150|max:$max",
            'phone_number' => 'required|string|size:9'
        ]);

        $amount = round(0.9 * $request->amount);
        $phone_number = $request->phone_number;
        $withdrawal = new Deposit("+237$phone_number", $amount);

        try {
            $payment = $withdrawal->pay();
        } catch (\Throwable $th) {
            return back()->withErrors([
                'failed' => 'Something went wrong! Either check your internet connection and try again',
            ]);
        }

        if ($payment->success) {
            $user = auth()->user();
            $user->payments()->create([
                'type' => $request->type,
                'amount' => $amount,
                'phone_number' => $phone_number,
                'method' => 'Mobile money'
            ]);
            $user->update(['balance' => $user->balance - $request->amount]);
            return back()->with([
                'success' => 'Withdrawal successful'
            ]);
        } else {
            return back()->withErrors([
                'failed' => 'Could not perform the withdrawal',
            ]);
        }
    }

    public function supportUs(Request $request)
    {
        $request->validate([
            'type' => 'required|string',
            'amount' => "required|integer|min:100",
            'phone_number' => 'required|string|size:9'
        ]);

        $phone_number = $request->phone_number;
        $support = new Payment("+237$phone_number", $request->amount);

        try {
            $payment = $support->pay();
        } catch (\Throwable $th) {
            return back()->withErrors([
                'failed' => 'Transaction failed',
            ]);
        }

        if ($payment->success) {
            Transaction::create([
                'type' => $request->type,
                'amount' => $request->amount,
                'phone_number' => $phone_number,
                'method' => 'Mobile money'
            ]);

            return back()->with([
                'success' => 'Support successful'
            ]);
        } else {
            return back()->withErrors([
                'failed' => 'Transaction failed',
            ]);
        }
    }
}