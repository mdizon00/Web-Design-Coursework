/* LOGIN
---------------------------------------------------*/
var counter = 2;
function login() {
    if (counter % 2 == 0) {
        alert('You have been logged in!');
    }
    else {
        alert('You have been logged out!');
    }
    counter += 1;
    document.getElementById('username').value = "";
    document.getElementById('password').value = "";
}

/* VIDEOS
----------------------------------------------------
const video = document.querySelector(".video-container video");

video.addEventListener("mouseenter", () => {
    video.play();
});

video.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
});
*/

document.addEventListener('mouseover', hoverVideo, false);
var vid = document.getElementsByTagName("video");
[].forEach.call(vid, function (item) {
    item.addEventListener('mouseover', hoverVideo, false);
    item.addEventListener('mouseout', hideVideo, false);
});
function hoverVideo(e) {
    this.play();
}
function hideVideo(e) {
    this.pause();
    this.currentTime = 0;
}
