/* HALF CAB SOCIETY WEBSITE SCRIPTS */

/* HEADER IN ALL PAGES */
/* LOGIN MESSAGE */

var counter = 2;
function login() {

    var name = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    var logButton = document.getElementById('logButton');


    if (counter % 2 == 0) {
        if (name == "" || pass == "") {
            alert("You must enter a username and password!");
        }
        else {
            alert('You have been logged in!');
            counter += 1;
            logButton.value = "Logout"
        }
    }
    else {
        alert('You have been logged out!');
        counter += 1;
        logButton.value = "Login"
    }



    document.getElementById('username').value = "";
    document.getElementById('password').value = "";
}

/* HOVER EFFECT */
function highlight(x) {
    x.style = "border: solid #ee4970 2px;"
}
function delight(x) {
    x.style = "border: none;"
}

/* HOVER TO PLAY VIDEO, only works for one video
const video = document.querySelector(".video-container video");

video.addEventListener("mouseenter", () => {
    video.play();
});

video.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
});
*/

/* EVENTS PAGE */
function submit_event() {
    var title = document.forms["events"]["event_title"].value;
    var details = document.forms["events"]["event_details"].value;
    var date = document.forms["events"]["event_date"].value;
    if (title == "") {
        alert("An event must have a title!");
    }
    else if (details == "") {
        alert("The event must have a description");
    }
    else {
        if (date.length == 0) {
            alert("An event must have a date!");
        }
        else {
            alert("Event submitted! The society will contact you soon!");
            document.forms["events"]["event_title"].value = "";
            document.forms["events"]["event_details"].value = "";
            document.forms["events"]["event_date"].value = 0;
        }
    }
}

/* TRICKS LIST PAGE */
/* HOVER TO PLAY VIDEO, multiple videos on page */
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

/* CONTACT US PAGE */
/* FORM SEND MESSAGE */
function send_form(id, content) {
    var container = document.getElementById(id);
    container.innerHTML = content;
}
