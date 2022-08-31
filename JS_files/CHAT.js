/*ЧАТ|CHAT*/
let chat_icon = document.querySelector('.chat_icon');
let chat_close_button = document.querySelector('.chat_close_button_div');
let chat = document.querySelector('.chat');

/*медиа запрос js */
const mediaChat = window.matchMedia('(min-width: 801px)')
if (mediaChat.matches) {
  setTimeout(
    () => {
      chat.classList.add('active_chat');
    },
    15 * 1000
  );
}


chat_icon.addEventListener('click', (a) => {
  chat.classList.add('active_chat');
});

chat_close_button.addEventListener('click', (a) => {
  chat.classList.remove('active_chat');
});

function validate_chat(form_id, id_name_chat, id_phone_chat) {
  let reg_name_chat = /^([A-Za-zА-Яа-я_\-\.])/;
  let address_name_chat = document.forms[form_id].elements[id_name_chat].value;
  let errorStyle_name_chat = document.querySelector('.chat_form_name_input');
  let reg_phone_chat = /^([0-9()\-\+])/;
  let address_phone_chat = document.forms[form_id].elements[id_phone_chat].value;
  let errorStyle_phone_chat = document.querySelector('.chat_form_phone_input');

  if ((reg_name_chat.test(address_name_chat) == false) && (reg_phone_chat.test(address_phone_chat) == false)) {
    errorStyle_name_chat.classList.add('error_style_chat');
    document.getElementsByName('name_chat')[0].placeholder = 'Введите Ваше имя';
    errorStyle_phone_chat.classList.add('error_style_chat');
    document.getElementsByName('phone_chat')[0].placeholder = 'Введите Ваш телефон';
    return false;
  }

  else if ((reg_name_chat.test(address_name_chat) == true) && (reg_phone_chat.test(address_phone_chat) == false)) {
    errorStyle_name_chat.classList.remove('error_style_chat');
    errorStyle_phone_chat.classList.add('error_style_chat');
    document.getElementsByName('phone_chat')[0].placeholder = 'Введите Ваш телефон';
    return false;
  }

  else if ((reg_name_chat.test(address_name_chat) == false) && (reg_phone_chat.test(address_phone_chat) == true)) {
    errorStyle_name_chat.classList.add('error_style_chat');
    document.getElementsByName('name_chat')[0].placeholder = 'Введите Ваше имя';
    errorStyle_phone_chat.classList.remove('error_style_chat');
    return false;
  }
};