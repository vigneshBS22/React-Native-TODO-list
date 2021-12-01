import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Item from './Item';
import {useDispatch, useSelector} from 'react-redux';
import {addTask, selectTask} from '../features/TaskSlice';

const Items = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTask);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's tasks</Text>
      {tasks.tasks.length > 0 && (
        <FlatList
          data={tasks.tasks}
          renderItem={({item}) => (
            <Item task={item.task} id={item.id} status={item.status} />
          )}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

export default Items;

const styles = StyleSheet.create({
  container: {
    margin: '10%',
    height: '70%',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
  },
});
