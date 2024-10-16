
"use strict";



// Prealoder
 function prealoader () {
   if ($('#loader').length) {
     $('#loader').fadeOut(); // will first fade out the loading animation
     $('#loader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
     $('body').delay(350).css({'overflow':'visible'});
  };
 }


// Page Animation js 
function pageSmoother () {
  if($(".smooth-load").length) {
        $(".smooth-load").animsition({
        inClass: 'fade-in-down',
        outClass: 'fade-out-down',
        inDuration: 1500,
        outDuration: 800,
        linkElement: '[href=".html"]',
        // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
        loading: true,
        loadingParentElement: '.smooth-load', //animsition wrapper element
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
        overlay : false,
        overlayClass : 'animsition-overlay-slide',
        overlayParentElement : '.smooth-load',
        transition: function(url){ window.location.href = url; }
      });
  }
}



// placeholder remove
function removePlaceholder () {
  if ($("input,textarea").length) {
    $("input,textarea").each(
            function(){
                $(this).data('holder',$(this).attr('placeholder'));
                $(this).on('focusin', function() {
                    $(this).attr('placeholder','');
                });
                $(this).on('focusout', function() {
                    $(this).attr('placeholder',$(this).data('holder'));
                });
                
        });
  }
}


// Home Page main Slider 
function homemainSliderOne () {
  if($('#myCarousel-one').length) {
    $('#myCarousel-one').carousel({
        interval: 5000 //changes the speed
    })
  }
}


// Home Page main Slider 
function homemainSliderTwo () {
  if($('#myCarousel-two').length) {
    $('#myCarousel-two').carousel({
        interval: 7000 //changes the speed
    })
  }
}

//Add OnepageNav / Sidebar
  function onePageFixedNav() {
    if($('body').length){
      // Add scrollspy to 
      $('body').scrollspy({target: ".one-page-click", offset: 0});   

      // Add smooth scrolling on all links inside the one-page-menu
      $(".one-page-click a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        }  // End if
      });
    }
  }


// Work Page Carousel 
function workCarousel () {
  if($('.work-Carousel').length) {
    $('.work-Carousel').carousel({
        interval: 77000 //changes the speed
    })

    $('.carousel-control.left').click(function() {
      $('.work-Carousel').carousel('prev');
    });

    $('.carousel-control.right').click(function() {
      $('.work-Carousel').carousel('next');
    });
  }
}

// Inner page Banner 
function innerMainBanner () {
  if($(".inner-page-slider").length) {
    $('.inner-page-slider').owlCarousel({
        animateOut: 'slideOutLeft',
        loop:true,
        nav:false,
        navText:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:7000,
        autoplaySpeed:5500,
        lazyLoad:true,
        items:1,
    })
  }
}

// Work Slider 
function workSlider () {
  if($(".single-work-slider").length) {
    $('.single-work-slider').owlCarousel({
        animateOut: 'slideOutLeft',
        loop:true,
        nav:true,
        navText:false,
        dots:false,
        autoplay:false,
        lazyLoad:true,
        items:1,
    })
  }
}

// Masonary Gallery 
function masonaryGallery () {
  if($(".image-gallery-wrapper").length) {
    $('.image-gallery-wrapper').masonry({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.grid-item',
    // use element for option
    columnWidth: '.grid-sizer',
    percentPosition: true
  })
  }
}

// Work details tab
function workTab () {
  if($('.work-show-toggle').length) {
    $(".work-show-toggle").on('click', function(){
      $(this).toggleClass("close-button");
      $(this).parent('.item').children('.work-details-tab').toggleClass("show");
    });
  }
}




// Scroll to top
function scrollToTop () {
  if ($('.scroll-top').length) {

    //Check to see if the window is top if not then display button
    $(window).on('scroll', function (){
      if ($(this).scrollTop() > 200) {
        $('.scroll-top').fadeIn();
      } else {
        $('.scroll-top').fadeOut();
      }
    });
    
    //Click event to scroll to top
    $('.scroll-top').on('click', function() {
      $('body,html').animate({scrollTop : 0},1500);
      return false;
    });
  }
}



//Contact Form Validation
function contactFormValidation () {
  if($('.form-validation').length){
    $('.form-validation').validate({ // initialize the plugin
      rules: {
        name: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        website: {
          required: true
        },
        message: {
          required: true
        }
      },
      submitHandler: function(form) {
                $(form).ajaxSubmit({
                    success: function() {
                        $('.form-validation :input').attr('disabled', 'disabled');
                        $('.form-validation').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#alert_success').fadeIn();
                        });
                    },
                    error: function() {
                        $('.form-validation').fadeTo( "slow", 1, function() {
                            $('#alert_error').fadeIn();
                        });
                    }
                });
            }
        });
  }
}

// Close suddess Alret
function closeSuccessAlert () {
  if($('.closeAlert').length) {
    $(".closeAlert").on('click', function(){
      $(".alert_wrapper").fadeOut();
    });
    $(".closeAlert").on('click', function(){
      $(".alert_wrapper").fadeOut();
    })
  }
}


// toggle menu for mobile
function mobileDropdown () {
  if($('.main-menu').length) {
    $('.main-menu nav ul li.dropdown-holder').append(function () {
      return '<i class="fa fa-bars" aria-hidden="true"></i>';
    });
    $('.main-menu nav ul li.dropdown-holder .fa').on('click', function () {
      $(this).parent('li').children('ul').slideToggle();
    }); 
  }
}



// Sticky header
function stickyHeader () {
  if ($('.one-page-menu').length) {
    var sticky = $('.theme-main-header'),
        scroll = $(window).scrollTop();

    if (scroll >= 190) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
    
  };
}



// Blog details
function blogSlider () {
  if($('.blog-details-slider').length) {
    $('.blog-details-slider').owlCarousel({
        loop:true,
        nav:true,
        navText:false,
        dots:false,
        autoplay:false,
        autoplayTimeout:4000,
        autoplaySpeed:1500,
        lazyLoad:true,
        items:1,
    })
  }
}



// Read Next Blog SLider 
function nextBlog () {
  if($('.read-next-sldierOne').length) {
    $('.read-next-sldierOne').owlCarousel({
        loop:true,
        nav:true,
        navText:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplaySpeed:900,
        lazyLoad:true,
        singleItem:true,
        responsive:{
            0:{
                items:1
            },
            530:{
                items:2
            }
        }
    })
  }
}


// Read Next Blog SLider 
function nextBlogTwo () {
  if($('.read-next-sldierTwo').length) {
    $('.read-next-sldierTwo').owlCarousel({
        loop:true,
        nav:true,
        navText:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplaySpeed:900,
        lazyLoad:true,
        singleItem:true,
        responsive:{
            0:{
                items:1
            },
            550:{
                items:2
            },
            992:{
                items:3
            }
        }
    })
  }
}


// DOM ready function
jQuery(document).on('ready', function() {
	(function ($) {
     pageSmoother ();
	   removePlaceholder ();
     homemainSliderOne ();
     homemainSliderTwo ();
     onePageFixedNav();
     innerMainBanner ();
     workCarousel ();
     workSlider ();
     workTab ();
     scrollToTop ();
     contactFormValidation ();
     closeSuccessAlert ();
     mobileDropdown ();
     blogSlider ();
     nextBlog ();
     nextBlogTwo ();
  })(jQuery);
});



// Window load function
jQuery(window).on('load', function () {
   (function ($) {
      masonaryGallery ();
      prealoader ();
  })(jQuery);
 });


// Window scroll function
jQuery(window).on('scroll', function () {
  (function ($) {
    stickyHeader ()
  })(jQuery);
});