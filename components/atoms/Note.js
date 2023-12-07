import { Text, TouchableOpacity } from 'react-native';
import styles from '../../styles/style';
const Note = ({ note, onPress }) => {
  return (
    <TouchableOpacity
      onLongPress={onPress}
      style={styles.note}
      activeOpacity={0.85}
    >
      <Text style={styles.noteTitle}>{note.title}</Text>
      <Text numberOfLines={5} style={styles.noteContent}>
        {note.content}
      </Text>
    </TouchableOpacity>
  );
};

export default Note;
