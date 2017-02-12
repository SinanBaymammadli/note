

initApp = function() {
	firebase.auth().onAuthStateChanged(function(user) {
		if (!user) {
			// User is signed out.
			document.getElementById('not-logged-in').style.display = 'block';
			document.getElementById('app').style.display = 'none';

		} else {

			// User is signed in.
			const displayName = user.displayName;
			const email = user.email;
			const emailVerified = user.emailVerified;
			const photoURL = user.photoURL;
			const uid = user.uid;
			const providerData = user.providerData;
			const newNoteContent = document.getElementById('new-note');
			const addNewNoteBtn = document.getElementById('new-note-btn');
			const body = document.getElementById('body');
			const notesContainer = document.getElementById('notes');
			const showNoteBtn = document.getElementsByClassName('note');
			const noteFullContainer = document.getElementById('note-full-container');
			const hideNoteBtn = document.getElementById('hide-note-btn');
			const showAddNoteBtn = document.getElementById('add-note');
			const addNewNoteContainer = document.getElementById('add-new-note-container');
			const hideAddNewNoteBtn = document.getElementById('hide-add-new-note');
			const deleteNoteBtn = document.getElementsByClassName('delete-note');
			const spinner = document.getElementById('spinner');
			const noteFullContent = document.getElementById('note-full-content');

			const dbRef = firebase.database();
			const dbRefNote = dbRef.ref('users/' + uid + '/notes');


			addNewNoteBtn.addEventListener('click', addNewNote);
			hideNoteBtn.addEventListener('click', hideNote);
			showAddNoteBtn.addEventListener('click', showAddNote);
			hideAddNewNoteBtn.addEventListener('click', hideAddNewNoteContainer);
			noteFullContent.addEventListener('dblclick', updateNote);

			user.getToken().then(function(accessToken) {

				document.getElementById('not-logged-in').style.display = 'none';
				document.getElementById('app').style.display = 'block';

				document.getElementById('account-details').textContent = displayName;

				document.getElementById('sign-out-btn').addEventListener('click', function() {
					firebase.auth().signOut();
				});

				showSpinner();

			});

			dbRefNote.on('value', function(snap) {

				notesContainer.innerHTML = "";

				snap.forEach(function (dbNotes) {
					renderNotes(dbNotes);
				});

				hideSpinner();
				addEventListenerToNotes();
				addEventListenerToDeleteNote();

			});

			function updateNote(note) {
				console.log('hey');
			}

			function addNewNote() {
				if (newNoteContent.value !== "") {

					dbRefNote.push({
						content: newNoteContent.value,
						created_at: getDate()
					});

					hideAddNewNoteContainer();

					newNoteContent.value = "";

				} else {
					console.log(newNoteContent + " empty value");
				}
			}

			function hideSpinner() {
				spinner.style.display = "none";
			}

			function showSpinner() {
				spinner.style.display = "flex";
			}

			function deleteNote(note) {
				const noteId = note.srcElement.id;

				if (confirm('Delete this note?')) {
					dbRefNote.child(noteId).remove();
				} else {
					return;
				}
			}

			function getDate() {
				var date = new Date();
				locale = "en-us",
			   month = date.toLocaleString(locale, { month: "short" });
				var curr_date = date.getDate();

				var fulldate = curr_date + " " + month;

				return fulldate;
			}

			function hideAddNewNoteContainer() {
				addNewNoteContainer.classList.remove('add-new-note-container-visible');
				body.classList.remove('overflow-hidden');
			}

			function showAddNote() {
				addNewNoteContainer.classList.add('add-new-note-container-visible');
				body.classList.add('overflow-hidden');
			};

			function renderNotes(notes) {
				notesContainer.innerHTML += "<div class='card'><span class='delete-note' id='"+ notes.key +"'><svg style=width:24px;height:24px' viewBox='0 0 24 24'><path fill='#212121' d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' /></svg></span><div class='note' id='"
						+notes.key+"'><p>"+
						notes.val().content.substring(0,20).replace(/<(?:.|\n)*?>/gm, '')
						+"</p><p>"+ notes.val().created_at +"</p></div></div>";
			};

			function addEventListenerToNotes() {
				for (var i = 0; i < showNoteBtn.length; i++) {
					showNoteBtn[i].addEventListener('click', function () {
						showNote(this.id);
					});

				}
			};

			function addEventListenerToDeleteNote() {
				for (var i = 0; i < deleteNoteBtn.length; i++) {
					deleteNoteBtn[i].addEventListener('click', function (e) {
						deleteNote(e);
					});

				}
			}

			function showNote(noteId) {
				const noteRef = dbRef.ref('users/' + uid + '/notes/' + noteId);

				noteRef.on('value', function(note) {
					noteFullContent.innerText = note.val().content;
				});

				noteFullContainer.classList.add('note-full-container-visible');
				body.classList.add('overflow-hidden');

			};

			function hideNote() {
				noteFullContainer.classList.remove('note-full-container-visible');
				body.classList.remove('overflow-hidden');
			};

		}

	}, function(error) {
		console.log(error);
	});
};

window.addEventListener('load', function() {
	initApp()
});
