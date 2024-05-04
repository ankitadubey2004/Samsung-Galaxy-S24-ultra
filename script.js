function countdown() {
    const countToDate = new Date('8 may, 2024 23:59:59').getTime();
    const now = new Date().getTime();
    const difference = countToDate - now;

    // Time calculations
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Zero padding function
    function pad(n) {
        return (n < 10 ? '0' : '') + n;
    }

    // Display the result in the element with id
    document.getElementById('days').textContent = pad(days);
    document.getElementById('hours').textContent = pad(hours);
    document.getElementById('minutes').textContent = pad(minutes);
    document.getElementById('seconds').textContent = pad(seconds);

    // If the countdown is over, write some text
    if (difference < 0) {
        clearInterval(timer);
        document.getElementById('countdown').innerHTML = "EXPIRED";
    }
}let timer = setInterval(countdown, 1000);


let currentIndex = 0;

function moveSlide(direction) {
    const items = document.querySelector('.header-items');
    const totalItems = items.children.length;
    const stepSize = items.clientWidth / totalItems;
    
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex >= totalItems) {
        currentIndex = totalItems - 1;
    }

    items.style.transform = `translateX(-${stepSize * currentIndex}px)`;
}
document.getElementById('prev').addEventListener('click', () => moveSlide(-1));
document.getElementById('next').addEventListener('click', () => moveSlide(1));

document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.image-container');
    const highlighted = document.getElementById('highlighted');

    containers.forEach(container => {
        container.addEventListener('mouseenter', function() {
            if (this !== highlighted) {
                highlighted.style.border = '1px solid  #a8a8a8;'; // Grey out the highlighted container
            }
        });
        container.addEventListener('mouseleave', function() {
            highlighted.style.border = '2px solid #007bff'; // Return to blue when not hovering
        });
    });
});
document.getElementById('searchInput').addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.key === 'Enter') {
        search(this.value);
    }
});

function search(query) {
    if (query.trim() === '') {
        document.getElementById('searchResults').innerHTML = 'Please enter a search query.';
        return;
    }
    document.getElementById('searchResults').innerHTML = 'Results for: ' + query;
}
document.addEventListener('DOMContentLoaded', function () {
    const box = document.querySelector('.aboutdev4');
    box.tabIndex = 0; // Make the div focusable
    box.addEventListener('click', function() {
        this.focus(); // Focus the div when it is clicked
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const box = document.getElementById('clickableBox');

    box.addEventListener('click', function() {
        // Toggle the 'active' class on click
        this.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const box = document.getElementById('clickableBox1');

    box.addEventListener('click', function() {
        // Toggle the 'active' class on click
        this.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const box = document.getElementById('clickableBox2');

    box.addEventListener('click', function() {
        // Toggle the 'active' class on click
        this.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const box = document.getElementById('clickableBoxi3');

    box.addEventListener('click', function() {
        // Toggle the 'active' class on click
        this.classList.toggle('active');
    });
});
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
