
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
    // [END authwithemail]
    // var user = firebase.auth().currentUser;
    // if(user){
    //     sessionStorage.setItem("user", user.email);
    //     window.location.href = "opentry.html"; //After successful login, user will be redirected to home.html
    // }

    
    firebase.auth().onAuthStateChanged(user => {		
        // based on user role navigate to differnet pages
        if(user) {
            sessionStorage.setItem("email", email);
            console.log("onAuthStateChanged");
            navigate(email);
            //window.location.href = "opentry.html"; //After successful login, user will be redirected to home.html
        }
    });
    
    document.getElementById('quickstart-sign-in').disabled = true;
}
//var roleRef;
function navigate(email){
    // retrive role of the user
    var userRef = db.collection("user").doc(email);
    var roleRef;
    userRef.get().then(function(doc) {
        if (doc.exists) {
            roleRef = doc.data().role;
            console.log(typeof(roleRef));
            console.log(roleRef);
            //retrive menu list of the user
            var menuRef = db.collection("menu").doc(roleRef);
            var menuList = {};
            menuRef.get().then(function(docRef) {
                if (docRef.exists) {
                    //console.log(docRef.data());
                    menuList = docRef.data();
                    // set session object
                    //
                    //
                    
                    // for(var index in menuList) {
                    //     console.log(menuList[index]);
                    //   }
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
            
        } else {
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });    
}