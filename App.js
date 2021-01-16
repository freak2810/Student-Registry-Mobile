import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Text } from '@ui-kitten/components';
import StudentCard from './src/modules/students/StudentCard';
import StudentList from './src/modules/students/StudentList';
import EditDetails from './src/modules/forms/EditDetails';

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      {/* <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View> */}
      {/* <StudentList /> */}
      {/* <StudentCard /> */}
      <EditDetails />
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
