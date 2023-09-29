// Loading Page
$(document).ready(function() {
  setTimeout(function(){
    $('body').addClass('loaded');
  }, 3000);
});

// Scroll To Top
$(document).ready(function(){
 $(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
   $('.scrollup').fadeIn();
  } else {
   $('.scrollup').fadeOut();
  }
 });
 $('.scrollup').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 600); return false;
 });
});

// Drop Menu
$(document).ready(function() {
  $( 'header .list1 ul li' ).hover(
    function(){ $(this).children('header .list1 ul li ul').slideDown(200); },
    function(){ $(this).children('header .list1 ul li ul').slideUp(200); }
  );
});

// Drop
function DropDown(el) {
  this.dd = el;
  this.initEvents();
}
DropDown.prototype = {
 initEvents : function() {
  var obj = this;
  obj.dd.on('click', function(event){
   $(this).toggleClass('active');
   event.stopPropagation();
  }); 
 }
}
$(function() {
 var dd = new DropDown( $('#dd') );
  $(document).click(function() {
   // all dropdowns
   $('.wrapper-dropdown-5').removeClass('active');
 });
});
$(function() {
 var dd = new DropDown( $('#ddd') );
  $(document).click(function() {
   // all dropdowns
   $('.wrapper-dropdown-6').removeClass('active');
 });
});

// Slider
$(document).ready(function() {
  $("#owl-demo").owlCarousel({
    items : 1,
    autoPlay: 3000,
    lazyLoad : true,
    navigation : false
  }); 
});

// Zoom
$(document).ready(function(){
  $("#ourworks .portfolio-item .mask span.view a").prettyPhoto({animation_speed:'normal',theme:'facebook',slideshow:0, autoplay_slideshow: false});
  $("#ourworks-inside .portfolio-item .mask span.view a").prettyPhoto({animation_speed:'normal',theme:'facebook',slideshow:0, autoplay_slideshow: false});
});

//Portfolio
  var $container = $('.workscontent');
  $container.isotope({
    filter: '*',
    animationOptions: {
      duration: 750,
      easing: 'linear',
      queue: false,
    }
  });
  $('.workstitle ul a').click(function(){
    var selector = $(this).attr('data-filter');
    $container.isotope({
      filter: selector,
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false,
      }
    });
    return false;
  });
  var $optionSets = $('.workstitle ul'),
         $optionLinks = $optionSets.find('a');
   
         $optionLinks.click(function(){
            var $this = $(this);
      // don't proceed if already selected
      if ( $this.hasClass('selected') ) {
          return false;
      }
     var $optionSet = $this.parents('.workstitle ul');
     $optionSet.find('.selected').removeClass('selected');
     $this.addClass('selected'); 
});