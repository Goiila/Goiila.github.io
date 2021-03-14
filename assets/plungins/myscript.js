$(document).ready(function () {
    go2Home();
});

$(".go2home").click(function () {
    go2Home();
});

function go2Home() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#home").offset().top
    }, 1000);
}

$(".go2aboutme").click(function () {
    go2aboutme();
});

$('#btnaboutme').click(function () {
    go2aboutme();
});

function go2aboutme() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#aboutme").offset().top - 50
    }, 1000);
}

$(".go2skill").click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#skill").offset().top - 50
    }, 1000);
});

$(".go2timeline").click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#timeline").offset().top - 50
    }, 1000);
});

$(".go2contact").click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#contact").offset().top - 50
    }, 1000);
});

$(".knob").knob({
    'dynamicDraw': true,
    'thickness': 0.2,
    'tickColorizeValues': true,
    'skin': 'tron'
});  

$('#message').keypress(function (e) {
    var key = e.which;
    if (key == 13) { // the enter key code
        $('#send_message').click();
        return false;
    }
});

//$('#send_message').click(function () {
//    if (form1.valid()) {
//        Email.send({
//            SecureToken: "e8857358-bd23-4842-b36b-550141dbadb2",
//            To: 'yossapontoo@gmail.com',
//            From: $('#email').val(),
//            Subject: "Message from Goiila.Github.io from :: " + $('#name').val(),
//            Body: $('#message').val(),
//        }).then(
//            message => alert(message)
//        );
//    }
//});

//var form1 = $('#form_contact');
//var error1 = $('.alert-danger', form1);
//var success1 = $('.alert-success', form1);

//form1.validate({
//    errorElement: 'span', //default input error message container
//    errorClass: 'help-block help-block-error', // default input error message class
//    focusInvalid: false, // do not focus the last invalid input
//    ignore: "",  // validate all fields including form hidden input
//    messages: {
//        select_multi: {
//            maxlength: jQuery.validator.format("Max {0} items allowed for selection"),
//            minlength: jQuery.validator.format("At least {0} items must be selected")
//        },
//        name: {
//            minlength: "Please enter at least 2 word.",
//            required: "Please enter this field.",
//        },
//        email: {
//            required: "Please enter this field.",
//            email: "Please enter correct format email."
//        },
//        message: {
//            minlength: "Please enter at least 5 word.",
//            required: "Please enter this field.",
//        },
//    },
//    rules: {
//        name: {
//            minlength: 2,
//            required: true
//        },
//        email: {
//            required: true,
//            email: true
//        },
//        message: {
//            minlength: 5,
//            required: true
//        },
//    },

//    invalidHandler: function (event, validator) { //display error alert on form submit              
//        success1.hide();
//        error1.show();
//        //App.scrollTo(error1, -200);
//    },

//    highlight: function (element) { // hightlight error inputs
//        $(element)
//            .closest('.form-group').addClass('has-error'); // set error class to the control group
//    },

//    unhighlight: function (element) { // revert the change done by hightlight
//        $(element)
//            .closest('.form-group').removeClass('has-error'); // set error class to the control group
//    },

//    success: function (label) {
//        label
//            .closest('.form-group').removeClass('has-error'); // set success class to the control group
//    },

//    submitHandler: function (form) {
//        success1.show();
//        error1.hide();
//    }
//});