<?php

namespace App\Mail;

use App\Models\Application;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ApplicantConfirmation extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        public Application $application,
        public string $leadStatus
    ) {}

    public function envelope(): Envelope
    {
        $subject = match($this->leadStatus) {
            'premium_lead', 'standard_lead' => "Let's chat! Here's your discovery call link",
            'not_a_fit'                     => 'Re: Your Discovery Call Application',
            default                         => 'We got your application!',
        };

        return new Envelope(subject: $subject);
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.applicant-confirmation',
        );
    }
}