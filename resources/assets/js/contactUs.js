$(document).ready(function() {
  console.log("Contact Us Script Loaded");
  // $('form[name=joinProgramForm]').submit(function(e)
  function sendJoinProgramForm() {
    // e.preventDefault();
    $.ajax({
      type: "POST",
      cache: false,
      url: "/form/joinProgramForm",

      data: $(this).serialize(),
      success: function(msg) {
        $("#FormContainer").html(
          '<h1 class="modal-h1">Thank you for submitting.</h1><h2 class="modal-h2">We will be in touch with you as soon as possible.</h2>'
        );
        $("#FormHeader").html("");
      },
      error: function(msg) {
        $("#FormContainer").html(
          '<h1 class="modal-h1">An error has occurred.</h1><h2 class="modal-h2">Please try again later or email us directly at <a href="mailto:support@donateable.ca">support@donateable.ca</a>.</h2>'
        );
        $("#FormHeader").html("");
      }
    });
    // });
  }

  function sendTechnicalSupportForm() {
    // $("form[name=technicalSupportForm]").submit(function(e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      cache: false,
      url: "/form/technicalSupportForm",
      data: $(this).serialize(),
      success: function(msg) {
        $("#FormContainer").html(
          '<h1 class="modal-h1">Thank you for submitting.</h1><h2 class="modal-h2">We will be in touch with you as soon as possible.</h2>'
        );
        $("#FormHeader").html("");
      },
      error: function(msg) {
        $("#FormContainer").html(
          '<h1 class="modal-h1">An error has occurred.</h1><h2 class="modal-h2">Please try again later or email us directly at <a href="mailto:support@donateable.ca">support@donateable.ca</a>.</h2>'
        );
        $("#FormHeader").html("");
      }
    });
    // });
  }

  // function sendTechnicalSupportForm(e) {

  // const response = await fetch(' {{route(\'TechnicalSupport\') }}', {
  //     method: 'post',
  // })
  // }
});
