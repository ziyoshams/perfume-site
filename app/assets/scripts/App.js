import MobileMenu     from './modules/MobileMenu.js';
import RevealOnScroll from './modules/RevealOnScroll.js';
import StickyHeader   from './modules/StickyHeader.js';
import Modal          from './modules/Modal.js';
import $              from 'jquery';

var mobileMenu    = new MobileMenu();
var stickyHeader  = new StickyHeader();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "70%");
var modal         = new Modal();
