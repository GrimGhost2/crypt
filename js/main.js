// change navbar on scroll

window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)

})



// open faqs icon

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () =>{
        faq.classList.toggle('open')
    })
})

// show /hide nav menu
const menu = document.querySelector(".nav__menu")
const menuBtn = document.querySelector(".open-menu-btn")
const closeBtn = document.querySelector(".close-menu-btn")


menuBtn.addEventListener('click', () =>{
    menu.style.display = 'flex'
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'block'
    menuBtn.style.display = 'none';
})

closeBtn.addEventListener('click', () =>{
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none'

})

