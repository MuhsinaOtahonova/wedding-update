window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var header = document.querySelector('.header');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}


document.addEventListener("click", function(e) {
    if (e.target.classList.contains("gallery-item")) {
        const src = window.getComputedStyle(e.target).backgroundImage.slice(5, -2).trim();
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show();
    }
});


// Hedef tarih, yıl, ay (0-11), gün, saat, dakika, saniye cinsinden
const targetDate = new Date("2024-05-29T19:20:00");

function updateCountdown() {
    const currentDate = new Date();
    const difference = targetDate - currentDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days + "  days";
    document.getElementById("hours").textContent = hours + "  hours";
    document.getElementById("minutes").textContent = minutes + "  minutes";
    document.getElementById("seconds").textContent = seconds + "  seconds";
}

// Sayfayı yenileyerek her saniye güncelle
setInterval(updateCountdown, 1000);

// İlk başlangıçta sayfayı güncelle
updateCountdown();

