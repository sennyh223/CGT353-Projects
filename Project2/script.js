document.addEventListener('DOMContentLoaded', function () {
    const customCursor = document.createElement('div');
    customCursor.className = 'custom-cursor';
    document.body.appendChild(customCursor);

    document.addEventListener('mousemove', function (e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        customCursor.style.display = 'block';
        customCursor.style.left = mouseX - 20 + 'px';
        customCursor.style.top = mouseY - 20 + window.scrollY + 'px';
    });

    document.addEventListener('scroll', function () {
        customCursor.style.top = window.scrollY + 'px';
    });

    const photos = document.querySelectorAll('.photo');

    photos.forEach(photo => {
        photo.addEventListener('mouseenter', function () {
            customCursor.style.display = 'block';
        });

        photo.addEventListener('mouseleave', function () {
            customCursor.style.display = 'none';
        });
    });
});
function slideInOnScroll() {
    var photos = document.querySelectorAll('.photo');

    photos.forEach(function (photo, index) {
        if (isInViewport(photo) && !photo.classList.contains('slid-in')) {
            // Add the class to trigger the slide-in animation
            photo.classList.add('slid-in');
        }
    });
}
document.addEventListener('scroll', function () {
    slideInOnScroll();
});
window.onload = function () {
    slideInOnScroll();
};
let isEnlarged = false;
document.addEventListener('DOMContentLoaded', function () {
    var heading = document.getElementById("sticky-heading");
    var initialOffset = heading.offsetTop;

    document.addEventListener('scroll', function () {
        if (window.scrollY > initialOffset) {
            heading.style.marginTop = '0';
        } else {
            heading.style.marginTop = '10%';
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('about-popup-btn').addEventListener('click', function () {
        document.getElementById('about-popup-overlay').style.display = 'flex';
    });

    document.getElementById('about-popup-close-btn').addEventListener('click', function () {
        document.getElementById('about-popup-overlay').style.display = 'none';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Show the popup on page load
    document.getElementById('popup-overlay').style.display = 'flex';
});

function closePopup() {
    // Close the popup and hide it
    document.getElementById('popup-overlay').style.display = 'none';
}
document.addEventListener('DOMContentLoaded', function () {
    const sakuraContainer = document.getElementById('sakura-container');
    const toggleButton = document.getElementById('toggle-button');
    function toggleSakura() {
        sakuraContainer.style.display = sakuraContainer.style.display === 'none' || sakuraContainer.style.display === '' ? 'block' : 'none';
    }
    toggleButton.addEventListener('click', toggleSakura);
});
function enlargeImage(photo) {
    var enlargedImage = document.getElementById("enlarged-image");
    var overlay = document.querySelector(".overlay2");

    if (isEnlarged) {
        window.location.href = "index.html";
    } else {
        enlargedImage.src = photo.querySelector("img").src;
        overlay.style.display = "flex";
        isEnlarged = true;
    }
}
function closeOverlay() {
    var overlay = document.querySelector(".overlay2");
    overlay.style.display = "none";
    isEnlarged = false;
}
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function createSakuraPetals() {
    const sakuraContainer = document.getElementById('sakura-container');
    for (let i = 0; i < 50; i++) {
        const petal = document.createElement('div');
        petal.className = 'sakura-petal';
        const delay = Math.random() * 5 + 's';
        const left = Math.random() * window.innerWidth + 'px';
        petal.style.left = left;
        petal.style.animationDelay = delay;
        sakuraContainer.appendChild(petal);
    }
}
window.onload = function () {
    createSakuraPetals();
};



