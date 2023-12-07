import { TouchableOpacity, Text, View, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { DeleteNote, EditNote } from '../services/NoteServices';
import styles from '../styles/style.js';
import colors from '../theme/colors';
const EditNoteScreen = ({ navigation, route }) => {
  const [note, setNote] = useState({ id: '', title: '', content: '' });

  const editNote = async () => {
    await EditNote(note.id, note);
    navigation.goBack();
  };
  const deleteNote = async () => {
    await DeleteNote(note.id);
    navigation.goBack();
  };

  useEffect(() => {
    setNote(route.params.note);
  }, []);

  return (
    <View style={[styles.container, styles.containerHPad]}>
      <TextInput
        value={note.title}
        style={styles.input}
        placeholder="Title"
        selectionColor={colors.primary}
        onChangeText={(value) => setNote((note) => ({ ...note, title: value }))}
      />
      <TextInput
        value={note.content}
        style={styles.inputMultiple}
        placeholder="Content"
        multiline
        selectionColor={colors.primary}
        onChangeText={(value) =>
          setNote((note) => ({ ...note, content: value }))
        }
      />
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.button,
            styles.buttonSmall,
            { backgroundColor: 'tomato' },
          ]}
          onPress={() => deleteNote()}
        >
          <Text style={styles.buttonText}>Delete Note</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.button, styles.buttonSmall]}
          onPress={() => editNote()}
        >
          <Text style={styles.buttonText}>Edit Note</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditNoteScreen;
