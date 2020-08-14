import React, {useState} from 'react';
import {View, ScrollView, ActivityIndicator} from 'react-native';
import {Buttons, Inputs} from '../Components';
import {connect, useDispatch} from 'react-redux';
import {updateTodo, loadingTodo} from '../Actions';

const AddTodo = (props) => {
  const dispacth = useDispatch();
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
            props.updateTodo(obj);
            props.loadingTodo(true);
            setTimeout(() => {
              props.loadingTodo(false);
              props.navigation.pop();
            }, 2000);
          }}
        />
        {props.IsLoading && (
          <ActivityIndicator
            size="large"
            color="#BA3F1D"
            style={{marginTop: 20}}
          />
        )}
      </View>
    </ScrollView>
  );
};

const mapStateToProps = ({todoResponse}) => {
  const {todos, loading} = todoResponse;
  console.log('data', todos, loading);
  return {todos, loading};
};

export default connect(mapStateToProps, {updateTodo, loadingTodo})(AddTodo);
