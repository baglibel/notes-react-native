import { ScrollView, Text, Vibration, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { GetNotes } from '../services/NoteServices';
import Note from '../components/atoms/Note';
import styles from '../styles/style';
const Notes = ({ navigation, route }) => {
  const [notes, setNotes] = useState([]);

  //bu ozelligi ararken baya işkence çektim ama değdi :D
  useEffect(() => {
    fetchNotes();
    navigation.addListener('focus', () => fetchNotes());
  }, []);

  async function fetchNotes() {
    const result = await GetNotes();
    setNotes(result.data);
  }
  return (
    <View style={styles.container}>
      {notes.length != 0 ? (
        <ScrollView style={styles.scrollview}>
          {notes.map((note) => (
            <Note
              key={note.id}
              note={note}
              onPress={() => {
                navigation.navigate('EditNote', {
                  note: note,
                });
                Vibration.vibrate(4);
              }}
            />
          ))}
        </ScrollView>
      ) : (
        <Text style={styles.noNoteText}>No note</Text>
      )}
    </View>
  );
};

export default Notes;
