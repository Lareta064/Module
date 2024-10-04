//====Lazy Map Load ====
function loadMapScript() {
	const script = document.createElement('script');
	script.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A99e469dc18f774ad18b3bab1506d95b1e386c4fd8791fce111cad1c7e6e47bce&amp;width=100%25&amp;height=720&amp;lang=ru_RU&amp;scroll=false';
	script.async = true;
	document.getElementById('map').appendChild(script);
}
// Использование Intersection Observer API для отслеживания видимости элемента
const mapDiv = document.getElementById('map');
const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			loadMapScript();
			observer.disconnect(); // Отключить наблюдатель после загрузки карты
		}
	});
}, {
	rootMargin: '0px',
	threshold: 0.1 // Загружать карту, когда 10% элемента станет видимым
});

observer.observe(mapDiv);