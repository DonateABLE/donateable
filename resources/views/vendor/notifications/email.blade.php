@component('mail::message')
{{-- Greeting --}}
@if (! empty($greeting))
# {{ $greeting }}
@else
@if ($level === 'error')
# @lang('Whoops!')
@else
# @lang('Hello!')
@endif
@endif

{{-- Intro Lines --}}
@foreach ($introLines as $line)
{{ $line }}

@endforeach

{{-- Action Button --}}
@isset($actionText)
<?php
    switch ($level) {
        case 'success':
        case 'error':
            $color = $level;
            break;
        default:
            $color = 'primary';
    }
?>
@component('mail::button', ['url' => $actionUrl, 'color' => $color])
{{ $actionText }}
@endcomponent
@endisset

{{-- Outro Lines --}}
@foreach ($outroLines as $line)
{{ $line }}

@endforeach

{{-- Salutation --}}
@if (! empty($salutation))
{{ $salutation }}
@else
@lang('Regards'),<br>The {{ config('app.name') }} Team
@endif
<div style="display:flex; align-items: center;justify-content: center;text-align: center;">
                    <a href="https://www.facebook.com/donateABLE/" target="_blank"><img src="https://donateable.ca/img/signature/Facebook.png" style="margin-bottom: 0px;margin-right: 10px;" alt="facebook" width="40px" height="40px"></a>
                    <a href="https://twitter.com/donateABLE_ca" target="_blank"><img src="https://donateable.ca/img/signature/Twitter.png" style="margin-bottom: 0px;margin-right: 10px;" alt="twitter" width="40px" height="40px"></a>
                    <a href="https://donateable.ca/" target="_blank"><img src="https://donateable.ca/img/signature/Web.png" style="margin-bottom: 0px;" alt="website" width="40px" height="40px"></a>
</div>
{{-- Subcopy --}}
@isset($actionText)
@component('mail::subcopy')

### Need Support?
@lang("Feel free to email us if you have any questions, comments, or suggestions. We'll be happy to resolve your issues.")
<br/><br/>
@lang(
    "If you’re having trouble clicking the \":actionText\" button, copy and paste the URL below\n".
    'into your web browser: [:actionURL](:actionURL)',
    [
        'actionText' => $actionText,
        'actionURL' => $actionUrl,
    ]
)
@endcomponent
@endisset
@endcomponent
