

// Variable to hold request
var request;


// Bind to the submit event of our form
$("#foo").submit(function(event){

    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(this);

    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");

    // Serialize the data in the form
    var serializedData = $form.serialize();

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // Fire off the request to /form.php
    request = $.ajax({
        url: "https://script.google.com/macros/s/AKfycbzE5lbx0tPNMzmlZbDAeFBHBAFw9Mn_C2Kz1b20SJ4zQzk5bxv3/exec",
        type: "post",
        data: serializedData
    });


    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR, myWindow){
        //alert("Alert showing after AJAX call successfully");
        //var myWindow = window.open("file2.html");
       window.open("Thanks.html", "_self");
        
        
        // Log a message to the console
        console.log("Hooray, it worked!");
        console.log(serializedData) 
        console.log(response);
        console.log(textStatus);
        console.log(jqXHR);
    });

    

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });

    // Prevent default posting of form
 event.preventDefault();


})
;


