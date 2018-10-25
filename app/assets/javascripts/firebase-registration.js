firebase.auth().createUserWithEmailAndPassword(email, password)
  .catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log('registration error', error);
});
