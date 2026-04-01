<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600&family=Manrope:wght@800&display=swap');

/* DESKTOP DEFAULT */
.email-shell {
  width: 642px !important;
  max-width: 642px !important;
}

.email-body {
  padding: 32px !important;
}

/* MOBILE */
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

<!-- MAIN CONTAINER -->
<table role="presentation" class="email-shell" width="642" cellpadding="0" cellspacing="0"
style="background:#ffffff; border-radius:14px; overflow:hidden;">

<!-- DESKTOP HEADER -->
<tr class="desktop-header-wrap">
<td style="padding:0;">
  <img 
    src="{{ $message->embed(public_path('Assets/pcsize.png')) }}"
    width="642"
    height="190"
    style="display:block; width:642px; height:190px;"
    alt="Vibe Hive Header"
  >
</td>
</tr>

<!-- MOBILE HEADER -->
<tr class="mobile-header-wrap" style="display:none;">
<td align="center" style="padding:0;">
  <img 
    src="{{ $message->embed(public_path('Assets/mobile.png')) }}"
    width="321"
    class="mobile-header"
    style="display:block; width:321px; max-width:321px;"
    alt="Mobile Header"
  >
</td>
</tr>

<!-- BODY -->
<tr>
<td class="email-body" style="background:#f5f5f5;">

<!-- GREETING -->
<p style="
  font-family:'Outfit', Arial, sans-serif;
  font-size:16px;
  font-weight:600;
  margin:0 0 16px;
">
  Hi {{ $application->name }},
</p>

<p style="font-family:'Outfit', Arial; font-size:16px; line-height:1.6; margin:0 0 16px;">
  Thanks for reaching out to Vibe Hive!
</p>

<p style="font-family:'Outfit', Arial; font-size:16px; line-height:1.6; margin:0 0 16px;">
  We've successfully received your discovery call application and our team is currently reviewing your details.
</p>

<p style="font-family:'Outfit', Arial; font-size:16px; line-height:1.6; margin:0 0 24px;">
  We're looking for strong alignment to ensure every call is valuable and impactful for both sides.
</p>

<!-- TITLE -->
<p style="
  text-align:center;
  font-family:'Manrope', Arial, sans-serif;
  font-size:24px;
  font-weight:800;
  margin:30px 0 20px;
  color:#1a2140;
">
  What Happens Next
</p>

<!-- STEP 1 -->
<table width="100%" style="background:#eef0fa; border-radius:10px; margin-bottom:10px;">
<tr>
<td width="50" align="center">
  <div style="background:#B123FD; color:#fff; width:22px; height:22px; border-radius:50%; font-size:12px; line-height:22px; font-weight:bold;">
    1
  </div>
</td>
<td style="padding:14px; font-family:'Outfit', Arial; font-size:14px;">
  Our team reviews your application
</td>
</tr>
</table>

<!-- STEP 2 -->
<table width="100%" style="background:#eef0fa; border-radius:10px; margin-bottom:10px;">
<tr>
<td width="50" align="center">
  <div style="background:#B123FD; color:#fff; width:22px; height:22px; border-radius:50%; font-size:12px; line-height:22px; font-weight:bold;">
    2
  </div>
</td>
<td style="padding:14px; font-family:'Outfit', Arial; font-size:14px;">
  We check for mutual fit
</td>
</tr>
</table>

<!-- STEP 3 -->
<table width="100%" style="background:#eef0fa; border-radius:10px; margin-bottom:20px;">
<tr>
<td width="50" align="center">
  <div style="background:#B123FD; color:#fff; width:22px; height:22px; border-radius:50%; font-size:12px; line-height:22px; font-weight:bold;">
    3
  </div>
</td>
<td style="padding:14px; font-family:'Outfit', Arial; font-size:14px;">
  You'll receive a booking link if selected
</td>
</tr>
</table>

<p style="font-family:'Outfit', Arial; font-size:16px; line-height:1.6; margin:0 0 24px;">
  In the meantime, feel free to explore more about how we work — just sit back and relax. We'll take it from here.
</p>

<p style="font-family:'Outfit', Arial; font-size:16px;">Talk soon,</p>

<p style="font-family:'Outfit', Arial; font-size:16px; margin-top:10px;">
  <strong>Ino</strong><br>
  <span style="color:#777;">Client Director, Vibe Hive</span>
</p>

</td>
</tr>

<!-- FOOTER -->
<tr>
<td style="padding:20px; background:#f5f5f5; text-align:center;">
  <div style="height:1px; background:#ddd; margin-bottom:16px;"></div>

  <img
    src="{{ $message->embed(public_path('Assets/social-icons.png')) }}"
    width="168"
    height="24"
    alt="Social Icons"
    style="display:block; margin:0 auto;"
  >
</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>