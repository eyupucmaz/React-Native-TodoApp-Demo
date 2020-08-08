import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {Buttons, Inputs} from '../Components';

const AddTodo = (props) => {
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
          style={{backgroundColor: '#f4f4f4'}}
          onChangeText={(value) => setTitle(value)}
        />

        <Inputs
          placeholder="Description"
          value={desc}
          style={{backgroundColor: '#f4f4f4'}}
          onChangeText={(value) => setDesc(value)}
        />

        <Buttons
          text={'Add'}
          onPress={() => {
            let obj = {
              title,
              desc,
            };
            console.log('Params:', obj);
            props.navigation.navigate('Todos', {obj});
          }}
        />
      </View>
    </ScrollView>
  );
};

export default AddTodo;
