document.addEventListener("DOMContentLoaded", function (){
	/*===============MOBILE MENU ==================*/
	const menuToggle = document.querySelector('#menu-toggle');
	const mobileMenu = document.querySelector('#menu');
	const catalogyBtns = document.getElementsByClassName('catalogy-button');
	const catalogyMenu = document.getElementById('cat-menu');
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
		mobileMenu.addEventListener('click', (e)=>{
				resetActiveMenu();
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
	
	for(let btn of catalogyBtns){

		btn.addEventListener('click', ()=>{
			if(catalogyMenu.classList.contains('active')){
				catalogyMenu.classList.remove('active');
			}else{
				catalogyMenu.classList.add('active');
				mobileMenu.classList.remove('active');
			   menuToggle.classList.remove('active');
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
	

});
