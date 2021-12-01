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
  Platform,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

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
    <KeyboardAwareScrollView>
      <ScrollView contentContainerStyle={styles.container}>
        <TextInput
          style={styles.inputContainer}
          placeholder="Write a task"
          defaultValue={task.task}
          onChangeText={e => changeHandler(e)}></TextInput>
        {task.task !== '' ? (
          <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
            <Text style={styles.button}>+</Text>
          </TouchableOpacity>
        ) : null}
      </ScrollView>
    </KeyboardAwareScrollView>
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
    textAlign: 'center',
    ...Platform.select({
      ios: {
        padding: 15,
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 15,
      },
      android: {
        padding: 10,
        elevation: 5,
      },
    }),
  },
  buttonContainer: {
    ...Platform.select({
      ios: {
        backgroundColor: 'white',
        height: 60,
        width: 60,
        borderRadius: 40,
        padding: 10,
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 15,
      },
    }),
  },
  button: {
    ...Platform.select({
      ios: {fontSize: 30, textAlign: 'center'},
      android: {
        backgroundColor: 'white',
        textAlign: 'center',
        height: 60,
        width: 60,
        borderRadius: 30,
        padding: 10,
        fontSize: 30,
        margin: 8,
        elevation: 5,
      },
    }),
  },
});
