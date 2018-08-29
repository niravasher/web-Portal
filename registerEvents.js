var mainApp = {};

(function(){
    var firebase = app_fireBase;
    var uid = null;
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            uid = user.uid;
        }
        else {
            uid = null;
            // redirect to login page
            window.location.replace("webPortal.html");
        }
    });

    function logOut() {
        firebase.auth().signOut();
    }

    mainApp.logOut = logOut;
})();

function displayExtra(select) {
    var a;
    var j = select.value;
    // alert(select.value);
    a = parseInt(j / 100);
    // alert(a);
    //alert("Hi");
    if (a == 21) {
        document.getElementById('teamA').style.display = 'block';
        document.getElementById('teamB').style.display = 'block';
        document.getElementById('gender').style.display = 'block';
    } else if (a == 20) {
        document.getElementById('teamA').style.display = 'block';
        document.getElementById('teamB').style.display = 'block';
        document.getElementById('gender').style.display = 'none';
    } else if (a == 1) {
        document.getElementById('teamA').style.display = 'none';
        document.getElementById('teamB').style.display = 'none';
        document.getElementById('gender').style.display = 'block';
    } else {
        document.getElementById('teamA').style.display = 'none';
        document.getElementById('teamB').style.display = 'none';
        document.getElementById('gender').style.display = 'none';
    }
    if (a == 20 || a == 21) {
        document.getElementById('TeamA').setAttribute("required", "required");
        document.getElementById('TeamB').setAttribute("required", "required");
    } else if (a == 1 || a == 0) {
        document.getElementById('TeamA').removeAttribute("required");
        document.getElementById('TeamB').removeAttribute("required");
    }
}