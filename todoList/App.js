import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* Today's tasks */}
      <View style={styles.tasksWrapper}> 
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
      
        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          <Task text={'Task 1'} />
          <Task text={'Task 2'}/>
          <Task text={'Task 3'}/>
          <Task text={'Task 4'}/>
          <Task text={'Task 5'}/>
        </View>

      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    marginBottom : 60,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'extra-bold',
    color: '#333333', 
  },
  items: {
    marginTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
});
