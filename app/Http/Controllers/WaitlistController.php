<?php

namespace App\Http\Controllers;

use App\Models\WaitlistEntry;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ApplicantConfirmation;
use App\Mail\VibeHiveNotification;

class WaitlistController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'          => 'required|string|max:255',
            'email'         => 'required|email|max:255|unique:waitlist_entries,email',
            'business_name' => 'required|string|max:255',
            'country'       => 'required|string|max:255',
            'website'       => 'nullable|string|max:255',
            'budget'        => 'required|string|max:255',
        ]);

        $entry = WaitlistEntry::create($validated);

        $leadStatus = 'waitlist';

        Mail::to($application->email)
            ->send(new ApplicantConfirmation($application, $leadStatus));

        // Send internal copy to Vibe Hive
        Mail::to('itsthevibehive@gmail.com')
            ->send(new VibeHiveNotification($application, $leadStatus));

        // Spot number = total count so far
        $spotNumber = WaitlistEntry::count();

        return response()->json([
            'message'      => 'Successfully joined the waitlist.',
            'spot_number'  => $spotNumber,
        ], 200);
    }
}