import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import StudentList from './src/modules/students/StudentList';
import EditDetails from './src/modules/forms/EditDetails';
import StudentCard from './src/modules/students/StudentCard';

const Stack = createStackNavigator();

const myTheme = {
  dark: true,
  colors: {
    primary: '#002885',
    background: '#222B45',
    text: '#F7F9FC'
  }
};

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <NavigationContainer theme={myTheme}>
        <Stack.Navigator initialRouteName="Student List">
          <Stack.Screen name="Student List" component={StudentList} />
          <Stack.Screen name="Student Details" component={EditDetails} />
          <Stack.Screen name="Student Card" component={StudentCard} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
}

