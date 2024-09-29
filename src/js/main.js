document.addEventListener("DOMContentLoaded", function (){
	/*===============MOBILE MENU ==================*/
	const menuToggle = document.querySelector('#menu-toggle');
	const mobileMenu = document.querySelector('#menu');
	const catalogyBtnMobile = document.getElementById('cat-btn-mob');
	const catalogyBtnDesktop = document.getElementById('cat-btn-desk');
	const catalogyMenu = document.getElementById('cat-menu');
	const catMenuCloseMobile = document.querySelector('#close-cat-menu');
	const bodyEl = document.body;
	
	if (menuToggle) {
		function resetActiveMenu(){
			mobileMenu.classList.remove('active');
			menuToggle.classList.remove('active');
			bodyEl.classList.remove('lock');
		}
		menuToggle.addEventListener('click', ()=> {
			
			if (menuToggle.classList.contains('active')) {
				resetActiveMenu();
			
			} else {
				menuToggle.classList.add('active');
			    mobileMenu.classList.add('active');
				bodyEl.classList.add('lock');
				catalogyMenu.classList.remove('active');
			}
		});
		
		function checkScreenSize() {
			if (window.innerWidth > 1023 ) {
				bodyEl.classList.remove('lock');
				resetActiveMenu();
			}
		}
		// Проверка размера экрана при загрузке страницы
		checkScreenSize();

		// Проверка размера экрана при изменении размера окна
		window.addEventListener('resize', checkScreenSize);
	}
	/*OPEN CATALOGY MENU*/
	if(catalogyMenu){
	
		catalogyBtnMobile.addEventListener('click', ()=>{
			if(catalogyMenu.classList.contains('active')){
				catalogyMenu.classList.remove('active');
			}else{
				catalogyMenu.classList.add('active');
				mobileMenu.classList.remove('active');
				menuToggle.classList.remove('active');
			}
		});
		
		catMenuCloseMobile.addEventListener('click', ()=>{
			catalogyMenu.classList.remove('active');
			bodyEl.classList.remove('lock');
		});
		
		// Добавим класс active на меню при ховере на кнопку
		
		catalogyBtnDesktop.addEventListener('mouseover', function() {
		catalogyMenu.classList.add('active');
		
		});

		// Удалим класс active, если мышка выходит за пределы кнопки, но не заходит в меню
		catalogyBtnDesktop.addEventListener('mouseout', function(event) {
		// Проверим, если мышь выходит из кнопки и не переходит в меню
		if (!catalogyMenu.contains(event.relatedTarget)) {
			catalogyMenu.classList.remove('active');
		}
		});

		// Если мышь заходит в меню, оставляем активный класс
		catalogyMenu.addEventListener('mouseover', function() {
		catalogyMenu.classList.add('active');
		});

		// Удалим класс active, если мышь выходит за пределы меню
		catalogyMenu.addEventListener('mouseout', function(event) {
		// Проверим, если мышь выходит из меню и не заходит на кнопку
		if (!catalogyBtnDesktop.contains(event.relatedTarget)) {
			catalogyMenu.classList.remove('active');
		}
		});
	}


	/* ==============показать модальные окна,  имеют атрибут frame-modal , кнопка, которая его показывает , имеет атрибут frame-btn, Чтобы закрыть такое окно, прописываем кнопке закрытия атрибут frame-close*/
	const modalFramesOpen = document.querySelectorAll('[frame-btn]');
	const modalFrames = document.querySelectorAll('[frame-modal]');

	if( modalFrames.length > 0){
		
		const modalFramesClose = document.querySelectorAll('[frame-close]');
		for(let item of modalFramesOpen){
			item.addEventListener('click', function(e){
				for(let item of  modalFrames){
					item.classList.remove('visible');
					bodyEl.classList.remove('noscroll');
					overlayBg.classList.remove('active');
					
				}
				e.preventDefault();
				const itemAttr = item.getAttribute('frame-btn');

				for(let frame of modalFrames){
					const frameAttr =frame.getAttribute('frame-modal');	
					if(frameAttr == itemAttr){
						frame.classList.add('visible');
						bodyEl.classList.add('noscroll');
						overlayBg.classList.add('active');
					}
				}
			});
		}
		/*закрыть модалки с атрибутом frame-modal*/
		for(let item of modalFramesClose){
			item.addEventListener('click', function(e){
				
				e.preventDefault();
				item.closest('[frame-modal]').classList.remove('visible');
				bodyEl.classList.remove('noscroll');
				overlayBg.classList.remove('active');
			});
		}
	}
	let bannerTabsTitle = ['Кирпич','Утепление', 'Тротуарная плитка', 'Все для камина', 'Кровля'];

    new Swiper('#bannerTabsContent', {
        allowTouchMove: false,
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
            nextEl: '.btn-next',
            prevEl: '.btn-prev',
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
});
