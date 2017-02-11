initApp = function() {
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			// User is signed in.
			const displayName = user.displayName;
			const email = user.email;
			const emailVerified = user.emailVerified;
			const photoURL = user.photoURL;
			const uid = user.uid;
			const providerData = user.providerData;

			user.getToken().then(function(accessToken) {

				document.getElementById('not-logged-in').style.display = 'none';
				document.getElementById('app').style.display = 'block';

				document.getElementById('account-details').textContent = displayName;

				document.getElementById('sign-out-btn').addEventListener('click', function() {
					firebase.auth().signOut();
				})

			});
		} else {
			// User is signed out.

			document.getElementById('not-logged-in').style.display = 'block';
			document.getElementById('app').style.display = 'none';
		}
	}, function(error) {
		console.log(error);
	});
};

window.addEventListener('load', function() {
	initApp()
});
