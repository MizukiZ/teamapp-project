// ORIGINAL START HERE
// // FirebaseUI config.
// var uiConfig = {
//   signInSuccessUrl: '/teams',
//   signInOptions: [
//     // Providers.
//     firebase.auth.EmailAuthProvider.PROVIDER_ID,
//     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//     firebase.auth.PhoneAuthProvider.PROVIDER_ID
//   ],
//   // Terms of service url
//   tosUrl: 'https://www.teamapp.com/terms',
//   // Privacy policy url
//   privacyPolicyUrl: 'https://www.teamapp.com/privacy'
// };

// // Initialize the FirebaseUI Widget using Firebase.
// var ui = new firebaseui.auth.AuthUI(firebase.auth());

// // The start method will wait until the DOM is loaded.
// ui.disableAutoSignIn();
// ui.start('#firebaseui-auth-container', uiConfig);
// ORIGINAL ENDS HERE

// LATEST STARTS HERE
// FirebaseUI config.
var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      var user = authResult.user;
      var credential = authResult.credential;
      var isNewUser = authResult.additionalUserInfo.isNewUser;
      var providerId = authResult.additionalUserInfo.providerId;
      var operationType = authResult.operationType;
      // Do something with the returned AuthResult.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    signInFailure: function(error) {
      // Some unrecoverable error occurred during sign-in.
      // Return a promise when error handling is completed and FirebaseUI
      // will reset, clearing any UI. This commonly occurs for error code
      // 'firebaseui/anonymous-upgrade-merge-conflict' when merge conflict
      // occurs. Check below for more details on this.
      return handleUIError(error);
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM,
  // Query parameter name for mode.
  queryParameterForWidgetMode: 'mode',
  // Query parameter name for sign in success url.
  queryParameterForSignInSuccessUrl: 'signInSuccessUrl',
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: '/teams',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      // Whether the display name should be displayed in the Sign Up page.
      requireDisplayName: true
    },
    {
      provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      // Invisible reCAPTCHA with image challenge and bottom left badge.
      recaptchaParameters: {
        type: 'image',
        size: 'invisible',
        badge: 'bottomleft'
      }
    }
  ],
  // tosUrl and privacyPolicyUrl accept either url string or a callback
  // function.
  // Terms of service url/callback.
  tosUrl: '<your-tos-url>',
  // Privacy policy url/callback.
  privacyPolicyUrl: function() {
    window.location.assign('<your-privacy-policy-url>');
  }
};

var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);
// LATEST ENDS HERE

// Initialize the app
initApp = function() {
  firebase.auth().onAuthStateChanged(
    function(user) {
      if (user) {
        // User is signed in. (this data needs to be saved to user db)
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var uid = user.uid;
        var phoneNumber = user.phoneNumber;
        var providerData = user.providerData;
        user.getIdToken().then(function(accessToken) {
          document.getElementById('sign-in-status').textContent = 'Logged in as: ' + `${user.displayName}`;
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
          console.log(accessToken);
        });
        //sign out process using click event listener taken from demo - delete account function
        document.getElementById('sign-in').addEventListener('click', function() {
          firebase.auth().signOut()
            .then(function() {
              window.location = '/';
              alert('You have Signed Out. Please sign In');
            })
            .catch(function(error) {
              // An error happened.
              alert('An error happened');
            });
        });
      } else {
        // User is signed out.
        document.getElementById('sign-in-status').style.display = 'Signed out';
        document.getElementById('sign-in').style.display = 'Sign in';
        document.getElementById('account-details').style.display = 'null';
      }
    },
    function(error) {
      console.log(error);
    }
  );
};



//TODO: confirm with Glen which state
// signed in until click signed out
// signed in until window/tab closed
// User logged in for duration of session
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);

//FIXME: added style.display none to stop auth container rendering after login, auth container not showing unless page is refreshed after logout though. This needs to be rectified.
// document.getElementById('firebaseui-auth-container').style.display = 'none';

// Call the FirebaseUI function on document load
window.addEventListener('turbolinks:load', function() {
  initApp();
});
