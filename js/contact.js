$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
   // $(function() {
     //   $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 3
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 10
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 15
                }
            },
            messages: {
                name: {
                    required: "Please enter your Name",
                    minlength: "your name must consist of at least 3 characters"
                },
                subject: {
                    required: "come on, you have a subject, don't you?",
                    minlength: "your subject must consist of at least 4 characters"
                },
                number: {
                    required: "Please enter your Mobile number",
                    minlength: "Please enter your Mobile number"
                },
                email: {
                    required: "no email, no message"
                },
                message: {
                    required: "Please Enter Your Address",
                    minlength: "thats all?"
                }
            },
            
        })
    })
        
 })(jQuery)
})