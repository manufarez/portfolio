//= require jquery
//= require popper
//= require bootstrap-sprockets
//= require_tree .

// 🔸 Opens the page smoothly //

$(document).ready(function(){
    // to fade in on page load
    $("body").css("display", "none");
    $("body").fadeIn(1000);
})

// 🔸 Submits form without reloading the page //

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

// 🔸 Smooth scroll to id //

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
