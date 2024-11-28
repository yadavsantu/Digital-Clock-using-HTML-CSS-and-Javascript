const $ = (selector) => {
    return document.querySelector(selector);
};

const hour = $('.hour');
const dot = $('.dot');
const min = $('.min');
const week = $('.week');

let showDot = true;

function update() {
    showDot = !showDot;
    const now = new Date();

    // Toggle dot visibility
    if (showDot) {
        dot.classList.add('invisible');
    } else {
        dot.classList.remove('invisible');
    }

    // Update the time
    hour.textContent = String(now.getHours()).padStart(2, '0');
    min.textContent = String(now.getMinutes()).padStart(2, '0');

    // Update the day of the week
    Array.from(week.children).forEach((ele) => {
        ele.classList.remove('active');
    });

    // Set the active class for the current day
    week.children[now.getDay()].classList.add('active');
}

// Update the time every second (500ms for a smooth update)
setInterval(update, 500);