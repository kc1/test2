$(document).ready(function(){ http://stackoverflow.com/questions/23062948/integrating-custom-function-and-rule-using-jquery-validator-plugin
    
    function isSubStringPresent(str){
    for(var i = 1; i < arguments.length; i++){
        if(str.indexOf(arguments[i]) > -1){
            return true;
        }
    }    
    return false;
}    
    
    
//    var excludes = ['myemail', 'gmail', 'yahoo'];
    var excludes = ['craigslist'];
$.validator.addMethod(
    "wrong_domain",
    function(value, element) { 
        // take a shallow copy of excludes
        var myArguments = excludes.slice(0);
        // add value to the front of the arguments
        myArguments.unshift(value);
        // use myArguments as the arguments array for isSubStringPresent
        return !isSubStringPresent.apply(this, myArguments);
    },
    'Please enter your personal email address' );
                    
//    $.validator.classRuleSettings.wrong_domain = { wrong_domain: true };


		$('#registration-form').validate({
	    rules: {
	       FirstName: {
	        required: true,
	      },
              LastName: {
	        required: true,
	      },
              Email: {
	        required: true,
	        email: true,
                wrong_domain: true
	      },
              Phone: {
	         required: true,
                 phoneUS: true
	      },
              Fax: {
	        phoneUS: true
	      },
              Street: {
	        required: true,
	      },
              City: {
	        required: true,
	      },
              State: {
	        required: true,
	      },
              Zip: {
	        zipcodeUS: true,
	      },
              Rent: {
	        number: true,
	      },
              Bedrooms: {
	        number: true,
	      },
              Baths: {
	        number: true,
	      },
		  
//              Comments: {
//	        required: true,
//	       minlength: 6
//	      },
		  
//		 username: {
//	        minlength: 6,
//	        required: true
//	      },
//		  
//		  password: {
//				required: true,
//				minlength: 6
//			},
//			confirm_password: {
//				required: true,
//				minlength: 6,
//				equalTo: "#password"
//			},
//		  
//	      email: {
//	        required: true,
//	        email: true
//	      },
//		  
//	     
//		   address: {
//	      	minlength: 10,
//	        required: true
//	      },
//		  
//		  agree: "required"
		  
	    },
			highlight: function(element) {
				$(element).closest('.control-group').removeClass('success').addClass('error');
			},
			success: function(element) {
				element
				.text('OK!').addClass('valid')
				.closest('.control-group').removeClass('error').addClass('success');
			}
	  });

}); // end document.ready