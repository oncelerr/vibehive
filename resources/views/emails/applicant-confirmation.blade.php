<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600&family=Manrope:wght@800&display=swap');

.email-shell {
  width: 642px !important;
  max-width: 642px !important;
}

.email-body {
  padding: 32px !important;
}

@media only screen and (max-width: 640px) {
  .email-shell {
    width: 321px !important;
    max-width: 321px !important;
  }
  .email-body {
    padding: 24px 16px !important;
  }
  .desktop-header-wrap {
    display: none !important;
    mso-hide: all !important;
    max-height: 0 !important;
    overflow: hidden !important;
  }
  .mobile-header-wrap {
    display: block !important;
    max-height: none !important;
  }
  .mobile-header {
    width: 321px !important;
    max-width: 321px !important;
    height: auto !important;
  }
}
</style>

<title>Vibe Hive Email</title>
</head>

<body style="margin:0; padding:0; background:#f3f3f3; font-family:Arial, sans-serif;">

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f3f3;">
<tr>
<td align="center">

<table role="presentation" class="email-shell" width="642" cellpadding="0" cellspacing="0"
style="background:#ffffff; border-radius:14px; overflow:hidden;">

@if($leadStatus === 'premium_lead' || $leadStatus === 'standard_lead')

  {{-- ═══════════════════════════════════════════ --}}
  {{-- VARIANT: APPROVED                          --}}
  {{-- ═══════════════════════════════════════════ --}}

  <tr class="desktop-header-wrap">
  <td style="padding:0;">
    <img src="{{ $message->embed(public_path('Assets/pcsize1.png')) }}"
      width="642" height="190"
      style="display:block; width:642px; height:190px;"
      alt="Vibe Hive Header">
  </td>
  </tr>

  <tr class="mobile-header-wrap" style="display:none;">
  <td align="center" style="padding:0;">
    <img src="{{ $message->embed(public_path('Assets/mobile1.png')) }}"
      width="321" class="mobile-header"
      style="display:block; width:321px; max-width:321px;"
      alt="Mobile Header">
  </td>
  </tr>

  <tr>
  <td class="email-body" style="background:#f5f5f5;">

    <p style="font-family:'Outfit',Arial,sans-serif; font-size:16px; font-weight:600; margin:0 0 16px;">
      Hi {{ $application->name }},
    </p>

    <p style="font-family:'Outfit',Arial; font-size:16px; line-height:1.6; margin:0 0 16px;">
      Thank you for your application. We've reviewed your submission and <strong>{{ $application->company }}</strong> looks like a strong fit for what we do at Vibe Hive.
    </p>

    <p style="font-family:'Outfit',Arial; font-size:16px; line-height:1.6; margin:0 0 24px;">
      You can book your <strong>30-minute discovery call</strong> using the link below:
    </p>

    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
    <tr>
    <td align="center">
      <a href="https://calendly.com/itsthevibehive/60min"
        style="display:inline-block; background:#B123FD; color:#ffffff; font-family:'Outfit',Arial,sans-serif; font-size:15px; font-weight:600; text-decoration:none; padding:14px 32px; border-radius:50px;">
        Book Your Discovery Call &nbsp;&#x2197;
      </a>
    </td>
    </tr>
    </table>

    <p style="font-family:'Outfit',Arial; font-size:16px; line-height:1.6; margin:0 0 16px;">
      This session will help us better understand your goals and explore how we can support your needs.
    </p>

    <p style="font-family:'Outfit',Arial; font-size:16px; line-height:1.6; margin:0 0 24px;">
      If the available times don't work for you, feel free to reply to this email and we'll be happy to arrange an alternative schedule.
    </p>

    <p style="font-family:'Outfit',Arial; font-size:16px; line-height:1.6; margin:0 0 24px;">
      Looking forward to speaking with you.
    </p>

    <p style="font-family:'Outfit',Arial; font-size:16px;">Best Regards,</p>
    <p style="font-family:'Outfit',Arial; font-size:16px; margin-top:10px;">
      <strong>Catalino Giron</strong><br>
      <span style="color:#777;">Client Director, Vibe Hive</span>
    </p>

  </td>
  </tr>

@elseif($leadStatus === 'waitlist')

  {{-- ═══════════════════════════════════════════ --}}
  {{-- VARIANT: WAITLIST                          --}}
  {{-- ═══════════════════════════════════════════ --}}

  <tr class="desktop-header-wrap">
  <td style="padding:0;">
    <img src="{{ $message->embed(public_path('Assets/pcsize.png')) }}"
      width="642" height="190"
      style="display:block; width:642px; height:190px;"
      alt="Vibe Hive Header">
  </td>
  </tr>

  <tr class="mobile-header-wrap" style="display:none;">
  <td align="center" style="padding:0;">
    <img src="{{ $message->embed(public_path('Assets/mobile.png')) }}"
      width="321" class="mobile-header"
      style="display:block; width:321px; max-width:321px;"
      alt="Mobile Header">
  </td>
  </tr>

  <tr>
  <td class="email-body" style="background:#f5f5f5;">

    <p style="font-family:'Outfit',Arial,sans-serif; font-size:16px; font-weight:600; margin:0 0 16px;">
      Hi {{ $application->name }},
    </p>

    <p style="font-family:'Outfit',Arial; font-size:16px; line-height:1.6; margin:0 0 16px;">
      Thank you for applying to work with Vibe Hive!
    </p>

    <p style="font-family:'Outfit',Arial; font-size:16px; line-height:1.6; margin:0 0 16px;">
      We can see strong potential in <strong>{{ $application->company }}</strong> and we'd love to work with you. However, our team is currently at full capacity and we're not taking on new projects at this time.
    </p>

    <p style="font-family:'Outfit',Arial; font-size:16px; line-height:1.6; margin:0 0 24px;">
      We've added you to our <strong>waitlist</strong> and you'll be among the first we reach out to when a spot opens up.
    </p>

    <p style="text-align:center; font-family:'Manrope',Arial,sans-serif; font-size:24px; font-weight:800; margin:30px 0 20px; color:#1a2140;">
      You're on the Waitlist
    </p>

    <table width="100%" style="background:#eef0fa; border-radius:10px; margin-bottom:10px;">
    <tr>
    <td width="50" align="center">
      <div style="background:#B123FD; color:#fff; width:22px; height:22px; border-radius:50%; font-size:12px; line-height:22px; font-weight:bold; text-align:center;">
        1
      </div>
    </td>
    <td style="padding:14px; font-family:'Outfit',Arial; font-size:14px;">
      Your application is saved and you're on our radar
    </td>
    </tr>
    </table>

    <table width="100%" style="background:#eef0fa; border-radius:10px; margin-bottom:10px;">
    <tr>
    <td width="50" align="center">
      <div style="background:#B123FD; color:#fff; width:22px; height:22px; border-radius:50%; font-size:12px; line-height:22px; font-weight:bold; text-align:center;">
        2
      </div>
    </td>
    <td style="padding:14px; font-family:'Outfit',Arial; font-size:14px;">
      We'll notify you as soon as a project slot becomes available
    </td>
    </tr>
    </table>

    <table width="100%" style="background:#eef0fa; border-radius:10px; margin-bottom:20px;">
    <tr>
    <td width="50" align="center">
      <div style="background:#B123FD; color:#fff; width:22px; height:22px; border-radius:50%; font-size:12px; line-height:22px; font-weight:bold; text-align:center;">
        3
      </div>
    </td>
    <td style="padding:14px; font-family:'Outfit',Arial; font-size:14px;">
      You'll receive a booking link to get started right away
    </td>
    </tr>
    </table>

    <p style="font-family:'Outfit',Arial; font-size:16px; line-height:1.6; margin:0 0 24px;">
      In the meantime, feel free to reply to this email if you have any questions. We appreciate your patience and look forward to working together.
    </p>

    <p style="font-family:'Outfit',Arial; font-size:16px;">Talk soon,</p>
    <p style="font-family:'Outfit',Arial; font-size:16px; margin-top:10px;">
      <strong>Ino</strong><br>
      <span style="color:#777;">Client Director, Vibe Hive</span>
    </p>

  </td>
  </tr>

@elseif($leadStatus === 'not_a_fit')

  {{-- ═══════════════════════════════════════════ --}}
  {{-- VARIANT: NOT A FIT                         --}}
  {{-- ═══════════════════════════════════════════ --}}

  <tr class="desktop-header-wrap">
  <td style="padding:0;">
    <img src="{{ $message->embed(public_path('Assets/pcsize.png')) }}"
      width="642" height="190"
      style="display:block; width:642px; height:190px;"
      alt="Vibe Hive Header">
  </td>
  </tr>

  <tr class="mobile-header-wrap" style="display:none;">
  <td align="center" style="padding:0;">
    <img src="{{ $message->embed(public_path('Assets/mobile.png')) }}"
      width="321" class="mobile-header"
      style="display:block; width:321px; max-width:321px;"
      alt="Mobile Header">
  </td>
  </tr>

  <tr>
  <td class="email-body" style="background:#f5f5f5;">

    <p style="font-family:'Outfit',Arial,sans-serif; font-size:16px; font-weight:600; margin:0 0 16px;">
      Hi {{ $application->name }},
    </p>

    <p style="font-family:'Outfit',Arial; font-size:16px; line-height:1.6; margin:0 0 16px;">
      Thanks for your interest in Vibe Hive!
    </p>

    <p style="font-family:'Outfit',Arial; font-size:16px; line-height:1.6; margin:0 0 16px;">
      After reviewing your application, I don't think we're the best fit for what you're looking for right now. Our projects typically start at PHP 180,000 and take 4–6 weeks.
    </p>

    <p style="font-family:'Outfit',Arial; font-size:16px; line-height:1.6; margin:0 0 24px;">
      I'd recommend checking out alternative resources for more budget-friendly options that might be a better match for your current needs.
    </p>

    <p style="font-family:'Outfit',Arial; font-size:16px; line-height:1.6; margin:0 0 24px;">
      Best of luck with your project!
    </p>

    <p style="font-family:'Outfit',Arial; font-size:16px;">Best Regards,</p>
    <p style="font-family:'Outfit',Arial; font-size:16px; margin-top:10px;">
      <strong>Ino</strong><br>
      <span style="color:#777;">Client Director, Vibe Hive</span>
    </p>

  </td>
  </tr>

@else

  {{-- ═══════════════════════════════════════════ --}}
  {{-- VARIANT: PENDING / NEEDS REVIEW            --}}
  {{-- ═══════════════════════════════════════════ --}}

  <tr class="desktop-header-wrap">
  <td style="padding:0;">
    <img src="{{ $message->embed(public_path('Assets/pcsize.png')) }}"
      width="642" height="190"
      style="display:block; width:642px; height:190px;"
      alt="Vibe Hive Header">
  </td>
  </tr>

  <tr class="mobile-header-wrap" style="display:none;">
  <td align="center" style="padding:0;">
    <img src="{{ $message->embed(public_path('Assets/mobile.png')) }}"
      width="321" class="mobile-header"
      style="display:block; width:321px; max-width:321px;"
      alt="Mobile Header">
  </td>
  </tr>

  <tr>
  <td class="email-body" style="background:#f5f5f5;">

    <p style="font-family:'Outfit',Arial,sans-serif; font-size:16px; font-weight:600; margin:0 0 16px;">
      Hi {{ $application->name }},
    </p>

    <p style="font-family:'Outfit',Arial; font-size:16px; line-height:1.6; margin:0 0 16px;">
      Thanks for reaching out to Vibe Hive!
    </p>

    <p style="font-family:'Outfit',Arial; font-size:16px; line-height:1.6; margin:0 0 16px;">
      We've successfully received your discovery call application and our team is currently reviewing your details.
    </p>

    <p style="font-family:'Outfit',Arial; font-size:16px; line-height:1.6; margin:0 0 24px;">
      We're looking for strong alignment to ensure every call is valuable and impactful for both sides.
    </p>

    <p style="text-align:center; font-family:'Manrope',Arial,sans-serif; font-size:24px; font-weight:800; margin:30px 0 20px; color:#1a2140;">
      What Happens Next
    </p>

    <table width="100%" style="background:#eef0fa; border-radius:10px; margin-bottom:10px;">
    <tr>
    <td width="50" align="center">
      <div style="background:#B123FD; color:#fff; width:22px; height:22px; border-radius:50%; font-size:12px; line-height:22px; font-weight:bold; text-align:center;">
        1
      </div>
    </td>
    <td style="padding:14px; font-family:'Outfit',Arial; font-size:14px;">
      Our team reviews your application
    </td>
    </tr>
    </table>

    <table width="100%" style="background:#eef0fa; border-radius:10px; margin-bottom:10px;">
    <tr>
    <td width="50" align="center">
      <div style="background:#B123FD; color:#fff; width:22px; height:22px; border-radius:50%; font-size:12px; line-height:22px; font-weight:bold; text-align:center;">
        2
      </div>
    </td>
    <td style="padding:14px; font-family:'Outfit',Arial; font-size:14px;">
      We check for mutual fit
    </td>
    </tr>
    </table>

    <table width="100%" style="background:#eef0fa; border-radius:10px; margin-bottom:20px;">
    <tr>
    <td width="50" align="center">
      <div style="background:#B123FD; color:#fff; width:22px; height:22px; border-radius:50%; font-size:12px; line-height:22px; font-weight:bold; text-align:center;">
        3
      </div>
    </td>
    <td style="padding:14px; font-family:'Outfit',Arial; font-size:14px;">
      You'll receive a booking link if selected
    </td>
    </tr>
    </table>

    <p style="font-family:'Outfit',Arial; font-size:16px; line-height:1.6; margin:0 0 24px;">
      In the meantime, feel free to explore more about how we work — just sit back and relax. We'll take it from here.
    </p>

    <p style="font-family:'Outfit',Arial; font-size:16px;">Talk soon,</p>
    <p style="font-family:'Outfit',Arial; font-size:16px; margin-top:10px;">
      <strong>Ino</strong><br>
      <span style="color:#777;">Client Director, Vibe Hive</span>
    </p>

  </td>
  </tr>

@endif

<!-- FOOTER -->
<tr>
<td style="padding:20px; background:#f5f5f5; text-align:center;">
  <div style="height:1px; background:#ddd; margin-bottom:16px;"></div>
  <img src="{{ $message->embed(public_path('Assets/social-icons.png')) }}"
    width="168" height="24"
    alt="Social Icons"
    style="display:block; margin:0 auto;">
</td>
</tr>

</table>
</td>
</tr>
</table>

</body>
</html>