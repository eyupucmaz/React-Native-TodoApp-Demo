import React, {useState} from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Buttons, Inputs} from '../Components';

const AddTodo = () => {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  return (
    <ScrollView>
      <View
        style={{
          alignItems: 'center',
          paddingTop: 30,
          flex: 1,
        }}>
        <Inputs
          placeholder="Title"
          value={title}
          onChangeText={(value) => setTitle(value)}
        />

        <Inputs
          placeholder="Description"
          value={desc}
          onChangeText={(value) => setDesc(value)}
        />

        <Buttons
          text={'Add'}
          onPress={() => {
            // let arr = data.slice();
            // let obj = {
            //   id: data.length,
            //   title,
            //   dsc,
            // };
            // arr.push(obj);
            // setData(arr);
          }}
        />
      </View>
    </ScrollView>
  );
};

export default AddTodo;
