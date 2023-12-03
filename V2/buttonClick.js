
const audio = new Audio('clicksound.mp3');
function buttonClick(page) {
    audio.play();
    setTimeout(function () {
        window.location.href = page;
    }, 1000); // 500ms delay
}

function playSoundAndQuit() {
    audio.play();
    setTimeout(function() {
        window.close();
    }, 1000); // 500ms delay
}
