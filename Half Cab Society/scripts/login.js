

var counter = 2;
function login(){
    if(counter % 2 == 0){
        alert('You have been logged in!');
    }
    else {
        alert('You have been logged out!');
    }
    counter += 1;
    document.getElementById('username').value="";
    document.getElementById('password').value="";
}   