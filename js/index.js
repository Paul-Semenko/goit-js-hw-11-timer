class CountdownTimer {
    constructor({ onCount }) {
        this.onCount = onCount;
    }
    start() {
        const startTime = new Date("Sep 5, 2021 15:37:25").getTime();
        setInterval(() => {
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
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));


        return { days, hours, mins, secs };
    }


}

const daysCounter = document.querySelector('[data-value="days"]');
const hoursCounter = document.querySelector('[data-value="hours"]');
console.log(hoursCounter);
const minsCounter = document.querySelector('[data-value="mins"]');
const secsCounter = document.querySelector('[data-value="secs"]');
console.log(secsCounter);


const countdownTimer = new CountdownTimer({
    onCount: updateTimerInterface

});

countdownTimer.start();

function updateTimerInterface({ days, hours, mins, secs }) {
    daysCounter.textContent = `${days}`;
    hoursCounter.textContent = `${hours}`;
    minsCounter.textContent = `${mins}`;
    secsCounter.textContent = `${secs}`;

}