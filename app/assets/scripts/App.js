import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'

new MobileMenu()
new RevealOnScroll(document.querySelectorAll('.feature-item'), '85%')
new RevealOnScroll(document.querySelectorAll('.testimonial'), '70%')
new StickyHeader()