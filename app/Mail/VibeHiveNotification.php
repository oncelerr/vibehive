<?php

namespace App\Mail;

use App\Models\Application;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class VibeHiveNotification extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        public Application $application,
        public string $leadStatus
    ) {}

    public function envelope(): Envelope
    {
        $subject = match($this->leadStatus) {
            'premium_lead'  => '🔥 [PREMIUM LEAD] New Application - ' . $this->application->name,
            'standard_lead' => '✅ [STANDARD LEAD] New Application - ' . $this->application->name,
            'needs_review'  => '🔍 [NEEDS REVIEW] New Application - ' . $this->application->name,
            'not_a_fit'     => '❌ [NOT A FIT] New Application - ' . $this->application->name,
            default         => 'New Application - ' . $this->application->name,
        };

        return new Envelope(subject: $subject);
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.vibehive-notification',
        );
    }
}