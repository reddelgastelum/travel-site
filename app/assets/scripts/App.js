var MobileMenu = require('./modules/MobileMenu');
var RevealOnScroll = require('./modules/RevealOnScroll');
var $ = require('jquery');

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
