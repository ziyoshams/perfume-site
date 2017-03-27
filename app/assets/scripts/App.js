import MobileMenu from './modules/MobileMenu.js';
import RevealOnScroll from './modules/RevealOnScroll.js';
import StickyHeader from './modules/StickyHeader.js';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
var sticlyHeader = new StickyHeader();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "70%");
