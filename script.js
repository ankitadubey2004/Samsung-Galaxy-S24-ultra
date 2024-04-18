function countdown() {
    const countToDate = new Date('April 21, 2024 23:59:59').getTime();
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

