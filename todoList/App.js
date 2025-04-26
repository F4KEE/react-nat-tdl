import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
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

      {/* Write a task */}
      
      <KeyboardAvoidingView
        behavior='{Platform.OS === "ios" ? "padding" : "height"}'
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a Task'} />
        
      <TouchableOpacity>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
        
      </KeyboardAvoidingView>
      

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
  writeTaskWrapper : {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 60,
    borderWidth: 1,
    shadowColor: '#808080',
  },

  input : {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,    
    width: 250,
  },

  addWrapper : {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#808080',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5, 
    
  },
  
  addText : {},
  });
