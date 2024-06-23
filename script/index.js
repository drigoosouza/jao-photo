import {carousel, slideAbout} from './slideshow.js'
import {fixed} from './headerfixed.js'
import{navbar} from './sidebar.js'


carousel()
fixed()
slideAbout()
document.querySelector(".btnNav").addEventListener('click',navbar)
document.querySelectorAll("#sidebar a").forEach(element => {
    element.addEventListener("click",navbar)
});