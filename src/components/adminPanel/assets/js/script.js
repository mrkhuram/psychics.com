import $ from 'jquery'
// import WOW from './wow.min.js'
$('document').ready(function(){
	new WOW().init();
    
	function phone(ele){
		var input = document.querySelector(ele);
		if(input!=null){
			window.intlTelInput(input, {
		   preferredCountries: ['gb', 'us'],
		  utilsScript: "assets/js/tel-input/utils.js",
		});
		}
	}
	phone("#phone1")
	phone("#phone2")
	//$('#popup').modal('show')
	
	$('nav .dropdown-menu li').click(function(e){
		e.stopPropagation()
	})
	
	function leftMenu(ele){
		$(ele).toggleClass('open')
		if($(window).width()>=768){
			if($(ele).hasClass('open')){
				leftbarWidth = '-'+$('.leftbar').width();
				rightbarWidth = $('.rightbar').width();
				$('.leftbar').animate({'marginLeft':leftbarWidth});
				$('.rightbar').animate({'width':'100%'});
			}else{
				$('.rightbar').animate({'width':rightbarWidth});
				$('.leftbar').animate({'marginLeft':'0%'});	
			}
		}else{
			$('.rightbar').animate({'width':'100%'});
			if($(ele).hasClass('open')){
				$('.leftbar').animate({'marginLeft':'0%'});
			}else{
				$('.leftbar').animate({'marginLeft':'-100%'});
				
			}
		}
	}
	
	$('.btnLeftBarToggle').click(function(e){
		e.preventDefault();
		leftMenu($(this))
	})
	$('.btnAlert').click(function(){
		$(this).find('.badge').hide()
	})
	
	$('.review_section .owl-carousel').owlCarousel({
		loop:true,
		margin:20,
		responsiveClass:true,
		dots:false,
		nav:true,
		autoplay:true,
		navText : ["<i class='fa  fa-angle-left'></i>","<i class='fa  fa-angle-right'></i>"],
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:1,
			},
			1000:{
				items:3,
			}
		}
	})
})