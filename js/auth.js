function toggleSignIn() {
    var email = document.getElementById('email_id').value;
    var password = document.getElementById('password_id').value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        console.log(errorCode);
        if (errorCode === 'auth/wrong-password') {
            document.getElementById("invalid_user").innerHTML= "Invalid Username or Password";
            //alert('Wrong password.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
        document.getElementById('quickstart-sign-in').disabled = false;
        // [END_EXCLUDE]
    });
    firebase.auth().onAuthStateChanged(user => {		
        // based on user role navigate to differnet pages
        if(user) {
            window.location.href = "opentry.html"; //After successful login, user will be redirected to home.html
        }
    });
    // [END authwithemail]
    document.getElementById('quickstart-sign-in').disabled = true;
}