<?php

namespace App;
use App\Mail\ContactMessage;


class MailData
{

    public $fromFirstName = 'John';
    public $fromLastName = 'Doe';
    public $fromEmail = 'somebody@somewhere.com';
    public $messageSubject = 'Hi donateABLE';
    public $messageBody = 'Hello, World!';
    public $messageType = 'Spam';
    public $messageTo = 'jsmith@synergenics.ca';

    /**
     *
     */
    public function __construct(array $messageData)
    {
        $this->fromFirstName = $messageData['fromFirstName'];
        $this->fromLastName = $messageData['fromLastName'];
        $this->fromEmail = $messageData['fromEmail'];
        $this->messageSubject = $messageData['messageSubject'];
        $this->messageBody = $messageData['messageBody'];
        $this->messageType = $messageData['messageType'];
        $this->messageTo = $messageData['messageTo'];
        return $this;
    }

    public function toMailMessage() {
        return new ContactMessage($this);
    }

    public function toString() {
        return $this->fromFirstName . $this->fromLastName . $this->fromEmail . $this->messageSubject . $this->messageBody;
    }

    public function name() {
        return $this->fromFirstName . ' ' . $this->fromLastName;
    }

    public function subject() {
        return '['. $this->messageType .'] ' . $this->messageSubject;
    }
}
