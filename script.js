// ===== SLIDESHOW =====
let slideIndex = 0;
function showSlides() {
    const slides = document.querySelectorAll('.slides');
    slides.forEach(s => s.style.display = 'none');
    slideIndex++;
    if(slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex-1].style.display = 'block';
    setTimeout(showSlides, 4000);
}
showSlides();

function plusSlides(n) {
    slideIndex += n-1;
    showSlides();
}

// ===== PRODUCT FILTER =====
function filterProducts(category) {
    const products = document.querySelectorAll('.product');
    products.forEach(p => {
        p.style.display = (category === 'all' || p.classList.contains(category)) ? 'block' : 'none';
    });
}

// ===== CUSTOMIZATION IMAGE PREVIEW =====
function previewImage(event) {
    const preview = document.getElementById('preview');
    preview.src = URL.createObjectURL(event.target.files[0]);
}

// ===== LANGUAGE ALERT =====
function changeLanguage() {
    alert("Language selection system coming soon.");
}
