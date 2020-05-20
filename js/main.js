/* ========================================================================= */
/*	Preloader
/* ========================================================================= */

jQuery(window).load(() => {
  $(".preloader").fadeOut("slow");
});
// $(document).ready(function () {

function showOverlay() {
  $(".overlay").show();
}

setTimeout(showOverlay, 2000);

// })
function removeOverlay() {
  $(".overlay").remove();
}
setTimeout(removeOverlay, 10000);

/* ========================================================================= */
/*  Welcome Section Slider
/* ========================================================================= */

$(function () {
  var Page = (function () {
    // var $navArrows = $('#nav-arrows'),
    //     $nav = $('#nav-dots > span'),
    (slitslider = $("#slider").slitslider({
      onBeforeChange: function (slide, pos) {
        // $nav.removeClass('nav-dot-current');
        // $nav.eq(pos).addClass('nav-dot-current');
      }
    })),
    (init = function () {
      initEvents();
    }),
    (initEvents = function () {
      // add navigation events
    });

    return {
      init: init
    };
  })();

  Page.init();
});

// $(document).ready(function () {

/* ========================================================================= */
/*	Menu item highlighting
/*====changed by M======== ========================================================================= */

jQuery("#nav").singlePageNav({
  offset: jQuery(".navbar-default .container").outerHeight(),
  filter: ":not(.external)",
  speed: 2000,
  currentClass: "current",
  easing: "easeInOutExpo"
});

$(window).scroll(function () {
  if ($(window).scrollTop() > 400) {
    $("#navigation").removeClass("animated-header");
  } else {
    $("#navigation").addClass("animated-header");
  }
});


// const menuBtn = document.querySelector('.menu-btn');
// let menuOpen = false;
// menuBtn.addEventListener('click', () => {
//   if (!menuOpen) {
//     menuBtn.classList.add('open')
//     menuOpen = true;
//   } else {
//     menuBtn.classList.remove('open');
//     menuOpen = false;
//   }
// });
$(".navbar-collapse a").click(function () {
  $(".navbar-collapse").collapse("hide");

  function slideFix() {}

  slideFix();
});
/*===
=== === === === === === === === === === === === === === === === === === === === === === === = * /
/*	Fix Slider Height
/* ========================================================================= */

// Slider Height
var slideHeight = $(window).height();
var headerHeight = $("#navigation").innerHeight();
var fixHeight = slideHeight - headerHeight;

$("#home-slider, #slider, .sl-slider, .sl-content-wrapper").css(
  "height",
  slideHeight
);

$(".site-content").css("padding-top", headerHeight);

$(window).resize(function () {
  "use strict",
  $("#home-slider, #slider, .sl-slider, .sl-content-wrapper").css(
    "height",
    slideHeight
  );
  $(".site-content").css("padding-top", headerHeight);
});

/* ==========================================
For small screens to scroll to # properly.
=========================================*/
/* jQuery(document).ready(function($) {
function belowMastheadArrow() {
   var $body           = $('body');
   var $bodyHeight     = $body.outerHeight();
   var $adminbarHeight = $('#navigation).outerHeight();
   var $navbarHeight   = $('.navbar').outerHeight();
 
   var scrollSpyLinks = $('.nav-navbar-nav> li > a[href^="#"]');
   if ($(window).width() <= 979) {
      scrollSpyLinks.off('click'); 
      scrollSpyLinks.click(function(e) {
         e.preventDefault();
         var $contentBand = $(this).attr('href');
         $('html, body').animate({
            scrollTop: $($contentBand).offset().top + 1
         }, 850, 'easeInOutExpo');
      });
   } else {
      scrollSpyLinks.off('click'); 
      scrollSpyLinks.click(function(e) {
         e.preventDefault();
         var $contentBand = $(this).attr('href');
         $('html, body').animate({
            scrollTop: $($contentBand).offset().top - $adminbarHeight - $navbarHeight + 1
         }, 850, 'easeInOutExpo');
      });
   }
    
 
 
belowMastheadArrow();
 
$(window).resize(belowMastheadArrow);
});
*/
$("#works, #testimonial").owlCarousel({
  navigation: true,
  pagination: false,
  slideSpeed: 700,
  paginationSpeed: 400,
  singleItem: true,
  navigationText: [
    "<i class='fa fa-angle-left fa-lg'></i>",
    "<i class='fa fa-angle-right fa-lg'></i>"
  ]
});
/* ========================================================================= */
/*	Featured Project Lightbox
/* ========================================================================= */

$(".fancybox").fancybox({
  padding: 0,

  openEffect: "elastic",
  openSpeed: 650,

  closeEffect: "elastic",
  closeSpeed: 550,

  closeClick: true,

  beforeShow: function () {
    this.title = $(this.element).attr("title");
    this.title =
      "<h3>" +
      this.title +
      "</h3>" +
      "<p>" +
      $(this.element)
      .parents(".portfolio-item")
      .find("img")
      .attr("alt") +
      "</p>";
  },

  helpers: {
    title: {
      type: "inside"
    },
    overlay: {
      css: {
        background: "rgba(0,0,0,0.8)"
      }
    }
  }
});

// });

var wow = new WOW({
  offset: 75, // distance to the element when triggering the animation (default is 0)
  mobile: false // trigger animations on mobile devices (default is true)
});
wow.init();

/*Contact Form*/

/*End Contact Form*/