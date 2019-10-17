"use strict";

$(document).ready(function () {
    console.log("Profile Page Script Loaded");

    $("button[name=EditButton]").click(function (e) {
        e.preventDefault();
        $("input:disabled").each(function () {
            $(this).removeAttr("disabled");
        });
        $("button[name=EditButton]").hide();
        $("button[name=SaveButton]").show();

        $(".field-icon").removeClass("fa-lock");
        $(".field-icon").addClass("fa-lock-open");

        $(".input-group-text").removeClass("disabled");
    });
    //
    // $('button[name=SaveButton]').click(function(e){
    //     e.preventDefault();
    //     $('form[name=UserSettingsForm]').submit();
    // });

    // $('form[name=UserSettingsForm]').submit(function(e){
    //    e.preventDefault();
    //    $.ajax({
    //        type: 'POST',
    //        cache: false,
    //        url: '/account-settings',
    //        data: $(this).serialize(),
    //        dataType: 'json',
    //        success: function(msg) {
    //            console.log("Success: " + msg);
    //
    //        },
    //        error: function(err) {
    //            // $.each(err, function( index, element) {
    //            // });
    //
    //            var res = JSON.parse(err.responseText);
    //
    //            $.each(res.errors, function(index, element) {
    //                   console.log(index + ' ' + element);
    //                   $('#' + index).addClass('is-invalid');
    //            });
    //            // $('#email').addClass('is-invalid');
    //            // $('#emailError').show();
    //            // $('#emailError')
    //        }
    //    });
    //  });
});
