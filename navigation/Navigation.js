import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Button } from 'react-native';
import Notes from '../screens/Notes';
import EditNote from '../screens/EditNote';
import AddNote from '../screens/AddNote';
const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Notes"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#bababa',
          },
          headerTitleStyle: {
            color: '#333',
          },
          animation: 'fade_from_bottom',
        }}
      >
        <Stack.Screen
          options={({ navigation }) => ({
            headerRight: () => HomeButtons(navigation),
          })}
          name="Notes"
          component={Notes}
        />
        <Stack.Screen name="EditNote" component={EditNote} />
        <Stack.Screen name="AddNote" component={AddNote} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeButtons(navigation) {
  return (
    <View>
      <Button
        color={'#333'}
        onPress={() => navigation.navigate('AddNote')}
        title="Add"
      />
    </View>
  );
}

export default Navigation;
