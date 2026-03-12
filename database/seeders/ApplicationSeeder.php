<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Application;

class ApplicationSeeder extends Seeder
{
    public function run(): void
    {
        $applications = [
            [
                'name'        => 'Christine M.',
                'email'       => 'christine@koghcloud.com',
                'company'     => 'Kogh Cloud INC.',
                'website'     => 'https://koghcloud.com',
                'industry'    => 'Tech / SaaS',
                'challenge'   => 'We need a complete redesign of our landing page to improve conversions and reflect our new brand direction.',
                'budget'      => '$7,200+ USD',
                'timeline'    => 'Within 1-2 months',
                'hear_about'  => 'Google Search',
                'referrer'    => null,
                'lead_status' => 'premium_lead',
            ],
            [
                'name'        => 'John D.',
                'email'       => 'john@techsolutions.com',
                'company'     => 'Tech Solutions Ltd.',
                'website'     => 'https://techsolutions.com',
                'industry'    => 'Professional Services (Legal, Consulting, Real Estate)',
                'challenge'   => 'Our current website is outdated and not generating any leads. We need something conversion-focused.',
                'budget'      => '$4,500 - $7,200 USD',
                'timeline'    => '3+ months out',
                'hear_about'  => 'Referral from someone',
                'referrer'    => 'Sarah K.',
                'lead_status' => 'standard_lead',
            ],
            [
                'name'        => 'Mark T.',
                'email'       => 'mark@venturelabs.com',
                'company'     => 'Venture Labs',
                'website'     => null,
                'industry'    => 'Coaching / Education / Personal Brand',
                'challenge'   => 'Just starting out.',
                'budget'      => 'Under $2,700 USD',
                'timeline'    => 'Just exploring options for now',
                'hear_about'  => 'Facebook / Instagram',
                'referrer'    => null,
                'lead_status' => 'not_a_fit',
            ],
            [
                'name'        => 'Sarah K.',
                'email'       => 'sarah@creativestudio.com',
                'company'     => 'Creative Studio Co.',
                'website'     => 'https://creativestudio.com',
                'industry'    => 'Wellness / Lifestyle',
                'challenge'   => 'Not sure what we need yet but want to explore options for growing our digital presence this year.',
                'budget'      => 'Not sure yet',
                'timeline'    => 'Within 1-2 months',
                'hear_about'  => 'LinkedIn',
                'referrer'    => null,
                'lead_status' => 'needs_review',
            ],
        ];

        foreach ($applications as $application) {
            Application::create($application);
        }
    }
}