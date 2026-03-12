<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; color: #333; max-width: 600px; margin: auto; padding: 32px;">

<h2>New Application Received</h2>

<table style="width:100%; border-collapse: collapse;">
    <tr style="background:#f5f5f5">
        <td style="padding:8px; font-weight:bold;">Lead Status</td>
        <td style="padding:8px;">
            @php
                $badge = match($leadStatus) {
                    'premium_lead'  => ['🔥 PREMIUM LEAD', '#7c3aed'],
                    'standard_lead' => ['✅ STANDARD LEAD', '#059669'],
                    'needs_review'  => ['🔍 NEEDS REVIEW', '#d97706'],
                    'not_a_fit'     => ['❌ NOT A FIT', '#dc2626'],
                    default         => ['UNKNOWN', '#666'],
                };
            @endphp
            <span style="background:{{ $badge[1] }};color:white;padding:4px 12px;border-radius:4px;font-weight:bold;">
                {{ $badge[0] }}
            </span>
        </td>
    </tr>
    <tr><td style="padding:8px;font-weight:bold;">Name</td><td style="padding:8px;">{{ $application->name }}</td></tr>
    <tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;">{{ $application->email }}</td></tr>
    <tr><td style="padding:8px;font-weight:bold;">Company</td><td style="padding:8px;">{{ $application->company }}</td></tr>
    <tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold;">Website</td><td style="padding:8px;">{{ $application->website ?? 'N/A' }}</td></tr>
    <tr><td style="padding:8px;font-weight:bold;">Industry</td><td style="padding:8px;">{{ $application->industry }}</td></tr>
    <tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold;">Challenge</td><td style="padding:8px;">{{ $application->challenge }}</td></tr>
    <tr><td style="padding:8px;font-weight:bold;">Budget</td><td style="padding:8px;">{{ $application->budget }}</td></tr>
    <tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold;">Timeline</td><td style="padding:8px;">{{ $application->timeline }}</td></tr>
    <tr><td style="padding:8px;font-weight:bold;">Heard From</td><td style="padding:8px;">{{ $application->hear_about }}</td></tr>
    @if($application->referrer)
    <tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold;">Referrer</td><td style="padding:8px;">{{ $application->referrer }}</td></tr>
    @endif
</table>

</body>
</html>