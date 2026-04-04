const card = document.getElementById("card")
const video = document.querySelector("video");
const playBtn = document.getElementById("playbtn");
const pauseBtn = document.getElementById("pausebtn");
const pops = document.querySelectorAll(".pop");
const range = document.getElementById("range")
const left = document.querySelector(".left")
const right = document.querySelector(".right")
const control = document.querySelector(".controls")
let timeout;

video.addEventListener("timeupdate", () => {
    range.value = (video.currentTime / video.duration) * 100
})
playBtn.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        playBtn.classList.add("active")
        pauseBtn.classList.remove("active")
    }
})
pauseBtn.addEventListener("click", () => {
    if (!video.paused) {
        video.pause();
        playBtn.classList.remove("active")
        pauseBtn.classList.add("active")
    }
})

pops.forEach(pop => {
    pop.addEventListener("click", () => {
        const time = pop.getAttribute("data-time");
        video.currentTime = time;
        video.play();
        playBtn.classList.add("active");
        pauseBtn.classList.remove("active");
    })
})

range.addEventListener("input", () => {
    video.currentTime = (range.value / 100) * video.duration;
});


card.addEventListener("mousemove", () => {
    left.classList.add("active");
    right.classList.add("active");
    control.classList.add("active");

    clearTimeout(timeout);
    

    timeout = setTimeout(() => {
        left.classList.remove("active");
        right.classList.remove("active");
        control.classList.remove("active");
    }, 2000);

});