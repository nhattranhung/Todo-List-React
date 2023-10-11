/*
* Main App screen
* @author tranhungnhat
*/

import React, {useState} from 'react';
// import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, StatusBar, Appearance } from 'react-native';
import Task from './components/Task';

export default function App() {
  
  StatusBar.setBarStyle('light-content', true);

  // useState for handleAddTask function
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  //add task func
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  //delete task func
  const deleteTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }


  return (
    <View style={styles.container}>

      {/* ScrollView for scrollable app */}
      <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'>

      {/* Main title and main screen */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>To-Do App by NhatTH</Text>
        <View style={styles.items}>
          {/* Display the tasks */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity
                style = {styles.container}
                key={index}
                onLongPress={() => deleteTask(index)}>
                  <Task key={index} text={item} />
                </TouchableOpacity>
              )
            })
          }

        </View>
      </View>
      </ScrollView>
      
      {/* Add task UI part */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Add a task'}
          value={task} onChangeText={text => setTask(text) } 
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

//StyleSheet for the Dark/Light-Mode
const darkMode = {
  backgroundColor: '#1D3557',
  primaryColor: '#F1FAEE',
  secondaryColor: '#A8DADC',
  accentColor: '#E63946',
};

const lightMode = {
  backgroundColor: '#F1FAEE',
  primaryColor: '#457B9D',
  secondaryColor: '#1D3557',
  accentColor: '#E63946',
};

// Get the current Dark/Light-Mode

let theme = Appearance.getColorScheme();
if (theme === 'dark') {
  currentTheme = darkMode;
  console.log('Dark mode is on');
}
else {
  currentTheme = lightMode;
  console.log('Light mode is on');
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: currentTheme.backgroundColor,
  },

  tasksWrapper: {
    paddingTop: 75,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    paddingBottom: 30,
    color: theme.primaryColor,
  },

  writeTaskWrapper: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: '80%',
    height: 60,
    backgroundColor: currentTheme.primaryColor,
    borderRadius: 60,
    borderColor: currentTheme.secondaryColor,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 7,},
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },

  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: currentTheme.accentColor,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 7,},
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },

  addText: {
    fontSize: 30,
    color: currentTheme.primaryColor,
    fontWeight: 'bold',
    alignSelf: 'center',
  },

});
