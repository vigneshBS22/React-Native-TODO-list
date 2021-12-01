import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addTask, selectTask} from '../features/TaskSlice';
// import {Shadow} from 'react-native-shadow-2';
//elevation
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export const InputBox = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTask);
  const [task, setTask] = useState({
    id: tasks.tasks.length + 1,
    task: '',
    status: false,
  });

  const changeHandler = value => {
    setTask({...task, task: value});
  };

  const onPress = () => {
    dispatch(addTask(task));
    setTask({id: tasks.tasks.length + task.task, task: '', status: false});
  };

  return (
    // <Shadow>
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.inputContainer}
        placeholder="Write a task"
        defaultValue={task.task}
        onChangeText={e => changeHandler(e)}></TextInput>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.button}>+</Text>
      </TouchableOpacity>
    </ScrollView>
    // </Shadow>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '10%',
  },
  inputContainer: {
    flex: 0.95,
    backgroundColor: 'white',
    borderRadius: 20,
    alignSelf: 'center',
    padding: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'white',
    textAlign: 'center',
    height: 60,
    width: 60,
    borderRadius: 30,
    padding: 10,
    fontSize: 30,
  },
});
