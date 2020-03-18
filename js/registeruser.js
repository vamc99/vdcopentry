function insertUser() {
    var _username = document.getElementsByName('username')[0].value;
    var _email = document.getElementsByName('email')[0].value;
    var _password = document.getElementsByName('password')[0].value;
    var _role = document.getElementsByName('role')[0].value;


    firebase.auth().createUserWithEmailAndPassword(_email, _password)
    .then(function(){
        writeUserData(_email,_username,_role);
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
    });
}

function writeUserData(_email,_username,_role) {
    db.collection("user").doc(_email).set({
        name: _username,
        role: _role,
    })
    .then(function() {
        console.log("Document successfully written!");
        getDoctors();
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
}

