<?php

namespace App\Http\Controllers;

use App\Mail\ApplicantConfirmation;
use App\Mail\VibeHiveNotification;
use App\Models\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ApplicationController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'       => 'required|string|max:255',
            'email'      => 'required|email|max:255',
            'company'    => 'required|string|max:255',
            'website' => 'nullable|string|max:255',
            'industry'   => 'required|string|max:255',
            'challenge'  => 'required|string|min:1',
            'budget'     => 'required|string',
            'timeline'   => 'required|string',
            'hear_about' => 'required|string',
            'referrer'   => 'nullable|string|max:255',
        ]);

        $leadStatus = $this->classifyLead($validated);
        $validated['lead_status'] = $leadStatus;

        $application = Application::create($validated);

        // Send email to applicant
        Mail::to($application->email)
            ->send(new ApplicantConfirmation($application, $leadStatus));

        // Send internal copy to Vibe Hive
        Mail::to('itsthevibehive@gmail.com')
            ->send(new VibeHiveNotification($application, $leadStatus));

        return response()->json([
            'message'     => 'Application submitted successfully.',
            'lead_status' => $leadStatus,
        ], 201);
    }

    private function classifyLead(array $data): string
    {
        $budget   = $data['budget'];
        $timeline = $data['timeline'];
        $challenge = $data['challenge'];
        $isSpecific = strlen($challenge) >= 50;

        // Scenario A: Premium Lead
        if (
            $budget === '$7,200+ USD' &&
            in_array($timeline, ['Within 1-2 months', '3+ months out']) &&
            $isSpecific
        ) {
            return 'premium_lead';
        }

        // Scenario B: Standard Lead
        if (
            in_array($budget, ['$2,700 - $4,500 USD', '$4,500 - $7,200 USD']) &&
            in_array($timeline, ['Within 1-2 months', '3+ months out']) &&
            $isSpecific
        ) {
            return 'standard_lead';
        }

        // Scenario C: Not a Fit
        if (
            $budget === 'Under $2,700 USD' &&
            in_array($timeline, ['Just exploring options for now', 'ASAP - we need to move fast'])
        ) {
            return 'not_a_fit';
        }

        // Scenario D: Needs Review (everything else)
        return 'needs_review';
    }

    public function index()
    {
        return response()->json(
            Application::latest()->get()
        );
    }

    public function show(Application $application)
    {
        return response()->json($application);
    }
}