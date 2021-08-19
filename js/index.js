class CountdownTimer {
    constructor({ onCount }) {
        this.deadline = new Date("Aug 19, 2021 21:26:25");
        this.onCount = onCount;
        this.intervalId = null;

    }

    start() {
        const startTime = this.deadline.getTime();
        this.intervalId = setInterval(() => {
            const currentTime = new Date().getTime();
            const deltaTime = startTime - currentTime;
            const time = this.getTimeElements(deltaTime);
            this.onCount(time);

        }, 1000);

    }


    pad(value) {
        return String(value).padStart(2, '0');
    }
    getTimeElements(time) {
        if (time < 0) {
            clearInterval(this.intervalId);
            timerInterface.textContent = 'EXPIRED';
        }

        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));


        return { days, hours, mins, secs };
    }


}
const timerInterface = document.querySelector('#timer-1');
const daysCounter = document.querySelector('[data-value="days"]');
const hoursCounter = document.querySelector('[data-value="hours"]');
console.log(hoursCounter);
const minsCounter = document.querySelector('[data-value="mins"]');
const secsCounter = document.querySelector('[data-value="secs"]');
console.log(secsCounter);


const countdownTimer = new CountdownTimer({
    onCount: updateTimerInterface,


});

countdownTimer.start();



function updateTimerInterface({ days, hours, mins, secs }) {
    daysCounter.textContent = `${days}`;
    hoursCounter.textContent = `${hours}`;
    minsCounter.textContent = `${mins}`;
    secsCounter.textContent = `${secs}`;

}