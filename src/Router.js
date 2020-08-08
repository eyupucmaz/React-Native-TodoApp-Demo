import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AddTodo from './Screens/AddTodo';
import Todos from './Screens/Todos';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Todos"
          component={Todos}
          options={{title: 'My Todos'}}
        />
        <Stack.Screen
          name="Add"
          component={AddTodo}
          options={{title: 'Add Todo'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
