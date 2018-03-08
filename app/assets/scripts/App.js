var MobileMenu = require('./modules/MobileMenu');
var RevealOnScroll = require('./modules/RevealOnScroll');
var StickyHeader = require('./modules/StickyHeader');
var $ = require('jquery');

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();
