(function($){"use strict";$('#mobile-menu-active').metisMenu();$('#mobile-menu-active .has-dropdown > a').on('click',function(e){e.preventDefault();});
$(".hamburger-menu > a").on("click",
function(e){
    e.preventDefault();$(".slide-bar").toggleClass("show");
    $("body").addClass("on-side");
    $('.body-overlay').addClass('active');
    $(this).addClass('active');
});
$(".close-mobile-menu > a").on("click",
function(e){
    e.preventDefault();$(".slide-bar").removeClass("show");
    $("body").removeClass("on-side");
    $('.body-overlay').removeClass('active');
    $('.hamburger-menu > a').removeClass('active');
});
$('.body-overlay').on('click',
function(){
    $(this).removeClass('active');
    $(".slide-bar").removeClass("show");
    $("body").removeClass("on-side");
    $('.hamburger-menu > a').removeClass('active');
});
$('.info-bar').on('click',function(){$('.extra-info').addClass('info-open');})
$('.close-icon').on('click',function(){$('.extra-info').removeClass('info-open');})
var wind=$(window);
var sticky=$('#sticky-header');
wind.on('scroll',function(){
    var scroll=wind.scrollTop();
    if(scroll<100){
        sticky.removeClass('sticky');
    }
    else{
        sticky.addClass('sticky');
    }});
    
$('.history-wrapper,.about-me-wrapper,.footer-social-icon').on('mouseenter',function(){$(this).addClass('active').parent().siblings().find('.history-wrapper,.about-me-wrapper,.footer-social-icon').removeClass('active');})
function mainSlider(){
    var BasicSlider=$('.slider-active');
    BasicSlider.on('init',function(e,slick){
        var $firstAnimatingElements=$('.single-slider:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);
    }
    );
    BasicSlider.on('beforeChange',function(e,slick,currentSlide,nextSlide){var $animatingElements=$('.single-slider[data-slick-index="'+nextSlide+'"]').find('[data-animation]');doAnimations($animatingElements);});BasicSlider.slick({autoplay:false,autoplaySpeed:10000,dots:false,fade:true,arrows:true,prevArrow:'<button type="button" class="slick-prev"><i class="far fa-angle-double-left"></i></button>',nextArrow:'<button type="button" class="slick-next"><i class="far fa-angle-double-right"></i></button>',responsive:[{breakpoint:1200,settings:{slidesToShow:1,slidesToScroll:1,infinite:true,}},{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1,arrows:false,}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1,arrows:false,}}]});function doAnimations(elements){var animationEndEvents='webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';elements.each(function(){var $this=$(this);var $animationDelay=$this.data('delay');var $animationType='animated '+$this.data('animation');$this.css({'animation-delay':$animationDelay,'-webkit-animation-delay':$animationDelay});$this.addClass($animationType).one(animationEndEvents,function(){$this.removeClass($animationType);});});}}
mainSlider();$('.testimonial-active').slick({dots:false,arrows:true,infinite:true,speed:300,prevArrow:'<button type="button" class="slick-prev"><i class="far fa-long-arrow-left"></i></button>',nextArrow:'<button type="button" class="slick-next"><i class="far fa-long-arrow-right"></i></button>',slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:1200,settings:{slidesToShow:1,slidesToScroll:1,infinite:true,}},{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1,arrows:false,}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1,arrows:false,}}]});$('.testimonial-active-02').slick({dots:true,arrows:false,infinite:true,speed:300,slidesToShow:3,slidesToScroll:2,responsive:[{breakpoint:1200,settings:{slidesToShow:2,slidesToScroll:1,infinite:true,}},{breakpoint:991,settings:{slidesToShow:2,slidesToScroll:1,}},{breakpoint:790,settings:{slidesToShow:1,slidesToScroll:1,}}]});$('.brand-active').slick({dots:false,arrows:false,infinite:true,autoplay:true,speed:300,prevArrow:'<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',nextArrow:'<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',slidesToShow:5,slidesToScroll:1,responsive:[{breakpoint:1200,settings:{slidesToShow:4,slidesToScroll:1,infinite:true,}},{breakpoint:900,settings:{slidesToShow:3,slidesToScroll:1,arrows:false,}},{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:1,arrows:false,}},{breakpoint:467,settings:{slidesToShow:1,slidesToScroll:1,arrows:false,}}]});$('select').niceSelect();$('.counter').counterUp({delay:10,time:1000});$('.popup-video').magnificPopup({type:'iframe'});$('.popup-image').magnificPopup({type:'image',gallery:{enabled:true}});$('#portfolio-grid').imagesLoaded(function(){var $grid=$('#portfolio-grid').isotope({itemSelector:'.grid-item',percentPosition:true,masonry:{columnWidth:1}});$('.portfolio-menu').on('click','button',function(){var filterValue=$(this).attr('data-filter');$grid.isotope({filter:filterValue});});});$('.portfolio-menu button').on('click',function(event){$(this).siblings('.active').removeClass('active');$(this).addClass('active');event.preventDefault();});$("[data-background]").each(function(){$(this).css("background-image","url("+$(this).attr("data-background")+")")})
$.scrollUp({scrollName:'scrollUp',topDistance:'300',topSpeed:300,animation:'fade',animationInSpeed:200,animationOutSpeed:200,scrollText:'<i class="fas fa-angle-up"></i>',activeOverlay:false,});new WOW().init();$('.chart').easyPieChart({barColor:'#ea5822',trackColor:0,lineWidth:8,lineCap:'square',scaleColor:0,scaleLength:0,size:95,animate:{duration:2000,enabled:true,},});$('.chart2').easyPieChart({barColor:'#466fff',trackColor:0,lineWidth:8,lineCap:'square',scaleColor:0,scaleLength:0,size:95,animate:{duration:2000,enabled:true,},});function basicmap(){var mapOptions={zoom:11,scrollwheel:false,center:new google.maps.LatLng(40.6700,-73.9400),styles:[{"featureType":"all","elementType":"geometry.fill","stylers":[{"weight":"2.00"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"color":"#9c9c9c"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#eeeeee"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#7b7b7b"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#c8d7d4"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#070707"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]}]};var mapElement=document.getElementById('contact-map');var map=new google.maps.Map(mapElement,mapOptions);var marker=new google.maps.Marker({position:new google.maps.LatLng(40.6700,-73.9400),map:map,title:'Cryptox'});}
if($('#contact-map').length!=0){google.maps.event.addDomListener(window,'load',basicmap);}
if(typeof($.fn.knob)!='undefined'){$('.knob').each(function(){var $this=$(this),knobVal=$this.attr('data-rel');$this.knob({'draw':function(){$(this.i).val(this.cv+'%')}});$this.appear(function(){$({value:0}).animate({value:knobVal},{duration:2000,easing:'swing',step:function(){$this.val(Math.ceil(this.value)).trigger('change');}});},{accX:0,accY:-150});});}})(jQuery);