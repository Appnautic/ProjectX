/*
  Project: Soldat Page
  Author: Soldat Team
 */

import WOW from 'wow.js';

import header from './modules/header';
import parallax from './modules/parallax';
import hero from './modules/hero';

header();
parallax();
hero();

new WOW({
  animateClass: 'animated',
  offset: 0,
  mobile: false,
  duration: 1000,
}).init();
