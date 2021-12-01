import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {deleteTask, changeStatus} from '../features/TaskSlice';

const Item = ({task, id, status}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <BouncyCheckbox
          size={25}
          fillColor="lightseagreen"
          unfillColor="#FFFFFF"
          iconStyle={{borderColor: 'lightseagreen', borderRadius: 1}}
          onPress={() => {
            dispatch(changeStatus({id}));
          }}
        />
        <Text
          style={[
            styles.task,
            status === true && {
              textDecorationLine: 'line-through',
              opacity: 0.5,
            },
          ]}>
          {task}
        </Text>
      </View>
      <View>
        <Icon
          name="remove"
          onPress={() => {
            dispatch(deleteTask({id}));
          }}
          size={20}
        />
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 5,
  },
  task: {
    fontSize: 18,
    maxWidth: '80%',
  },
});
