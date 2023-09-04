// select the input field, button, and note list
const noteInput = document.getElementById("note-input");
const addNoteBtn = document.getElementById("add-note-btn");
const noteList = document.getElementById("note-list");


// add event listener to the button
addNoteBtn.addEventListener("click", function() {
	// get the value of the input field
	const noteText = noteInput.value.trim();
	if (noteText !== "") {
		// create a new list item and add the note text to it
		const newNote = document.createElement("li");
		newNote.textContent = noteText;

		// add the new list item to the note list
		noteList.appendChild(newNote);

		// clear the input field
		noteInput.value = "";
	}
});