/*МЕНЮ|MENU*/
let popupBg = document.querySelector('.pop_up_bg');
let popup = document.querySelector('.pop_up_links');
let openPopup = document.querySelectorAll('.menu_box_nav_bar, .menu_box');
let closePopup = document.querySelector('.close_pop_up');

openPopup.forEach((button) => {
  button.addEventListener('click', (e) => {
    popupBg.classList.add('active');
    popup.classList.add('active');
  })
});

closePopup.addEventListener('click', (e) => {
  popupBg.classList.remove('active');
  popup.classList.remove('active');
});

document.addEventListener('click', (e) => {
  if (e.target == popupBg) {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
  }
});


/*КОПИРОВАНИЕ НОМЕРА В БУФЕР ОБМЕНА */
let alert_1 = document.querySelector('.alert_1');

/* сохраняем текстовое поле в переменную text */
let text = document.getElementById("inputText");
/* сохраняем кнопку в переменную btn */
let btn = document.getElementById("copy");
/* вызываем функцию при нажатии на кнопку */
btn.onclick = function () {
  text.select();
  document.execCommand("copy");
  alert_1.style.display = 'flex';
  setTimeout(
    () => {
      alert_1.classList.add('alert_opacity');
    },
    0.1 * 1000
  );
  setTimeout(
    () => {
      alert_1.classList.remove('alert_opacity');
    },
    1.5 * 1000
  );
  setTimeout(
    () => {
      alert_1.style.display = 'none';
    },
    2 * 1000
  );
}