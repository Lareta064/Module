document.addEventListener("DOMContentLoaded", function (){
	/*===============MOBILE MENU ==================*/
	const menuToggle = document.querySelector('#menu-toggle');
	const mobileMenu = document.querySelector('#menu');
	const catalogyBtnMobile = document.getElementById('cat-btn-mob');
	const catalogyBtnDesktop = document.getElementById('cat-btn-desk');
	const catalogyMenu = document.getElementById('cat-menu');
	const catMenuCloseMobile = document.querySelector('#close-cat-menu');
	const filterPopup = document.getElementById('filter-popup');
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
				if(filterPopup){filterPopup.classList.remove('active');}
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
				if(filterPopup){filterPopup.classList.remove('active');}
				bodyEl.classList.add('lock');
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
	/*.drop-filter*/
	const dropSelect = document.querySelectorAll('.drop-filter');

	if (dropSelect.length > 0) {
		dropSelect.forEach((select) => {
			const selectBtn = select.querySelector('.drop-filter__btn');
			const selectMoreBtn = select.querySelector('.drop-filter-more');

			// Функция для открытия списка
			const openSelect = () => {
				select.classList.add('open');
				if (select.classList.contains('drop-filter--show-more') && selectMoreBtn) {
					// Для блоков с "Показать еще", открываем частично и ставим кнопку "Показать еще"
					select.classList.remove('open--full');
					selectMoreBtn.innerHTML = 'Показать еще';
					selectMoreBtn.classList.remove('drop-filter-close');
				} else if (selectMoreBtn) {
					// Для блоков без "Показать еще", сразу показываем весь список
					select.classList.add('open--full');
					selectMoreBtn.innerHTML = 'Свернуть все';
					selectMoreBtn.classList.add('drop-filter-close');
				}
			};

			// Функция для закрытия списка
			const closeSelect = () => {
				select.classList.remove('open');
				select.classList.remove('open--full');
			};

			// Клик по кнопке открытия/закрытия списка
			selectBtn.addEventListener('click', () => {
				if (select.classList.contains('open')) {
					closeSelect();
				} else {
					openSelect();
				}
			});

			// Логика для кнопки "Показать еще/Свернуть все"
			if (selectMoreBtn) {
				selectMoreBtn.addEventListener('click', () => {
					if (select.classList.contains('open--full')) {
					// Если список развернут, сворачиваем его и удаляем классы
					closeSelect();
					} else {
					// Если список свернут, разворачиваем его
					select.classList.add('open--full');
					selectMoreBtn.innerHTML = 'Свернуть все';
					selectMoreBtn.classList.add('drop-filter-close');
					}
				});
			}
		});
	}

	/*========CUSTOM SELECT======= */
	const customSelects = document.querySelectorAll('.custom-select');

	customSelects.forEach((customSelect) => {
		const selectTrigger = customSelect.querySelector('.custom-select-trigger');
		const optionsContainer = customSelect.querySelector('.custom-options');
		const optionsList = customSelect.querySelectorAll('.custom-option');

		// Toggle options dropdown
		selectTrigger.addEventListener('click', function (e) {
			e.stopPropagation(); // Останавливаем распространение события
			const isOpen = customSelect.classList.contains('open');
			closeAllSelects();
			if (!isOpen) {
				customSelect.classList.add('open');
				optionsContainer.style.maxHeight = optionsContainer.scrollHeight + 'px';
			} else {
				optionsContainer.style.maxHeight = '0';
			}
		});

		// Update selected option
		optionsList.forEach((option) => {
			option.addEventListener('click', function () {
				selectTrigger.textContent = option.textContent;
				selectTrigger.dataset.value = option.dataset.value;
				customSelect.classList.remove('open');
				optionsContainer.style.maxHeight = '0';
			});
		});
	});

	// Close dropdown if clicked outside
	document.addEventListener('click', function () {
		closeAllSelects();
	});

	function closeAllSelects() {
		customSelects.forEach((select) => {
			select.classList.remove('open');
			const optionsContainer = select.querySelector('.custom-options');
			if (optionsContainer) {
				optionsContainer.style.maxHeight = '0';
			}
		});
	}
    //=====FILTER POPUP ===
	
	if(filterPopup){
		const filterOpenBtn = document.getElementById('filter-popup-btn');
		const filterCloseBtn = filterPopup.querySelector('.close-btn');
		filterOpenBtn.addEventListener('click', ()=>{
			filterPopup.classList.add('active');
			bodyEl.classList.add('lock');
		});
		filterCloseBtn.addEventListener('click', ()=>{
			filterPopup.classList.remove('active');
			bodyEl.classList.remove('lock');
		});
	}

	const acordeon = document.querySelector('.acordion-wrapper');
	if(acordeon){
		const acordeonGroups = acordeon.querySelectorAll('.acordion-group');
		for(let item of acordeonGroups){
			const acordeonBtn = item.querySelector('.acordion-btn');
			acordeonBtn.addEventListener('click', ()=>{
				if(item.classList.contains('open')){
					item.classList.remove('open');
				}
				else{item.classList.add('open');}
			});
		}
		const openAcordeonBtn = document.getElementById('open-acordeon');
		if(openAcordeonBtn){
			openAcordeonBtn.addEventListener('click', ()=>{
				acordeonGroups.forEach(function(item){
					item.classList.add('open');
				});
			});
		}
	}
     /*custom fileInput*/
	const fileInput = document.getElementById('fileInput');
	const uploadBox = document.getElementById('uploadBox');
	const fileDetails = document.getElementById('fileDetails');
	const fileNameSpan = document.getElementById('fileName');
	const removeFileButton = document.getElementById('removeFile');
    if(fileInput){
		// Открытие диалога выбора файла при клике на блок
		uploadBox.addEventListener('click', () => {
		fileInput.click();
		});

		// Обработка выбора файла через диалог
		fileInput.addEventListener('change', handleFile);

		// Обработка перетаскивания файла
		uploadBox.addEventListener('dragover', (e) => {
		e.preventDefault();
		uploadBox.classList.add('dragover');
		});

		uploadBox.addEventListener('dragleave', () => {
		uploadBox.classList.remove('dragover');
		});

		uploadBox.addEventListener('drop', (e) => {
		e.preventDefault();
		uploadBox.classList.remove('dragover');
		const file = e.dataTransfer.files[0];
		handleFileInput(file);
		});

		// Функция для обработки прикрепленного файла
		function handleFile() {
		const file = fileInput.files[0];
		handleFileInput(file);
		}

		// Обработка файла и отображение деталей
		function handleFileInput(file) {
		if (file && isValidFileType(file) && file.size <= 10 * 1024 * 1024) {
			fileNameSpan.textContent = file.name;
			fileDetails.style.display = 'flex';
		} else {
			alert('Неверный формат файла или файл превышает 10 МБ');
		}
		}

		// Проверка допустимого типа файла
		function isValidFileType(file) {
		const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/png', 'image/jpeg', 'text/plain'];
		return validTypes.includes(file.type);
		}

		// Удаление файла
		removeFileButton.addEventListener('click', () => {
		fileInput.value = ''; // Сбрасываем значение input
		fileNameSpan.textContent = ''; // Очищаем название файла
		fileDetails.style.display = 'none'; // Прячем детали файла
		});
	}

});
