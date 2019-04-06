<?php

namespace App\Http\Controllers;
use App\MailData;
use Mail;
use Illuminate\Http\Request;

class ContactFormController extends Controller
{
    function handleTechnicalSupportForm(Request $request) {
        return $this->handleContactForm($request, 'Support', 'support@donateable.ca');
    }

    function handleJoinProgramForm(Request $request) {
        return $this->handleContactForm($request, 'Request', 'requests@donateable.ca');
    }

    private function handleContactForm(Request $request, $messageType, $messageTo) {
        if ($request->input('neverFill') != '') {
            return;
        }
        $formData = new MailData(array(
            'fromFirstName' => $request->input('fromFirstName'),
            'fromLastName' => $request->input('fromLastName'),
            'fromEmail' => $request->input('fromEmail'),
            'messageSubject' => $request->input('messageSubject'),
            'messageBody' => $request->input('messageBody'),
            'messageType' => $messageType,
            'messageTo' => $messageTo

        ));
        error_log($request);
        error_log($formData->toString());

        // $formData->toMailMessage();
        // uncomment for prod
        Mail::send($formData->toMailMessage());
        // return;
    }
}
