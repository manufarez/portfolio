//= require jquery
//= require popper
//= require bootstrap-sprockets
//= require_tree .

// We modified the tree above in order to have it work with Bootstrap 4

// $(function () {
//     $('#simple-contact-form').on('submit',function (e) {

//               $.ajax({
//                 type: 'post',
//                 url: '/#contact',
//                 data: $('#simple-contact-form').serialize(),
//                 success: function () {
//                  alert("Email has been sent!");
//                 }
//               });
//             return false;
//         });
// });

$('#simple-contact-form').submit(function(){
  var dataString = $("#simple-contact-form").serialize();

  $.ajax({
    type: 'POST',
    url: $(this).attr('action'),
    data: $('#simple-contact-form').serialize(),
    dataType: 'json',
    complete: function() {
      $('#emailsent').modal('show');
    }
  });
  return false;
});

// $(document).ready(function() {
//   $("#submit").click(function(e) {
//     e.preventDefault();
//     $('#emailsent').modal('show');
//     setTimeout(function() {
//       $('#simple-contact-form').submit();
//     }, 1000)
//   });
// });

// $("#submit-button").submit(function(e){
//     $('#emailsent').modal('show');
//     return false;
// });

$(document).ready(function(){
    // to fade in on page load
    $("body").css("display", "none");
    $("body").fadeIn(1000);
})
