// Function for Apple-like smooth scroll
function smoothScroll(target, duration) {
    const targetPosition = document.querySelector(target).getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;

        // Custom easing function for smooth Apple-like scroll
        const ease = easeOutQuart(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, ease);

        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeOutQuart(t, b, c, d) {
        t /= d;
        t--;
        return -c * (t * t * t * t - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Event Listener for Smooth Navigation Scroll
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        smoothScroll(this.getAttribute('href'), 1000); // Adjust duration (1000 ms = 1 second)
    });
});
