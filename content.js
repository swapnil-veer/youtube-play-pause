// content.js
let isTabActive = true;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "checkStatus") {
        checkTabStatus();
    }
});

function checkTabStatus() {
    if (document.hidden) {
        if (!isTabActive) {
            pauseVideo();
            isTabActive = true;
        }
    } else {
        if (isTabActive) {
            playVideo();
            isTabActive = false;
        }
    }
}

function pauseVideo() {
    let video = document.querySelector('video');
    if (video && !video.paused) {
        video.pause();
    }
}

function playVideo() {
    let video = document.querySelector('video');
    if (video && video.paused) {
        video.play();
    }
}

document.addEventListener("visibilitychange", () => {
    checkTabStatus();
});
