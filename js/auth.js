function toggleSignIn() {
    if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
    } else {
        var email = document.getElementById('email_id').value;
        var password = document.getElementById('password_id').value;
        // if (email.length < 4) {
        // 	alert('Please enter an email address.');
        // 	return;
        // }
        // if (password.length < 4) {
        // 	alert('Please enter a password.');
        // 	return;
        // }
        // Sign in with email and pass.
        // [START authwithemail]
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
            
            //
            if(user) {
                window.location.href = "opentry.html"; //After successful login, user will be redirected to home.html
            }
        });
        // [END authwithemail]
    }
    document.getElementById('quickstart-sign-in').disabled = true;
}