//change navbar style on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)

})

//show hide Questions and answers 

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open')
        //change icon
        const icon = faq.querySelector('.faq_icon i');
        if (icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus";
        } else {
            icon.className = 'uil uil-plus'
        }
    })
})


//show and hide nav menu button

const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open_menu_button");
const closeBtn = document.querySelector("#close_menu_button");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display= "inline-block";
    menuBtn.style.display= "none";
})

//clove nav menu

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display= "none";
    menuBtn.style.display= "inline-block";
}

closeBtn.addEventListener('click',closeNav);