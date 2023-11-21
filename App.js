
import React, {useState} from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import Task from './components/Task';
import { TouchableOpacity } from 'react-native-web';



export default function App() {
  const[task, setTask] = useState();
  const[taskItems, setTaskItems] = useState([]);
  const handleAddTask =() =>{
    setTaskItems([...taskItems, task])
    setTask(null);
  }
  const completeTask = (index) =>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);


  }

  return (
    <View style = {styles.container}>
      {/*today task*/}
      <View style = {styles.tasksWrapper}>
        <Text style= {styles.sectionTitle} >Today's Task</Text>

        <View style={styles.items}>
        {/*this is where the task go*/}
        {
          taskItems.map((item, index) =>{
            return (
              <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                <Task text={item} />

              </TouchableOpacity>
            )
            
          })
        }
        
        </View>

       </View>
     {/*Write a task*/}
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? 'padding' : 'height'}
      style={styles.writeTaskWrapper}
    >
      <TextInput style={styles.input} placeholder ={'What need to be done today?'} value={task} onChangeText={text =>setTask(text)} />
      <TouchableOpacity onPress={() => handleAddTask()}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>


    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex :1,
    backgroundColor :'#E8EAED',
  },

  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,

  },
  sectionTitle: {
    fontSize : 24,
    fontWeight: 'bold',

  },
  items: {
    marginTop: 30,

  },

  writeTaskWrapper :{
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  input :{
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    width: 250,
    borderWidth: 1,


  },
  addWrapper :{
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,



  },
  addText :{},

});

