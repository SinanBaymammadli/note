initApp = function() {
	firebase.auth().onAuthStateChanged(function(user) {
		if (!user) {
			// User is signed out.
			document.getElementById('not-logged-in').style.display = 'block';
			document.getElementById('app').style.display = 'none';

		} else {
			user.getToken().then(function(accessToken) {

				document.getElementById('not-logged-in').style.display = 'none';
				document.getElementById('app').style.display = 'block';

				document.getElementById('account-name').textContent = displayName;
				document.getElementById('account-img').setAttribute('src', photoURL);

				document.getElementById('sign-out-btn').addEventListener('click', function() {
					firebase.auth().signOut();
				});

				if (window.navigator.onLine) {
					showSpinner();
				} else {
					showMessage("You are offline but you can still add notes!");
				}

			});

			// User is signed in.
			// variables
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
			const saveChangeBtn = document.getElementById('save-change');
			const content = document.getElementById('content');
			const message = document.getElementById('message');
			const dblClickMsg = document.getElementById('dbl-click');
			let dblclick = 0;

			// DB reference
			const dbRef = firebase.database();
			const dbRefNote = dbRef.ref('users/' + uid + '/notes');

			// Event listeners
			addNewNoteBtn.addEventListener('click', function() {
				addNewNote(newNoteContent);
			});
			hideNoteBtn.addEventListener('click', hideFullNoteContainer);
			showAddNoteBtn.addEventListener('click', showAddNewNoteContainer);
			hideAddNewNoteBtn.addEventListener('click', hideAddNewNoteContainer);
			noteFullContent.addEventListener('dblclick', showUpdateNoteContainer);

			// Functions
			// getting notes from db
			dbRefNote.on('value', function(snap) {

				notesContainer.innerHTML = "";

				if (snap.val() === null) {
					notesContainer.innerHTML = "<p class='no-notes'>No notes yet :(</p>";
					notesContainer.innerHTML += "<p class='add-from-here'>Add from here =></p>";

				} else {
					snap.forEach(function (dbNote) {
						renderNote(dbNote);
					});
				}

				hideSpinner();
				addEventListenerToNotes();
				addEventListenerToDeleteNote();

			});

			//rendering notes
			function renderNote(note) {
				notesContainer.innerHTML += "<div class='card'><span class='delete-note' id='"+ note.key +"'><svg style=width:24px;height:24px' viewBox='0 0 24 24'><path fill='#212121' d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' /></svg></span><div class='note' id='"
						+note.key+"'><p>"+
						note.val().content.substring(0,20).replace(/<(?:.|\n)*?>/gm, '')
						+"</p><p>"+ note.val().created_at +"</p></div></div>";
			};

			//show spinner
			function showSpinner() {
				spinner.style.display = "flex";
			}

			//hide spinner
			function hideSpinner() {
				spinner.style.display = "none";
			};

			//adding click events to each note
			function addEventListenerToNotes() {
				for (var i = 0; i < showNoteBtn.length; i++) {
					showNoteBtn[i].addEventListener('click', function () {
						showNote(this.id);
					});
				}
			};

			//show note on full page
			function showNote(noteId) {
				const noteRef = dbRef.ref('users/' + uid + '/notes/' + noteId);
				const content = document.createElement('div');

				noteRef.on('value', function(note) {
					content.innerText = note.val().content;
					noteFullContent.innerHTML = "";
					noteFullContent.appendChild(content);
				});

				noteFullContainer.classList.add('note-full-container-visible');
				noteFullContent.id = noteId;
				body.classList.add('overflow-hidden');
			};

			//adding event listeners to delete buttons
			function addEventListenerToDeleteNote() {
				for (var i = 0; i < deleteNoteBtn.length; i++) {
					deleteNoteBtn[i].addEventListener('click', function (e) {
						deleteNote(this.id);
					});
				}
			}

			//deleting note
			function deleteNote(noteId) {
				if (confirm('Delete this note?')){
					dbRefNote.child(noteId).remove();
					showMessage("Your note deleted.");
				}
				else
					return;
			};

			// hiding full note container
			function hideFullNoteContainer() {
				noteFullContainer.classList.remove('note-full-container-visible');
				body.classList.remove('overflow-hidden');
				saveChangeBtn.style.display = "none";
				dblClickMsg.style.display = "block";
				dblclick = 0;
			};

			// show add new note container
			function showAddNewNoteContainer() {
				addNewNoteContainer.classList.add('add-new-note-container-visible');
				body.classList.add('overflow-hidden');
				setTimeout(function(){
					newNoteContent.focus();
				}, 500);
			};

			// hide add new note container
			function hideAddNewNoteContainer() {
				addNewNoteContainer.classList.remove('add-new-note-container-visible');
				body.classList.remove('overflow-hidden');
			};

			// saving new note to database
			function addNewNote(newNote) {

				if (newNote.value !== "") {

					dbRefNote.push({
						content: newNote.value,
						created_at: getDate()
					});

					hideAddNewNoteContainer();

					newNote.value = "";

					showMessage("Your new note has been added");

				} else
					console.log(newNoteContent + " empty value");
			};

			//get current date
			function getDate() {
				var date = new Date();
				locale = "en-us",
			   month = date.toLocaleString(locale, { month: "short" });
				var curr_date = date.getDate();

				var fulldate = curr_date + " " + month;

				return fulldate;
			}

			function showUpdateNoteContainer() {
				const noteId = this.id;

				dblclick +=1;

				if (dblclick > 1) {
					return;
				}

				const textarea = document.createElement('textarea');
				const currentNoteContent = noteFullContent.innerText;
				textarea.innerHTML = currentNoteContent;
				textarea.setAttribute('id', 'updated-note');
				textarea.setAttribute('autofocus', 'true');

				noteFullContent.innerHTML = "";
				noteFullContent.appendChild(textarea);

				textarea.focus();

				dblClickMsg.style.display = "none";
				saveChangeBtn.style.display = "block";

				saveChangeBtn.addEventListener('click', function() {
					const updateNoteNode = document.getElementById('updated-note');

					if (updateNoteNode) {
						updatedNote = document.getElementById('updated-note').value;
					}
					updateNote(updatedNote, noteId);
				});
			};

			function updateNote(noteContent, noteId) {
				saveChangeBtn.style.display = "none";
				dblClickMsg.style.display = "block";
				dblclick = 0;

				const noteRef = dbRef.ref('users/' + uid + '/notes/' + noteId);
				noteRef.set({
					content: noteContent,
					created_at: getDate()
				});

				showNote(noteId);
				showMessage("Your note has been updated");
			};

			function showMessage(messageContent) {
				message.innerHTML = messageContent;
				message.classList.add('showing');

				setTimeout(function() {
					message.classList.remove('showing');
				}, 4100);
			};
		}

	}, function(error) {
		console.log(error);
	});
};

window.addEventListener('load', function() {
	initApp();
	registerServiceWorker();
});


//registering service worker
function registerServiceWorker() {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('/service-worker.js', { scope: './' })
		.then(function() {
			alert('registered service worker');
		})
		.catch(function(error) {
			console.error('service worker failed to register: ' + error);
		});
	}
};



