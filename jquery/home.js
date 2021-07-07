// $('body').css('padding-top', $('.navbar').outerHeight() + 'px')
// // detect scroll top or down
// if ($('.hide-on-scroll').length > 0) { // check if element exists
//     var last_scroll_top = 0;
//     $(window).on('scroll', function() {
//         scroll_top = $(this).scrollTop();
//         if(scroll_top < last_scroll_top) {
//             $('.hide-on-scroll').removeClass('scrolled-down').addClass('scrolled-up');
//         }
//         else {
//             $('.hide-on-scroll').removeClass('scrolled-up').addClass('scrolled-down');
//         }
//         last_scroll_top = scroll_top;
//     });
// }


$(document).ready(function() {
    $(window).scroll(function() {
      if ($(document).scrollTop() > 50) {
        $("nav").addClass("bg-light");
        $("nav").addClass("newnav");
      } else {
        $("nav").removeClass("bg-light");
        $("nav").removeClass("newnav");
      }
    });
  });


  // var particles = Particles.init({
  //   selector: '.background',
  //   maxParticles: 100,
  //   color: ['#ffd900', '#000000', '#DBEDF3'],
  //   connectParticles: true
  // });

var particles = Particles.
init
({
  
// normal options
    selector: '.background',
    maxParticles: 300,
    color: ['#ffd900', '#000000', '#DBEDF3'],
    connectParticles: false 
,
  
// options for breakpoints
  responsive: [
    {
      breakpoint: 768,
      options: {
        maxParticles:50,
        color:  ['#ffd900', '#000000', '#DBEDF3'],
        connectParticles: false,
        speed:10
      }
    }, {
      breakpoint: 425,
      options: {
        maxParticles: 100,
        connectParticles: false
      }
    }, {
      breakpoint: 320,
      options: {
        maxParticles: 0,
        connectParticles: false
 
// disables particles.js
      }
    }
  ]
});