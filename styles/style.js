import { StyleSheet } from 'react-native';
import colors from '../theme/colors';
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  containerHPad: {
    paddingHorizontal: 10,
  },
  scrollview: {
    paddingHorizontal: '4%',
    width: '100%',
    paddingTop: 15,
    marginBottom: 10,
  },
  input: {
    backgroundColor: colors.secondary,
    color: colors.primary,
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 20,
  },
  inputMultiple: {
    backgroundColor: colors.secondary,
    color: colors.primary,
    width: '100%',
    padding: 10,
    height: '50%',
    textAlign: 'left',
    textAlignVertical: 'top',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 15,
  },
  button: {
    height: 50,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    width: '80%',
  },
  buttonSmall: {
    width: '40%',
  },
  buttonText: {
    color: colors.primary,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 10,
  },
  noNoteText: {
    color: '#bababa',
    fontSize: 50,
    opacity: 0.5,
  },
  note: {
    width: '100%',
    backgroundColor: '#bababa',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    flexDirection: 'column',
    gap: 5,
    paddingBottom: 15,
    marginBottom: 15,
  },
  noteTitle: {
    color: '#333',
    textAlign: 'left',
    fontSize: 25,
    fontWeight: '500',
    paddingBottom: 5,
    borderBottomColor: '#333',
    borderBottomWidth: 0.2,
  },
  noteContent: {
    color: '#333',
    textAlign: 'left',
    fontSize: 15,
    paddingVertical: 5,
  },
});

export default styles;
