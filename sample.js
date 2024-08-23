//navbar menu display on mobile
function toggleMenu() {
    const menu = document.querySelector('.hamburger-menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}
//----------------------------------

//frequently asked question sections dropdown
document.querySelectorAll('.Question').forEach(item => {
    item.addEventListener('click', () => {
        const faqItem = item.parentElement;
        const faqAnswer = faqItem.querySelector('.Answer');

        faqItem.classList.toggle('active');
        if (faqItem.classList.contains('active')) {
            faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
        } else {
            faqAnswer.style.maxHeight = '0';
        }

        const toggleIcon = item.querySelector('.toggle-icon');
        toggleIcon.textContent = faqItem.classList.contains('active') ? '×' : '+';
    });
});
//------------------------------------

//slider of car banner section
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
    });
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); 
}

function plusSlides(n) {
    slideIndex += n;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    showSlides();
}
