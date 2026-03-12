<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; color: #333; max-width: 600px; margin: auto; padding: 32px;">

@if($leadStatus === 'premium_lead' || $leadStatus === 'standard_lead')
    <h2>Hey {{ $application->name }},</h2>
    <p>Thanks for applying! I reviewed your submission and <strong>{{ $application->company }}</strong> looks like a great fit for what we do.</p>
    <p>Here's the link to book your 30-minute discovery call with me:</p>
    <p><a href="https://calendly.com/itsthevibehive/60min" style="background:#B123FD;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;">👉 Book Your Discovery Call</a></p>
    <p>Looking forward to learning more about your challenge.</p>
    <br>
    <p><strong>Catalino Giron</strong><br>Client Director, Vibe Hive</p>

@elseif($leadStatus === 'not_a_fit')
    <h2>Hey {{ $application->name }},</h2>
    <p>Thanks for your interest in Vibe Hive!</p>
    <p>After reviewing your application, I don't think we're the best fit for what you're looking for right now. Our projects typically start at PHP 180,000 and take 4–6 weeks.</p>
    <p>I'd recommend checking out alternative resources for more budget-friendly options that might be a better match for your current needs.</p>
    <p>Best of luck with your project!</p>
    <br>
    <p><strong>Ino Giron</strong><br>Client Director, Vibe Hive</p>

@else
    <h2>Hey {{ $application->name }},</h2>
    <p>Thanks for reaching out to Vibe Hive!</p>
    <p>We've received your discovery call application and we're reviewing it now.</p>
    <p>If we're a good fit, you'll get a link to book your call within 24 hours.</p>
    <p>Talk soon,</p>
    <br>
    <p><strong>Ino Giron</strong><br>Client Director, Vibe Hive</p>
@endif

</body>
</html>