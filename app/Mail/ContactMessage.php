<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\MailData;

class ContactMessage extends Mailable
{
    use Queueable, SerializesModels;

    public $mailData = null;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(MailData $mailData)
    {
        $this->mailData = $mailData;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {

        return $this->to($this->mailData->messageTo)
            ->from('donateABLE@donateABLE.ca', 'donateABLE')
            ->subject($this->mailData->subject())
            ->markdown('mail.contactMessage');
    }
}
