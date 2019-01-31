<!-- Contact Us Modal -->
<div class="modal fade" id="contactUsModal" tabindex="-1" role="dialog" aria-labelledby="contactUsModalTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" id="howitworksdialog" role="document">
    <div class="modal-content howitworks" id="howitworkscontent">
      <div class="modal-header align">
          <div class="align-img">
            <img src="{{asset('img/logo/donateABLE-long-white-500.png')}}" style="width:400px;height: auto;"/>
            <div class="site-callout" id="FormHeader">

                <h1 class="modal-h1" style="margin-top:0">Thank you for visiting</h1>
                <h2 class="modal-h2" style="margin-bottom:0">We'd love to hear from you</h2>

            </div>
        </div>
            <button style="align-self: flex-start;"type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span class="modal-x" aria-hidden="true">X</span>
            </button>
      </div>
      <div class="modal-body" id="FormContainer">

          <div class="step-container">
              <div class="step" style="width:100%;">
                  <img src="{{asset('img/contactus/Contact-Us-Join-the-Program.png')}}" style="align-self: flex-start;padding-left:22px"/>
                  <p class="modal-p">Are you a local, Guelph and Wellington County, non-profit charity that would like to be featured on donateABLE? Simply fill out the form below and a member of our team will be in touch with the next steps.</p>
                          @include('forms.joinProgramForm')
              </div>
              <div class="step" style="width:10px;background-color:white"></div>
              <div class="step" style="width:100%;">
                  <img src="{{asset('img/contactus/Contact-Us-Technical-Support.png')}}" style="align-self: flex-start;padding-left:22px"/>
                  <p class="modal-p">If  you  are  having  any  problems  with  the  site  functionality  or  have  a  technical  question please fill out the form below to submit a ticket. A member of our team will get back to you within 48 business hours.</p>
                          @include('forms.technicalSupportForm')
              </div>
          </div>
      </div>

    </div>
  </div>
</div>
