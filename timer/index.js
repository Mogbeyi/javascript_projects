const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * Math.PI * 2;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration) {
        duration = totalDuration;
    },
    onTick(timeRemaning) {
        circle.setAttribute('stroke-dashoffset',
            perimeter * timeRemaning / duration - perimeter
        );
    },
    onComplete() {
        console.log("Timer completed");
    },
    remainingTenSeconds() {
        circle.classList.add("blink_me")
    }
});

