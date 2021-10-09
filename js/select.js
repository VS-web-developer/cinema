document.addEventListener('DOMContentLoaded', (event) => {
	var selects = document.querySelectorAll('.select'); // находим наши select
	
	//по клику на select ...
	selects.forEach((select) =>{
		select.addEventListener('click', () => {

			var arrow = select.querySelector('.select__arrow'); // находим стрелочку
			var itemsBlock = select.parentNode.querySelector('.select-items'); // находим блок с выриантами
			var items = itemsBlock.querySelectorAll('.select__item'); // находим сами варианты

			arrow.classList.toggle("select__arrow--rotate"); // переворачиваем стрелочку
			itemsBlock.classList.toggle("select-items--hidden"); // показываем блок с вариантами

			//по клику на вариант ...
			items.forEach((item) =>{ 
				item.addEventListener('click', () => {
					select.querySelector('.select__item--selected').textContent = item.textContent;//меняем текст на select
					itemsBlock.classList.add("select-items--hidden"); // скрываем блок с вариантами
					arrow.classList.remove("select__arrow--rotate"); // переворачиваем стрелочку
				});
			});
		});
	});
});
