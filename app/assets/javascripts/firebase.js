// FirebaseUI config.
var uiConfig = {
  signInSuccessUrl: '/teams',
  signInOptions: [
    // Providers.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID
  ]
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

// The start method will wait until the DOM is loaded.
ui.disableAutoSignIn();
ui.start('#firebaseui-auth-container', uiConfig);

// Initialize the app
initApp = function() {
  firebase.auth().onAuthStateChanged(
    function(user) {
      if (user) {
        // User is signed in. (none of this is being used, this needs to be saved to user db)
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var uid = user.uid;
        var phoneNumber = user.phoneNumber;
        var providerData = user.providerData;
        user.getIdToken().then(function(accessToken) {
          document.getElementById('sign-in-status').textContent = 'Signed in as: ' + `${user.displayName}`;
          //FIXME: added style.display none to stop auth container rendering after login, auth container not showing unless page is refreshed after logout though. This needs to be rectified.
          document.getElementById('firebaseui-auth-container').style.display = 'none';
          document.getElementById('sign-in').textContent = 'Sign out';
          document.getElementById('account-details').textContent = JSON.stringify({
            displayName: displayName,
            email: email,
            emailVerified: emailVerified,
            phoneNumber: phoneNumber,
            photoURL: photoURL,
            uid: uid,
            accessToken: accessToken,
            providerData: providerData
          }, null, '  ');

        });


          //TODO: not sure why this is here, remove if unnecessary
          document.getElementById('sign-in').addEventListener('click', function() {
            firebase
              .auth()
              .signOut()
              .then(function() {
                window.location = '/';
                alert('You have Signed Out. Please sign In');
              })
              .catch(function(error) {
                // An error happened.
                alert('An error happened');
              });
            // Sign-out successful.
          });


      } else {
        // User is signed out.
        document.getElementById('sign-in-status').style.display = 'none';
        document.getElementById('sign-in').style.display = 'none';
        document.getElementById('photo').style.display = 'none';
      }
    },
    function(error) {
      console.log(error);
    }
  );
};

// User logged in for duration of session
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);

window.addEventListener('turbolinks:load', function() {
  initApp();
});
