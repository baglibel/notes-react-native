import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

async function Init() {
  const result = await AsyncStorage.getItem('Notes');
  if (result == null) {
    await AsyncStorage.setItem('Notes', JSON.stringify({ data: [] }));
    return await Init();
  } else {
    return JSON.parse(result);
  }
}

async function GetNotes() {
  const notes = await Init();
  return notes;
}

async function AddNote(note) {
  if (note.title == '' || note.content == '')
    return [false, 'Note fields can not be a null value'];
  var notes = await Init();
  notes.data.push({ id: uuid.v4(), title: note.title, content: note.content });
  await AsyncStorage.setItem('Notes', JSON.stringify(notes));
  return [true, 'Note Added.'];
}

async function DeleteNote(id) {
  var notes = await Init();
  const newNotes = {};
  const notesWithoutDeleted = notes.data.filter((note) => note.id != id);
  newNotes.data = notesWithoutDeleted;
  await AsyncStorage.setItem('Notes', JSON.stringify(newNotes));
}

async function EditNote(id, note) {
  var notes = await Init();
  notes.data.forEach((element) => {
    if (element.id == id) {
      element.title = note.title;
      element.content = note.content;
    }
  });
  await AsyncStorage.setItem('Notes', JSON.stringify(notes));
}

export { GetNotes, AddNote, DeleteNote, EditNote };
