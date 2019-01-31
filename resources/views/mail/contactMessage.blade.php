@component('mail::message')
# {{ $mailData->messageSubject}}

There is a new {{ $mailData->messageType }} message from:
<br>
{{ $mailData->fromFirstName}} {{ $mailData->fromLastName}}
<br>
<br>
{{ $mailData->fromEmail}}
<br>
<br>
{{ $mailData->messageBody}}

Thanks,<br>
{{ config('app.name') }}
@endcomponent
