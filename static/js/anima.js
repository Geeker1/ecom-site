$(document).ready(function() {
    // Check if element is scrolled into view
    $('.scroll-animations .animated').addClass('ntseen');
    $('.scroll-animas .animated').addClass('ntseen');
    $('.scroll-anime .animated').addClass('ntseen');
    $('.scrollinus .animated').addClass('ntseen');
    $('.navbar-nav .nav-item').hover(
      function(){
        $(this).addClass('rubberBand');
      },
      function(){
        $(this).removeClass('rubberBand');
      }
    );

    function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
  
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();
  
      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    // If element is scrolled into view, flip it in
    $(window).scroll(function() {
      $('.scroll-animations .animated').each(function() {
        if (isScrolledIntoView(this) === true) {
          $(this).removeClass('ntseen');
          $(this).addClass('flipInY');
        }
      });
      $('.scroll-animas .animated').each(function() {
        if (isScrolledIntoView(this) === true) {
          $(this).removeClass('ntseen');
          $(this).addClass('zoomIn');
        }
      });
      $('.scroll-anime .animated').each(function() {
        if (isScrolledIntoView(this) === true) {
          $(this).removeClass('ntseen');
          $(this).addClass('zoomInUp');
        }
      });
      $('.scrollinus .animated').each(function() {
        if (isScrolledIntoView(this) === true) {
          $(this).removeClass('ntseen');
          $(this).addClass('fadeInRight');
        }
      });
    });
    
  });



