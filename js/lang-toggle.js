// Функционал смены языка на сайте
let langToggle = document.querySelectorAll('.header__lang-link');
let langRu = document.getElementById('langRu');
let langEn = document.getElementById('langEn');

for (let langToggleItem of langToggle) {
	langToggleItem.addEventListener('click', function () {
		langRu.classList.remove('header__lang-link_active');
		langEn.classList.remove('header__lang-link_active');
		langToggleItem.classList.toggle('header__lang-link_active');
	});
}