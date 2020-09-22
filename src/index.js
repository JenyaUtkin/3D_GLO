'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import toglePopup from './modules/toglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import ourTeam from './modules/ourTeam';
import calc from './modules/calc';
import sendForm from './modules/sendForm';



//таймер
countTimer('23 september 2020');
//меню
toggleMenu();
//popupn
toglePopup();
//табы
tabs();
//слайдер
slider();
 //Наша команда
ourTeam();
//калькулятор
calc(100);
//sense-ajax-form
sendForm();