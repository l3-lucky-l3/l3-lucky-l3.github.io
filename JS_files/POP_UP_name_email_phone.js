/*Pop_up_form */
let pop_up_button_bg = document.querySelector('.pop_up_button_bg');
let openPopupForm = document.querySelectorAll('.black_button, .black_button_price, .slider_button, .footer_button, .black_menu_button');
let close_pop_up_button = document.querySelector('.close_pop_up_button');

openPopupForm.forEach((button) => {
  button.addEventListener('click', (f) => {
    pop_up_button_bg.classList.add('active_2');
  })
});

close_pop_up_button.addEventListener('click', (f) => {
  pop_up_button_bg.classList.remove('active_2');
});

document.addEventListener('click', (f) => {
  if (f.target == pop_up_button_bg) {
    pop_up_button_bg.classList.remove('active_2');
  }
});


/*ПРОВЕРКА ВАЛИДНОСТИ name, e-mail, phone*/
function validate(form_id, name, email, phone) {
  let reg2 = /^([A-Za-zА-Яа-я_\-\.])/;
  let address2 = document.forms[form_id].elements[name].value;
  let errorStyle2 = document.querySelector('.aes_name');
  let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  let address = document.forms[form_id].elements[email].value;
  let errorStyle = document.querySelector('.aes_email');
  let reg_phone = /^([0-9()\-\+])/;
  let address_phone = document.forms[form_id].elements[phone].value;
  let errorStyle_phone = document.querySelector('.aes_phone');

  if ((reg2.test(address2) == false) && (reg.test(address) == false) && (reg_phone.test(address_phone) == false)) {
    errorStyle2.classList.add('error_style');
    document.getElementsByName("name")[0].value = "";
    document.getElementsByName('name')[0].placeholder = 'Введите Ваше  имя';

    errorStyle.classList.add('error_style');
    document.getElementsByName("email")[0].value = "";
    document.getElementsByName('email')[0].placeholder = 'Введите Ваш e-mail';

    errorStyle_phone.classList.add('error_style');
    document.getElementsByName("phone")[0].value = "";
    document.getElementsByName('phone')[0].placeholder = 'Введите Ваш телефон';
    return false;
  }

  else if ((reg2.test(address2) == true) && (reg.test(address) == false) && (reg_phone.test(address_phone) == false)) {
    errorStyle2.classList.remove('error_style');
    errorStyle.classList.add('error_style');
    document.getElementsByName("email")[0].value = "";
    document.getElementsByName('email')[0].placeholder = 'Введите Ваш e-mail';
    errorStyle_phone.classList.add('error_style');
    document.getElementsByName("phone")[0].value = "";
    document.getElementsByName('phone')[0].placeholder = 'Введите Ваш телефон';
    return false;
  }

  else if ((reg2.test(address2) == false) && (reg.test(address) == true) && (reg_phone.test(address_phone) == false)) {
    errorStyle2.classList.add('error_style');
    document.getElementsByName("name")[0].value = "";
    document.getElementsByName('name')[0].placeholder = 'Введите Ваше  имя';
    errorStyle.classList.remove('error_style');
    errorStyle_phone.classList.add('error_style');
    document.getElementsByName("phone")[0].value = "";
    document.getElementsByName('phone')[0].placeholder = 'Введите Ваш телефон';
    return false;
  }

  else if ((reg2.test(address2) == false) && (reg.test(address) == false) && (reg_phone.test(address_phone) == true)) {
    errorStyle2.classList.add('error_style');
    document.getElementsByName("name")[0].value = "";
    document.getElementsByName('name')[0].placeholder = 'Введите Ваше  имя';
    errorStyle.classList.add('error_style');
    document.getElementsByName("email")[0].value = "";
    document.getElementsByName('email')[0].placeholder = 'Введите Ваш e-mail';
    errorStyle_phone.classList.remove('error_style');
    return false;
  }

  else if ((reg2.test(address2) == true) && (reg.test(address) == true) && (reg_phone.test(address_phone) == false)) {
    errorStyle2.classList.remove('error_style');
    errorStyle.classList.remove('error_style');
    errorStyle_phone.classList.add('error_style');
    document.getElementsByName("phone")[0].value = "";
    document.getElementsByName('phone')[0].placeholder = 'Введите Ваш телефон';
    return false;
  }

  else if ((reg2.test(address2) == false) && (reg.test(address) == true) && (reg_phone.test(address_phone) == true)) {
    errorStyle2.classList.add('error_style');
    document.getElementsByName("name")[0].value = "";
    document.getElementsByName('name')[0].placeholder = 'Введите Ваше  имя';
    errorStyle.classList.remove('error_style');
    errorStyle_phone.classList.remove('error_style');
    return false;
  }

  else if ((reg2.test(address2) == true) && (reg.test(address) == false) && (reg_phone.test(address_phone) == true)) {
    errorStyle2.classList.remove('error_style');
    errorStyle.classList.add('error_style');
    document.getElementsByName("email")[0].value = "";
    document.getElementsByName('email')[0].placeholder = 'Введите Ваш e-mail';
    errorStyle_phone.classList.remove('error_style');
    return false;
  }
};