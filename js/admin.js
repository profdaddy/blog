$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("OMykm4qc3kgdhZO1oqYdRcyk0ZXtlNb2A7R4KaBA", "jI3bhTf8rEuZXTc3ckifmaxzUJQSmvnGWNpE1nYE");
    
    $('.form-signin').on('submit', function(e) {
    	// prevent default submit
    	e.preventDefault();
    	
    	// get daya from form 
    	var data = $(this).serializeArray(),
    		username = data[0].value,
    		password = data[1].value;
    		
    	// call parse login
    	Parse.User.logIn(username, password, {
    		//if username and password match
    		success: function(user) {
    			alert('Welcome!');
    		},
    		// if error
    		error: function(user, error) {
    			console.log(error);
    		}
    	});
    });
    
});