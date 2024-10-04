document.addEventListener("DOMContentLoaded", function (){
	let bannerTabsTitle = ['Кирпич','Утепление', 'Тротуарная плитка', 'Все для камина', 'Кровля'];

    new Swiper('#bannerTabsContent', {
        allowTouchMove: false,
		speed: 800,
        effect: "fade",
        loop: true,
        mousewheel: {
            forceToAxis: true,
        },
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 14700,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.banner-slider-next',
            prevEl: '.banner-slider-prev',
        },
        pagination: {
            el: ".tabs-pagination",
            modifierClass: 'tabs-pagination-bullets',
            bulletClass: 'tabs-pagination-bullet',
            bulletActiveClass: 'active',
            clickable: true,
            renderBullet: function (index, className) {
                return '<li class="' + className + '">' + (bannerTabsTitle[index]) + '</li>';
            },
        },
        on: {
            slideChange: () => {
                $('.timer-band').removeClass('active');
                setTimeout(() => {
                    $('.timer-band').addClass('active');
                }, 50);
            },
        },
    });

	new Swiper('.popular-slider', {
		slidesPerView: 1,
		spaceBetween: 20,
		speed: 1000,
		pagination: {
        	el: ".popular-pagination",
			clickable: true,
      	},
		navigation: {
            nextEl: '.popular-slider-next',
            prevEl: '.popular-slider-prev',
        },
		autoplay: {
        	delay: 4500,
        	disableOnInteraction: true,
     	 },
		 breakpoints: {
			424: {
			slidesPerView: 1.2,
			spaceBetween: 20,
			},
			574: {
			slidesPerView: 1.5,
			spaceBetween: 20,
			},
			640:{
				slidesPerView: 2,
			},
			768: {
			slidesPerView: 2.5,
			spaceBetween: 20,
			},
			992: {
			slidesPerView: 3,
			spaceBetween: 20,
			},
			1200: {
			slidesPerView: 2.5,
			spaceBetween: 20,
			},
			1365: {
			slidesPerView: 2.8,
			spaceBetween: 20,
			},
			1440:{
				slidesPerView: 3,
				spaceBetween: 20,
			}
		},
		
	});

	new Swiper('.novelty-slider',{
		slidesPerView: 1,
		spaceBetween: 10,
		speed: 600,
		navigation: {
            nextEl: '.novelty-slider-next',
            prevEl: '.novelty-slider-prev',
        },
		breakpoints: {
			768: {
			slidesPerView: 1.2,
			spaceBetween: 20,
			},
			992: {
			slidesPerView: 1.5,
			spaceBetween: 20,
			},
			1199:{
				slidesPerView: 1.8,
			    spaceBetween: 20,
			},
			1280:{
				slidesPerView: 2,
			    spaceBetween: 20,
			}
		}
	});

	new Swiper('.clients-slider',{
		slidesPerView: 'auto',
		spaceBetween: 10,
		speed: 600,
		navigation: {
            nextEl: '.clients-slider-next',
            prevEl: '.clients-slider-prev',
        },
		breakpoints: {
			600:{
				spaceBetween: 20,
			},
			1365:{
				slidesPerView: 6,
			    
			}
		}
	});
	new Swiper('.objects-swiper',{
		slidesPerView: 1,
		spaceBetween: 10,
		speed: 600,
		navigation: {
            nextEl: '.objects-slider-next',
            prevEl: '.objects-slider-prev',
        },
		breakpoints: {
			768: {
			slidesPerView: 1.8,
			spaceBetween: 20,
			},
			992: {
			slidesPerView: 2,
			spaceBetween: 20,
			},
			1199:{
				slidesPerView: 2.5,
			    spaceBetween: 20,
			},
			1280:{
				slidesPerView: 3,
			    spaceBetween: 20,
			}
		}
	});
		new Swiper('.showroom-slider',{
		slidesPerView: 1,
		spaceBetween: 10,
		speed: 600,
		loop: true,
		navigation: {
            nextEl: '.contacts-slider-next',
            prevEl: '.contacts-slider-prev',
        },
		breakpoints: {
			574: {
			slidesPerView: 'auto',
			spaceBetween: 20,
			},
			
			1199:{
				slidesPerView:3,
			    spaceBetween: 20,
			}
		}
	});
    
	
	/* SINGLE PRODUCT SLIDER THUMB*/
	var productSliderThumb = new Swiper(".product-slider-thumb", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
   
	var productSlider = new Swiper(".product-slider", {
      spaceBetween: 10,
	  speed:600,
      navigation: {
        nextEl: ".product-button-next",
        prevEl: ".product-button-prev",
      },
      thumbs: {
        swiper: productSliderThumb,
      },
    });

	/* SINGLE OBJECT SLIDER THUMB*/
	var objectSliderThumb = new Swiper(".object-slider-thumb", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var singleObjectSlider = new Swiper(".single-object-slider", {
      spaceBetween: 10,
	  speed:600,
      navigation: {
        nextEl: ".single-object-next",
        prevEl: ".single-object-prev",
      },
      thumbs: {
        swiper: objectSliderThumb,
      },
    });
});
