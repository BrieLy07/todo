const form = document.getElementById('note-form');
const input = document.getElementById('note-input');
const list = document.getElementById('notes-list');

async function fetchNotes() {
  const res = await fetch('/api/notes');
  const notes = await res.json();
  list.innerHTML = '';
  notes.forEach(note => {
    const li = document.createElement('li');
    li.textContent = note.content;
    li.onclick = () => deleteNote(note.id);
    list.appendChild(li);
  });
}

async function addNote(content) {
  await fetch('/api/notes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content })
  });
  fetchNotes();
}

async function deleteNote(id) {
  await fetch(`/api/notes/${id}`, { method: 'DELETE' });
  fetchNotes();
}

form.onsubmit = e => {
  e.preventDefault();
  addNote(input.value);
  input.value = '';
};

fetchNotes();
