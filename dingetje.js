
 var $form = $('form#test-form'),
     url = 'https://script.google.com/macros/s/AKfycbwu9aC8Z65EbuJXtyEmfTMwQksEwsYHMEOnQquXHV2kxECsIV2pjcv7Fy9Y55uErmN0/exec'
 
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