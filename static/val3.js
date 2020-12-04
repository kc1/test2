    $('form').validate({
        rules: {
            FirstName: {
                minlength: 3,
                maxlength: 15,
                required: true
            },
            LastName: {
                minlength: 3,
                maxlength: 15,
                required: true
            },
            Email: {
              required: true,
              email: true
            },
             Phone: {
                 required: true,
                 phoneUS: true
              },
              //Fax: {
              //  phoneUS: true
              //},
                Street: {
                required: true
              },
                  City: {
                required: true
              },
                  State: {
                required: true
              },
                  Zip: {
                zipcodeUS: true
              }
        },
        highlight: function(element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'span',
        errorClass: 'help-block',
        errorPlacement: function(error, element) {
            if(element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });

    //callback handler for form submit



    $("#form").on('submit', function(event)
    {

        event.preventDefault(); //STOP default action
        //event.unbind(); //unbind. to stop multiple form submit.
        console.log($("#form").valid())  // sanity check
        //if ($("#form_id").valid()){console.log("VALID");}

        if ($("#form").valid()) {

            console.log("form submitted!")  // sanity check

            var postData = $(this).serializeArray();
            var formURL = $(this).attr("action");
            $.ajax(
            {
                url : formURL,
                type: "POST",
                data : postData,
                success:function(data, textStatus, jqXHR)
                {
                    console.log("in success!")
                    $('#thanksModal').modal('show');
                },
                error: function(jqXHR, textStatus, errorThrown)
                {
                    //if fails
                }
            });

        } else {

            console.log("form NOT submitted!")  // sanity check

        }


    });






    //if (typeof jqXhr.success != 'undefined') {
    //$('#thanksModal').modal('show');
    //}
    // else {
    //    $('#my-form').html(jqXhr);
    //}

    // AJAX for posting
    //function post() {
    //    console.log("create post is working!") // sanity check
    //    $.ajax({
    //    url : "create_post/", // the endpoint
    //    type : "POST", // http method
    //    data : { the_post : $('#post-text').val() }, // data sent with the post request
    //    // handle a successful response
    //    success : function(json) {
    //    $('#post-text').val(''); // remove the value from the input
    //    console.log(json); // log the returned json to the console
    //    $("#talk").prepend("<li><strong>"+json.text+"</strong> - <em> "+json.author+"</em> - <span> "+json.created+
    //    "</span> - <a id='delete-post-"+json.postpk+"'>delete me</a></li>");
    //    console.log("success"); // another sanity check
    //    },
    //    // handle a non-successful response
    //    error : function(xhr,errmsg,err) {
    //    $('#results').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: "+errmsg+
    //    " <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
    //    console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
    //    }
    //    });
    //};
