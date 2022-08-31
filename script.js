/*ЗАГРУЗКА|LOADER*/
let loader_div = document.querySelector('.loader_div');
let loader_img = document.querySelector('.loader_logo');

setTimeout(
  () => {
    loader_img.classList.add('active_loader_img');
  },
  1 * 1000
);


setTimeout(
  () => {
    loader_div.classList.add('active_loader');
  },
  3 * 1000
);

setTimeout(
  () => {
    loader_div.style.display = 'none';
  },
  4 * 1000
);


/*увеличение картинок на первой секции|image_scale*/
let one_section_image = document.querySelector('.one_section_image');
let two_section_image = document.querySelector('.two_section_image');


let image_1 = document.querySelector('.image_one_1')
let image_2 = document.querySelector('.image_one_2');
let image_3 = document.querySelector('.image_one_3');
let image_4 = document.querySelector('.image_one_4');
let image_5 = document.querySelector('.image_one_5');


let image_two_6 = document.querySelector('.image_two_6')
let image_two_7 = document.querySelector('.image_two_7');
let image_two_8 = document.querySelector('.image_two_8');
let image_two_9 = document.querySelector('.image_two_9');
let image_two_10 = document.querySelector('.image_two_10');

/*let t = true;
setTimeout(() => {
  setInterval(() => {
    if (t == true) {
      one_section_image.classList.add('opacity0_section_image');
      two_section_image.classList.remove('opacity0_section_image');
      two_section_image.classList.add('opacity1_section_image');

      one_section_image.style.display = 'none';
      two_section_image.style.display = 'flex';
      t = false;
    }
    else if (t == false) {
      two_section_image.classList.add('opacity0_section_image');
      one_section_image.classList.remove('opacity0_section_image');
      one_section_image.classList.add('opacity1_section_image');

      one_section_image.style.display = 'flex';
      two_section_image.style.display = 'none';
      t = true;
    }
  }, 3 * 1000);
}, 3 * 1000
); */


let t = true;
setTimeout(() => {
  setInterval(() => {
    if (t == true) {


      one_section_image.classList.add('opacity0_section_image');
      two_section_image.classList.remove('opacity0_section_image');
      two_section_image.classList.add('opacity1_section_image');
      t = false;
    }
    else if (t == false) {


      two_section_image.classList.add('opacity0_section_image');
      one_section_image.classList.remove('opacity0_section_image');
      one_section_image.classList.add('opacity1_section_image');
      t = true;
    }
  }, 5 * 1000);
}, 3 * 1000
);


setTimeout(() => {
  setTimeout(
    () => {
      image_5.classList.remove('image_scale_remove');
      image_1.classList.add('image_scale');
      image_1.classList.add('image_scale_z-index');
    },
    0.5 * 1000
  );
  setTimeout(
    () => {
      image_1.classList.remove('image_scale_z-index');
      image_1.classList.add('image_scale_remove');
      image_1.classList.remove('image_scale');
      image_2.classList.add('image_scale');
      image_2.classList.add('image_scale_z-index');
    },
    0.5 * 2000
  );
  setTimeout(
    () => {
      image_2.classList.remove('image_scale_z-index');
      image_2.classList.add('image_scale_remove');
      image_1.classList.remove('image_scale_remove');
      image_2.classList.remove('image_scale');
      image_3.classList.add('image_scale');
      image_3.classList.add('image_scale_z-index');
    },
    0.5 * 3000
  );
  setTimeout(
    () => {
      image_3.classList.remove('image_scale_z-index');
      image_3.classList.add('image_scale_remove');
      image_2.classList.remove('image_scale_remove');
      image_3.classList.remove('image_scale');
      image_4.classList.add('image_scale');
      image_4.classList.add('image_scale_z-index');
    },
    0.5 * 4000
  );
  setTimeout(
    () => {
      image_4.classList.remove('image_scale_z-index');
      image_4.classList.add('image_scale_remove');
      image_3.classList.remove('image_scale_remove');
      image_4.classList.remove('image_scale');
      image_5.classList.add('image_scale');
      image_5.classList.add('image_scale_z-index');
    },
    0.5 * 5000
  );
  setTimeout(
    () => {
      image_5.classList.remove('image_scale_z-index');
      image_5.classList.add('image_scale_remove');
      image_4.classList.remove('image_scale_remove');
      image_5.classList.remove('image_scale');
    },
    0.5 * 6000
  );
}, 2 * 1000
);




setTimeout(() => {
  setInterval(
    () => {
      setTimeout(
        () => {
          image_5.classList.remove('image_scale_remove');
          image_1.classList.add('image_scale');
          image_1.classList.add('image_scale_z-index');
        },
        0.5 * 1000
      );
      setTimeout(
        () => {
          image_1.classList.remove('image_scale_z-index');
          image_1.classList.add('image_scale_remove');
          image_1.classList.remove('image_scale');
          image_2.classList.add('image_scale');
          image_2.classList.add('image_scale_z-index');
        },
        0.5 * 2000
      );
      setTimeout(
        () => {
          image_2.classList.remove('image_scale_z-index');
          image_2.classList.add('image_scale_remove');
          image_1.classList.remove('image_scale_remove');
          image_2.classList.remove('image_scale');
          image_3.classList.add('image_scale');
          image_3.classList.add('image_scale_z-index');
        },
        0.5 * 3000
      );
      setTimeout(
        () => {
          image_3.classList.remove('image_scale_z-index');
          image_3.classList.add('image_scale_remove');
          image_2.classList.remove('image_scale_remove');
          image_3.classList.remove('image_scale');
          image_4.classList.add('image_scale');
          image_4.classList.add('image_scale_z-index');
        },
        0.5 * 4000
      );
      setTimeout(
        () => {
          image_4.classList.remove('image_scale_z-index');
          image_4.classList.add('image_scale_remove');
          image_3.classList.remove('image_scale_remove');
          image_4.classList.remove('image_scale');
          image_5.classList.add('image_scale');
          image_5.classList.add('image_scale_z-index');
        },
        0.5 * 5000
      );
      setTimeout(
        () => {
          image_5.classList.remove('image_scale_z-index');
          image_5.classList.add('image_scale_remove');
          image_4.classList.remove('image_scale_remove');
          image_5.classList.remove('image_scale');
        },
        0.5 * 6000
      );
    },
    5 * 1000
  );
}, 3 * 1000);





setTimeout(() => {
  setInterval(
    () => {
      setTimeout(
        () => {
          image_two_10.classList.remove('image_scale_remove');
          image_two_6.classList.add('image_scale');
          image_two_6.classList.add('image_scale_z-index');
        },
        0.5 * 1000
      );
      setTimeout(
        () => {
          image_two_6.classList.remove('image_scale_z-index');
          image_two_6.classList.add('image_scale_remove');
          image_two_6.classList.remove('image_scale');
          image_two_7.classList.add('image_scale');
          image_two_7.classList.add('image_scale_z-index');
        },
        0.5 * 2000
      );
      setTimeout(
        () => {
          image_two_7.classList.remove('image_scale_z-index');
          image_two_7.classList.add('image_scale_remove');
          image_two_6.classList.remove('image_scale_remove');
          image_two_7.classList.remove('image_scale');
          image_two_8.classList.add('image_scale');
          image_two_8.classList.add('image_scale_z-index');
        },
        0.5 * 3000
      );
      setTimeout(
        () => {
          image_two_8.classList.remove('image_scale_z-index');
          image_two_8.classList.add('image_scale_remove');
          image_two_7.classList.remove('image_scale_remove');
          image_two_8.classList.remove('image_scale');
          image_two_9.classList.add('image_scale');
          image_two_9.classList.add('image_scale_z-index');
        },
        0.5 * 4000
      );
      setTimeout(
        () => {
          image_two_9.classList.remove('image_scale_z-index');
          image_two_9.classList.add('image_scale_remove');
          image_two_8.classList.remove('image_scale_remove');
          image_two_9.classList.remove('image_scale');
          image_two_10.classList.add('image_scale');
          image_two_10.classList.add('image_scale_z-index');
        },
        0.5 * 5000
      );
      setTimeout(
        () => {
          image_two_10.classList.remove('image_scale_z-index');
          image_two_10.classList.add('image_scale_remove');
          image_two_9.classList.remove('image_scale_remove');
          image_two_10.classList.remove('image_scale');
        },
        0.5 * 6000
      );
    },
    5 * 1000
  );
}, 3 * 1000);







/*ВАЛИДНОСТЬ ТЕЛЕФОНА */
document.addEventListener("DOMContentLoaded", function () {
  let phoneInputs = document.querySelectorAll('input[data-tel-input]');

  let getInputNumberValue = function (input) {
    return input.value.replace(/\D/g, '');
  }

  let onPhoneInput = function (e) {
    let input = e.target,
      InputNumberValue = getInputNumberValue(input);
    formaledInputValue = ''
    /*запоминание курсора */
    selectionStart = input.selectionStart;

    if (!InputNumberValue) {
      return input.value = '';
    }

    if (input.value.length != selectionStart) {
      if (e.data && /\D/g.test(e.data)) {
        input.value = InputNumberValue;
      }
      return;
    }

    if (['7', '8', '9'].indexOf(InputNumberValue[0]) > -1) {
      if (InputNumberValue[0] == '9') {
        InputNumberValue = '+' + InputNumberValue
      };

      let firstSymbols = (InputNumberValue[0] == '8') ? '+7' : '+7';
      formaledInputValue = firstSymbols + " ";

      if (InputNumberValue.length > 1) {
        formaledInputValue += "(" + InputNumberValue.substring(1, 4)
      }
      if (InputNumberValue.length >= 5) {
        formaledInputValue += ") " + InputNumberValue.substring(4, 7)
      }
      if (InputNumberValue.length >= 8) {
        formaledInputValue += "-" + InputNumberValue.substring(7, 9)
      }
      if (InputNumberValue.length >= 10) {
        formaledInputValue += "-" + InputNumberValue.substring(9, 11)
      }
    }
    else {
      return input.value = '+' + InputNumberValue;
    }
    input.value = formaledInputValue;
  }


  let onPhoneKeyDown = function (e) {
    let input = e.target;
    if (e.keyCode == 8 & getInputNumberValue(input).length == 1) {
      input.value = '';
    }
  }

  for (i = 0; i < phoneInputs.length; i++) {
    let input = phoneInputs[i];
    input.addEventListener('input', onPhoneInput);
    input.addEventListener('keydown', onPhoneKeyDown);
  }
});


/*Якорь*/
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
};








/*фото ландшафта веером|landscape fan*/
let landscape_text_button = document.querySelector('.landscape_text_button');
let landscape_fan = document.querySelector('.landscape_fan');
let landscape_fan_div = document.querySelector('.landscape_fan_div');

landscape_text_button.addEventListener('click', () => {
  landscape_fan.classList.add('landscape_fan_opacity');
});

landscape_fan.addEventListener('click', () => {
  landscape_fan.classList.remove('landscape_fan_opacity');
});

/*landscape_fan_div.addEventListener('click', () => {
  landscape_fan_div.classList.remove('landscape_fan_opacity');
}); */









/*ДРУГОЕ|OTHER*/
let other_going_left1 = document.querySelector('.other_going_left1');
let other_going_left2 = document.querySelector('.other_going_left2');
let other_going_left3 = document.querySelector('.other_going_left3');
let other_going_left4 = document.querySelector('.other_going_left4');
let other_going_left5 = document.querySelector('.other_going_left5');
let other_going_left6 = document.querySelector('.other_going_left6');
let other_going_left7 = document.querySelector('.other_going_left7');
let other_going_left8 = document.querySelector('.other_going_left8');
let other_going_left9 = document.querySelector('.other_going_left9');
let other_going_left10 = document.querySelector('.other_going_left10');
let other_going_left11 = document.querySelector('.other_going_left11');
let other_going_left12 = document.querySelector('.other_going_left12');
let other_going_left13 = document.querySelector('.other_going_left13');

let array_other_going_left = [
  other_going_left1,
  other_going_left2,
  other_going_left3,
  other_going_left4,
  other_going_left5,
  other_going_left6,
  other_going_left7,
  other_going_left8,
  other_going_left9,
  other_going_left10,
  other_going_left11,
  other_going_left12,
  other_going_left13,
]

array_other_going_left[2].classList.add('other_going_left_scale');
setTimeout(() => {
  array_other_going_left[2].classList.remove('other_going_left_scale');
}, 3 * 1000);

setInterval(() => {
  for (let j = 0; j < array_other_going_left.length; j++) {
    array_other_going_left[j].style.left = (parseInt(array_other_going_left[j].style.left) + 20) + '%';
    setTimeout(() => {
      if (array_other_going_left[j].style.left == '40%') {
        array_other_going_left[j].classList.add('other_going_left_scale');
      }
    }, 0.5 * 1000);

    setTimeout(() => {
      if (array_other_going_left[j].style.left == '40%') {
        array_other_going_left[j].classList.remove('other_going_left_scale');
      }
    }, 2 * 1000);

    if (array_other_going_left[j].style.left == '160%') {  //(array_other_going_left[j].style.left == '260%')
      array_other_going_left[j].style.left = '0%';
    };
  };
}, 3 * 1000);






/*Этапы работы|work_stages*/
let work_stage_decoding = document.querySelector('.work_stage_decoding');
let decoding_appear_1 = document.querySelectorAll('.decoding_appear_1');
decoding_appear_1.forEach((button) => {
  button.addEventListener('mouseover', () => {
    work_stage_decoding.style.opacity = '1';
    work_stage_decoding_9.style.opacity = '0';
  });
});
decoding_appear_1.forEach((button) => {
  button.addEventListener('mouseout', () => {
    work_stage_decoding.style.opacity = '0';
  });
});

let work_stage_decoding_2 = document.querySelector('.work_stage_decoding_2');
let decoding_appear_2 = document.querySelectorAll('.decoding_appear_2');
decoding_appear_2.forEach((button) => {
  button.addEventListener('mouseover', () => {
    work_stage_decoding_2.style.opacity = '1';
    work_stage_decoding_9.style.opacity = '0';
  });
});
decoding_appear_2.forEach((button) => {
  button.addEventListener('mouseout', () => {
    work_stage_decoding_2.style.opacity = '0';
  });
});

let work_stage_decoding_3 = document.querySelector('.work_stage_decoding_3');
let decoding_appear_3 = document.querySelectorAll('.decoding_appear_3');
decoding_appear_3.forEach((button) => {
  button.addEventListener('mouseover', () => {
    work_stage_decoding_3.style.opacity = '1';
    work_stage_decoding_9.style.opacity = '0';
  });
});
decoding_appear_3.forEach((button) => {
  button.addEventListener('mouseout', () => {
    work_stage_decoding_3.style.opacity = '0';
  });
});

let work_stage_decoding_4 = document.querySelector('.work_stage_decoding_4');
let decoding_appear_4 = document.querySelectorAll('.decoding_appear_4');
decoding_appear_4.forEach((button) => {
  button.addEventListener('mouseover', () => {
    work_stage_decoding_4.style.opacity = '1';
    work_stage_decoding_9.style.opacity = '0';
  });
});
decoding_appear_4.forEach((button) => {
  button.addEventListener('mouseout', () => {
    work_stage_decoding_4.style.opacity = '0';
  });
});

let work_stage_decoding_5 = document.querySelector('.work_stage_decoding_5');
let decoding_appear_5 = document.querySelectorAll('.decoding_appear_5');
decoding_appear_5.forEach((button) => {
  button.addEventListener('mouseover', () => {
    work_stage_decoding_5.style.opacity = '1';
    work_stage_decoding_9.style.opacity = '0';
  });
});
decoding_appear_5.forEach((button) => {
  button.addEventListener('mouseout', () => {
    work_stage_decoding_5.style.opacity = '0';
  });
});

let work_stage_decoding_6 = document.querySelector('.work_stage_decoding_6');
let decoding_appear_6 = document.querySelectorAll('.decoding_appear_6');
decoding_appear_6.forEach((button) => {
  button.addEventListener('mouseover', () => {
    work_stage_decoding_6.style.opacity = '1';
    work_stage_decoding_9.style.opacity = '0';
  });
});
decoding_appear_6.forEach((button) => {
  button.addEventListener('mouseout', () => {
    work_stage_decoding_6.style.opacity = '0';
  });
});

let work_stage_decoding_7 = document.querySelector('.work_stage_decoding_7');
let decoding_appear_7 = document.querySelectorAll('.decoding_appear_7');
decoding_appear_7.forEach((button) => {
  button.addEventListener('mouseover', () => {
    work_stage_decoding_7.style.opacity = '1';
    work_stage_decoding_9.style.opacity = '0';
  });
});
decoding_appear_7.forEach((button) => {
  button.addEventListener('mouseout', () => {
    work_stage_decoding_7.style.opacity = '0';
  });
});

let work_stage_decoding_8 = document.querySelector('.work_stage_decoding_8');
let decoding_appear_8 = document.querySelectorAll('.decoding_appear_8');
decoding_appear_8.forEach((button) => {
  button.addEventListener('mouseover', () => {
    work_stage_decoding_8.style.opacity = '1';
    work_stage_decoding_9.style.opacity = '0';
  });
});
decoding_appear_8.forEach((button) => {
  button.addEventListener('mouseout', () => {
    work_stage_decoding_8.style.opacity = '0';
  });
});

let work_stage_decoding_9 = document.querySelector('.work_stage_decoding_9');
let decoding_appear_9 = document.querySelectorAll('.decoding_appear_9');
decoding_appear_9.forEach((button) => {
  button.addEventListener('mouseover', () => {
    work_stage_decoding_9.style.opacity = '1';
  });
});
/*decoding_appear_9.forEach((button) => {
  button.addEventListener('mouseout', () => {
    setTimeout(() => {
      work_stage_decoding_9.style.opacity = '0';
    }, 5 * 1000);
  });
}); */

let work_stage_decoding_10 = document.querySelector('.work_stage_decoding_10');
let decoding_appear_10 = document.querySelectorAll('.decoding_appear_10');
decoding_appear_10.forEach((button) => {
  button.addEventListener('mouseover', () => {
    work_stage_decoding_9.style.opacity = '0';
    work_stage_decoding_10.style.opacity = '1';
  });
});
decoding_appear_10.forEach((button) => {
  button.addEventListener('mouseout', () => {
    work_stage_decoding_10.style.opacity = '0';
  });
});






















/*ПОРТФОЛИО|portfolio*/
let scandinavian_1 = document.querySelector('.scandinavian_1');
let scandinavian_2 = document.querySelector('.scandinavian_2');
let scandinavian_3 = document.querySelector('.scandinavian_3');
let scandinavian_4 = document.querySelector('.scandinavian_4');
let scandinavian_5 = document.querySelector('.scandinavian_5');
let scandinavian_6 = document.querySelector('.scandinavian_6');
let styles_center_scandinavian = document.querySelector('.styles_center_scandinavian');

let loft_1 = document.querySelector('.loft_1');
let loft_2 = document.querySelector('.loft_2');
let loft_3 = document.querySelector('.loft_3');
let loft_4 = document.querySelector('.loft_4');
let loft_5 = document.querySelector('.loft_5');
let loft_6 = document.querySelector('.loft_6');
let styles_center_loft = document.querySelector('.styles_center_loft');

let contemporary_1 = document.querySelector('.contemporary_1');
let contemporary_2 = document.querySelector('.contemporary_2');
let contemporary_3 = document.querySelector('.contemporary_3');
let contemporary_4 = document.querySelector('.contemporary_4');
let contemporary_5 = document.querySelector('.contemporary_5');
let contemporary_6 = document.querySelector('.contemporary_6');
let styles_center_contemporary = document.querySelector('.styles_center_contemporary');

let minimalism_1 = document.querySelector('.minimalism_1');
let minimalism_2 = document.querySelector('.minimalism_2');
let minimalism_3 = document.querySelector('.minimalism_3');
let minimalism_4 = document.querySelector('.minimalism_4');
let minimalism_5 = document.querySelector('.minimalism_5');
let minimalism_6 = document.querySelector('.minimalism_6');
let styles_center_minimalism = document.querySelector('.styles_center_minimalism');

let neoclassic_1 = document.querySelector('.neoclassic_1');
let neoclassic_2 = document.querySelector('.neoclassic_2');
let neoclassic_3 = document.querySelector('.neoclassic_3');
let neoclassic_4 = document.querySelector('.neoclassic_4');
let neoclassic_5 = document.querySelector('.neoclassic_5');
let neoclassic_6 = document.querySelector('.neoclassic_6');
let styles_center_neoclassic = document.querySelector('.styles_center_neoclassic');

let provence_1 = document.querySelector('.provence_1');
let provence_2 = document.querySelector('.provence_2');
let provence_3 = document.querySelector('.provence_3');
let provence_4 = document.querySelector('.provence_4');
let provence_5 = document.querySelector('.provence_5');
let provence_6 = document.querySelector('.provence_6');
let styles_center_provence = document.querySelector('.styles_center_provence');

let modern_1 = document.querySelector('.modern_1');
let modern_2 = document.querySelector('.modern_2');
let modern_3 = document.querySelector('.modern_3');
let modern_4 = document.querySelector('.modern_4');
let modern_5 = document.querySelector('.modern_5');
let modern_6 = document.querySelector('.modern_6');
let styles_center_modern = document.querySelector('.styles_center_modern');

let high_tech_1 = document.querySelector('.high_tech_1');
let high_tech_2 = document.querySelector('.high_tech_2');
let high_tech_3 = document.querySelector('.high_tech_3');
let high_tech_4 = document.querySelector('.high_tech_4');
let high_tech_5 = document.querySelector('.high_tech_5');
let high_tech_6 = document.querySelector('.high_tech_6');
let styles_center_high_tech = document.querySelector('.styles_center_high_tech');

let chale_1 = document.querySelector('.chale_1');
let chale_2 = document.querySelector('.chale_2');
let chale_3 = document.querySelector('.chale_3');
let chale_4 = document.querySelector('.chale_4');
let chale_5 = document.querySelector('.chale_5');
let chale_6 = document.querySelector('.chale_6');
let styles_center_chale = document.querySelector('.styles_center_chale');

let eco_1 = document.querySelector('.eco_1');
let eco_2 = document.querySelector('.eco_2');
let eco_3 = document.querySelector('.eco_3');
let eco_4 = document.querySelector('.eco_4');
let eco_5 = document.querySelector('.eco_5');
let eco_6 = document.querySelector('.eco_6');
let styles_center_eco = document.querySelector('.styles_center_eco');


window.onscroll = function () {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;


  if (scrollTop > document.getElementsByClassName('why_us')[0].offsetHeight + document.getElementsByClassName('first_section')[0].offsetHeight + document.getElementsByClassName('prices_section')[0].offsetHeight + document.getElementsByClassName('landsc')[0].offsetHeight) {

  }


  if (scrollTop > document.getElementsByClassName('why_us')[0].offsetHeight + document.getElementsByClassName('first_section')[0].offsetHeight + document.getElementsByClassName('prices_section')[0].offsetHeight + document.getElementsByClassName('landsc')[0].offsetHeight) {
    setTimeout(() => {
      scandinavian_1.classList.add('styles_img_opacity');
      scandinavian_1.classList.remove('styles_img_items_opacity');
    }, 1 * 500
    );

    setTimeout(() => {
      scandinavian_2.classList.add('styles_img_opacity');
      scandinavian_2.classList.remove('styles_img_items_opacity');
    }, 2 * 500
    );

    setTimeout(() => {
      scandinavian_3.classList.add('styles_img_opacity');
      scandinavian_3.classList.remove('styles_img_items_opacity');
    }, 3 * 500
    );

    setTimeout(() => {
      scandinavian_4.classList.add('styles_img_opacity');
      scandinavian_4.classList.remove('styles_img_items_opacity');
    }, 4 * 500
    );

    setTimeout(() => {
      scandinavian_5.classList.add('styles_img_opacity');
      scandinavian_5.classList.remove('styles_img_items_opacity');
    }, 5 * 500
    );

    setTimeout(() => {
      scandinavian_6.classList.add('styles_img_opacity');
      scandinavian_6.classList.remove('styles_img_items_opacity');
    }, 6 * 500
    );

    setTimeout(() => {
      styles_center_scandinavian.classList.add('styles_center_down');
    }, 0.5 * 500
    );
  };


  if (scrollTop > document.getElementsByClassName('why_us')[0].offsetHeight + document.getElementsByClassName('first_section')[0].offsetHeight + document.getElementsByClassName('prices_section')[0].offsetHeight + document.getElementsByClassName('landsc')[0].offsetHeight + document.getElementsByClassName('portfolio_img_1')[0].offsetHeight) {
    setTimeout(() => {
      loft_1.classList.add('styles_img_opacity');
      loft_1.classList.remove('styles_img_items_opacity');
    }, 1 * 500
    );

    setTimeout(() => {
      loft_2.classList.add('styles_img_opacity');
      loft_2.classList.remove('styles_img_items_opacity');
    }, 2 * 500
    );

    setTimeout(() => {
      loft_3.classList.add('styles_img_opacity');
      loft_3.classList.remove('styles_img_items_opacity');
    }, 3 * 500
    );

    setTimeout(() => {
      loft_4.classList.add('styles_img_opacity');
      loft_4.classList.remove('styles_img_items_opacity');
    }, 4 * 500
    );

    setTimeout(() => {
      loft_5.classList.add('styles_img_opacity');
      loft_5.classList.remove('styles_img_items_opacity');
    }, 5 * 500
    );

    setTimeout(() => {
      loft_6.classList.add('styles_img_opacity');
      loft_6.classList.remove('styles_img_items_opacity');
    }, 6 * 500
    );

    setTimeout(() => {
      styles_center_loft.classList.add('styles_center_down');
    }, 0.5 * 500
    );
  };



  if (scrollTop > document.getElementsByClassName('why_us')[0].offsetHeight + document.getElementsByClassName('first_section')[0].offsetHeight + document.getElementsByClassName('prices_section')[0].offsetHeight + document.getElementsByClassName('landsc')[0].offsetHeight + document.getElementsByClassName('portfolio_img_1')[0].offsetHeight + document.getElementsByClassName('portfolio_img_2')[0].offsetHeight) {
    setTimeout(() => {
      contemporary_1.classList.add('styles_img_opacity');
      contemporary_1.classList.remove('styles_img_items_opacity');
    }, 1 * 500
    );

    setTimeout(() => {
      contemporary_2.classList.add('styles_img_opacity');
      contemporary_2.classList.remove('styles_img_items_opacity');
    }, 2 * 500
    );

    setTimeout(() => {
      contemporary_3.classList.add('styles_img_opacity');
      contemporary_3.classList.remove('styles_img_items_opacity');
    }, 3 * 500
    );

    setTimeout(() => {
      contemporary_4.classList.add('styles_img_opacity');
      contemporary_4.classList.remove('styles_img_items_opacity');
    }, 4 * 500
    );

    setTimeout(() => {
      contemporary_5.classList.add('styles_img_opacity');
      contemporary_5.classList.remove('styles_img_items_opacity');
    }, 5 * 500
    );

    setTimeout(() => {
      contemporary_6.classList.add('styles_img_opacity');
      contemporary_6.classList.remove('styles_img_items_opacity');
    }, 6 * 500
    );

    setTimeout(() => {
      styles_center_contemporary.classList.add('styles_center_down');
    }, 0.5 * 500
    );
  };



  if (scrollTop > document.getElementsByClassName('why_us')[0].offsetHeight + document.getElementsByClassName('first_section')[0].offsetHeight + document.getElementsByClassName('prices_section')[0].offsetHeight + document.getElementsByClassName('landsc')[0].offsetHeight + document.getElementsByClassName('portfolio_img_1')[0].offsetHeight + document.getElementsByClassName('portfolio_img_2')[0].offsetHeight + document.getElementsByClassName('portfolio_img_3')[0].offsetHeight) {
    setTimeout(() => {
      minimalism_1.classList.add('styles_img_opacity');
      minimalism_1.classList.remove('styles_img_items_opacity');
    }, 1 * 500
    );

    setTimeout(() => {
      minimalism_2.classList.add('styles_img_opacity');
      minimalism_2.classList.remove('styles_img_items_opacity');
    }, 2 * 500
    );

    setTimeout(() => {
      minimalism_3.classList.add('styles_img_opacity');
      minimalism_3.classList.remove('styles_img_items_opacity');
    }, 3 * 500
    );

    setTimeout(() => {
      minimalism_4.classList.add('styles_img_opacity');
      minimalism_4.classList.remove('styles_img_items_opacity');
    }, 4 * 500
    );

    setTimeout(() => {
      minimalism_5.classList.add('styles_img_opacity');
      minimalism_5.classList.remove('styles_img_items_opacity');
    }, 5 * 500
    );

    setTimeout(() => {
      minimalism_6.classList.add('styles_img_opacity');
      minimalism_6.classList.remove('styles_img_items_opacity');
    }, 6 * 500
    );

    setTimeout(() => {
      styles_center_minimalism.classList.add('styles_center_down');
    }, 0.5 * 500
    );
  };



  if (scrollTop > document.getElementsByClassName('why_us')[0].offsetHeight + document.getElementsByClassName('first_section')[0].offsetHeight + document.getElementsByClassName('prices_section')[0].offsetHeight + document.getElementsByClassName('landsc')[0].offsetHeight + document.getElementsByClassName('portfolio_img_1')[0].offsetHeight + document.getElementsByClassName('portfolio_img_2')[0].offsetHeight + document.getElementsByClassName('portfolio_img_3')[0].offsetHeight + document.getElementsByClassName('portfolio_img_4')[0].offsetHeight) {
    setTimeout(() => {
      neoclassic_1.classList.add('styles_img_opacity');
      neoclassic_1.classList.remove('styles_img_items_opacity');
    }, 1 * 500
    );

    setTimeout(() => {
      neoclassic_2.classList.add('styles_img_opacity');
      neoclassic_2.classList.remove('styles_img_items_opacity');
    }, 2 * 500
    );

    setTimeout(() => {
      neoclassic_3.classList.add('styles_img_opacity');
      neoclassic_3.classList.remove('styles_img_items_opacity');
    }, 3 * 500
    );

    setTimeout(() => {
      neoclassic_4.classList.add('styles_img_opacity');
      neoclassic_4.classList.remove('styles_img_items_opacity');
    }, 4 * 500
    );

    setTimeout(() => {
      neoclassic_5.classList.add('styles_img_opacity');
      neoclassic_5.classList.remove('styles_img_items_opacity');
    }, 5 * 500
    );

    setTimeout(() => {
      neoclassic_6.classList.add('styles_img_opacity');
      neoclassic_6.classList.remove('styles_img_items_opacity');
    }, 6 * 500
    );

    setTimeout(() => {
      styles_center_neoclassic.classList.add('styles_center_down');
    }, 0.5 * 500
    );
  };



  if (scrollTop > document.getElementsByClassName('why_us')[0].offsetHeight + document.getElementsByClassName('first_section')[0].offsetHeight + document.getElementsByClassName('prices_section')[0].offsetHeight + document.getElementsByClassName('landsc')[0].offsetHeight + document.getElementsByClassName('portfolio_img_1')[0].offsetHeight + document.getElementsByClassName('portfolio_img_2')[0].offsetHeight + document.getElementsByClassName('portfolio_img_3')[0].offsetHeight + document.getElementsByClassName('portfolio_img_4')[0].offsetHeight + document.getElementsByClassName('portfolio_img_5')[0].offsetHeight) {
    setTimeout(() => {
      provence_1.classList.add('styles_img_opacity');
      provence_1.classList.remove('styles_img_items_opacity');
    }, 1 * 500
    );

    setTimeout(() => {
      provence_2.classList.add('styles_img_opacity');
      provence_2.classList.remove('styles_img_items_opacity');
    }, 2 * 500
    );

    setTimeout(() => {
      provence_3.classList.add('styles_img_opacity');
      provence_3.classList.remove('styles_img_items_opacity');
    }, 3 * 500
    );

    setTimeout(() => {
      provence_4.classList.add('styles_img_opacity');
      provence_4.classList.remove('styles_img_items_opacity');
    }, 4 * 500
    );

    setTimeout(() => {
      provence_5.classList.add('styles_img_opacity');
      provence_5.classList.remove('styles_img_items_opacity');
    }, 5 * 500
    );

    setTimeout(() => {
      provence_6.classList.add('styles_img_opacity');
      provence_6.classList.remove('styles_img_items_opacity');
    }, 6 * 500
    );

    setTimeout(() => {
      styles_center_provence.classList.add('styles_center_down');
    }, 0.5 * 500
    );
  };



  if (scrollTop > document.getElementsByClassName('why_us')[0].offsetHeight + document.getElementsByClassName('first_section')[0].offsetHeight + document.getElementsByClassName('prices_section')[0].offsetHeight + document.getElementsByClassName('landsc')[0].offsetHeight + document.getElementsByClassName('portfolio_img_1')[0].offsetHeight + document.getElementsByClassName('portfolio_img_2')[0].offsetHeight + document.getElementsByClassName('portfolio_img_3')[0].offsetHeight + document.getElementsByClassName('portfolio_img_4')[0].offsetHeight + document.getElementsByClassName('portfolio_img_5')[0].offsetHeight + document.getElementsByClassName('portfolio_img_6')[0].offsetHeight) {
    setTimeout(() => {
      modern_1.classList.add('styles_img_opacity');
      modern_1.classList.remove('styles_img_items_opacity');
    }, 1 * 500
    );

    setTimeout(() => {
      modern_2.classList.add('styles_img_opacity');
      modern_2.classList.remove('styles_img_items_opacity');
    }, 2 * 500
    );

    setTimeout(() => {
      modern_3.classList.add('styles_img_opacity');
      modern_3.classList.remove('styles_img_items_opacity');
    }, 3 * 500
    );

    setTimeout(() => {
      modern_4.classList.add('styles_img_opacity');
      modern_4.classList.remove('styles_img_items_opacity');
    }, 4 * 500
    );

    setTimeout(() => {
      modern_5.classList.add('styles_img_opacity');
      modern_5.classList.remove('styles_img_items_opacity');
    }, 5 * 500
    );

    setTimeout(() => {
      modern_6.classList.add('styles_img_opacity');
      modern_6.classList.remove('styles_img_items_opacity');
    }, 6 * 500
    );

    setTimeout(() => {
      styles_center_modern.classList.add('styles_center_down');
    }, 0.5 * 500
    );
  };



  if (scrollTop > document.getElementsByClassName('why_us')[0].offsetHeight + document.getElementsByClassName('first_section')[0].offsetHeight + document.getElementsByClassName('prices_section')[0].offsetHeight + document.getElementsByClassName('landsc')[0].offsetHeight + document.getElementsByClassName('portfolio_img_1')[0].offsetHeight + document.getElementsByClassName('portfolio_img_2')[0].offsetHeight + document.getElementsByClassName('portfolio_img_3')[0].offsetHeight + document.getElementsByClassName('portfolio_img_4')[0].offsetHeight + document.getElementsByClassName('portfolio_img_5')[0].offsetHeight + document.getElementsByClassName('portfolio_img_6')[0].offsetHeight + document.getElementsByClassName('portfolio_img_7')[0].offsetHeight) {
    setTimeout(() => {
      high_tech_1.classList.add('styles_img_opacity');
      high_tech_1.classList.remove('styles_img_items_opacity');
    }, 1 * 500
    );

    setTimeout(() => {
      high_tech_2.classList.add('styles_img_opacity');
      high_tech_2.classList.remove('styles_img_items_opacity');
    }, 2 * 500
    );

    setTimeout(() => {
      high_tech_3.classList.add('styles_img_opacity');
      high_tech_3.classList.remove('styles_img_items_opacity');
    }, 3 * 500
    );

    setTimeout(() => {
      high_tech_4.classList.add('styles_img_opacity');
      high_tech_4.classList.remove('styles_img_items_opacity');
    }, 4 * 500
    );

    setTimeout(() => {
      high_tech_5.classList.add('styles_img_opacity');
      high_tech_5.classList.remove('styles_img_items_opacity');
    }, 5 * 500
    );

    setTimeout(() => {
      high_tech_6.classList.add('styles_img_opacity');
      high_tech_6.classList.remove('styles_img_items_opacity');
    }, 6 * 500
    );

    setTimeout(() => {
      styles_center_high_tech.classList.add('styles_center_down');
    }, 0.5 * 500
    );
  };



  if (scrollTop > document.getElementsByClassName('why_us')[0].offsetHeight + document.getElementsByClassName('first_section')[0].offsetHeight + document.getElementsByClassName('prices_section')[0].offsetHeight + document.getElementsByClassName('landsc')[0].offsetHeight + document.getElementsByClassName('portfolio_img_1')[0].offsetHeight + document.getElementsByClassName('portfolio_img_2')[0].offsetHeight + document.getElementsByClassName('portfolio_img_3')[0].offsetHeight + document.getElementsByClassName('portfolio_img_4')[0].offsetHeight + document.getElementsByClassName('portfolio_img_5')[0].offsetHeight + document.getElementsByClassName('portfolio_img_6')[0].offsetHeight + document.getElementsByClassName('portfolio_img_7')[0].offsetHeight + document.getElementsByClassName('portfolio_img_8')[0].offsetHeight) {
    setTimeout(() => {
      chale_1.classList.add('styles_img_opacity');
      chale_1.classList.remove('styles_img_items_opacity');
    }, 1 * 500
    );

    setTimeout(() => {
      chale_2.classList.add('styles_img_opacity');
      chale_2.classList.remove('styles_img_items_opacity');
    }, 2 * 500
    );

    setTimeout(() => {
      chale_3.classList.add('styles_img_opacity');
      chale_3.classList.remove('styles_img_items_opacity');
    }, 3 * 500
    );

    setTimeout(() => {
      chale_4.classList.add('styles_img_opacity');
      chale_4.classList.remove('styles_img_items_opacity');
    }, 4 * 500
    );

    setTimeout(() => {
      chale_5.classList.add('styles_img_opacity');
      chale_5.classList.remove('styles_img_items_opacity');
    }, 5 * 500
    );

    setTimeout(() => {
      chale_6.classList.add('styles_img_opacity');
      chale_6.classList.remove('styles_img_items_opacity');
    }, 6 * 500
    );

    setTimeout(() => {
      styles_center_chale.classList.add('styles_center_down');
    }, 0.5 * 500
    );
  };



  if (scrollTop > document.getElementsByClassName('why_us')[0].offsetHeight + document.getElementsByClassName('first_section')[0].offsetHeight + document.getElementsByClassName('prices_section')[0].offsetHeight + document.getElementsByClassName('landsc')[0].offsetHeight + document.getElementsByClassName('portfolio_img_1')[0].offsetHeight + document.getElementsByClassName('portfolio_img_2')[0].offsetHeight + document.getElementsByClassName('portfolio_img_3')[0].offsetHeight + document.getElementsByClassName('portfolio_img_4')[0].offsetHeight + document.getElementsByClassName('portfolio_img_5')[0].offsetHeight + document.getElementsByClassName('portfolio_img_6')[0].offsetHeight + document.getElementsByClassName('portfolio_img_7')[0].offsetHeight + document.getElementsByClassName('portfolio_img_8')[0].offsetHeight + document.getElementsByClassName('portfolio_img_9')[0].offsetHeight) {
    setTimeout(() => {
      eco_1.classList.add('styles_img_opacity');
      eco_1.classList.remove('styles_img_items_opacity');
    }, 1 * 500
    );

    setTimeout(() => {
      eco_2.classList.add('styles_img_opacity');
      eco_2.classList.remove('styles_img_items_opacity');
    }, 2 * 500
    );

    setTimeout(() => {
      eco_3.classList.add('styles_img_opacity');
      eco_3.classList.remove('styles_img_items_opacity');
    }, 3 * 500
    );

    setTimeout(() => {
      eco_4.classList.add('styles_img_opacity');
      eco_4.classList.remove('styles_img_items_opacity');
    }, 4 * 500
    );

    setTimeout(() => {
      eco_5.classList.add('styles_img_opacity');
      eco_5.classList.remove('styles_img_items_opacity');
    }, 5 * 500
    );

    setTimeout(() => {
      eco_6.classList.add('styles_img_opacity');
      eco_6.classList.remove('styles_img_items_opacity');
    }, 6 * 500
    );

    setTimeout(() => {
      styles_center_eco.classList.add('styles_center_down');
    }, 0.5 * 500
    );
  }
};



/*КАРТА исчезание телефона|MAP*/
let map_info = document.querySelector('.map_info');

map_info.addEventListener('click', (d) => {
  map_info.style.opacity = '0';

  setTimeout(
    () => {
      map_info.style.display = 'none'
    },
    0.5 * 1000
  );
});


