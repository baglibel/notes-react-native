import { TouchableOpacity, TextInput, View, Text, Alert } from 'react-native';
import React, { useState } from 'react';
import { AddNote } from '../services/NoteServices';
import styles from '../styles/style.js';
import colors from '../theme/colors';
const AddNoteScreen = ({ navigation }) => {
  const [note, setNote] = useState({ title: '', content: '' });

  async function AddNote_() {
    const result = await AddNote(note);
    if (result[0] == true) navigation.goBack();
    else Alert.alert('Error', result[1]);
  }

  return (
    <View style={[styles.container, styles.containerHPad]}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        selectionColor={colors.primary}
        onChangeText={(value) => setNote((note) => ({ ...note, title: value }))}
      />
      <TextInput
        style={styles.inputMultiple}
        placeholder="Content"
        multiline
        selectionColor={colors.primary}
        onChangeText={(value) =>
          setNote((note) => ({ ...note, content: value }))
        }
      />
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={() => AddNote_()}
      >
        <Text style={styles.buttonText}>Add Note</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddNoteScreen;
