import React, {useState} from 'react';
import {View, ScrollView, ActivityIndicator} from 'react-native';
import {Buttons, Inputs} from '../Components';
import {connect, useDispatch} from 'react-redux';
import {updateTodo, loadingTodo} from '../Actions';
import {AsyncStorage} from 'react-native';
import {LOADING_TODO} from '../Actions/Types';

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
          multiline={true}
          style={{backgroundColor: '#f4f4f4', height: 200}}
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
            // dispacth({type: LOADING_TODO, payload: true});
            props.loadingTodo(true);
            setTimeout(() => {
              // dispacth({type: LOADING_TODO, payload: false});
              props.loadingTodo(false);
              props.navigation.pop();
            }, 2000);
          }}
        />
        {props.loading && (
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
  return {todos, loading};
};

export default connect(mapStateToProps, {updateTodo, loadingTodo})(AddTodo);
