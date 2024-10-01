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
});
