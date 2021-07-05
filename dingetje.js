
 var $form = $('form#test-form'),
     url = 'https://script.google.com/macros/s/AKfycbzTwAfXTI5OuiZ-p5z5Q1QzTquK19VXFvtbdgYNH1nX6lctUgdBQLuRN-rGH_FTBsGBLw/exec'
 
 $('#submit-form').on('click', function(e) {
   e.preventDefault();
   var jqxhr = $.ajax({
     url: url,
     method: "GET",
     dataType: "json",
     data: $form.serializeObject()
   }).success(
     // do something
   );
 })