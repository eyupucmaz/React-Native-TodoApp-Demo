import * as React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AddTodo from './Screens/AddTodo';
import Todos from './Screens/Todos';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'black',
          headerStyle: {backgroundColor: '#CFCFCF'},
        }}
        initialRouteName="Todos">
        <Stack.Screen
          name="Todos"
          component={Todos}
          options={({navigation, route}) => ({
            title: 'Todo List',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Add')}
                style={{
                  marginRight: 30,
                }}>
                <Image
                  style={{height: 30, width: 30}}
                  source={require('./images/file.png')}
                />
              </TouchableOpacity>
            ),
            cardStyle: {backgroundColor: 'white'},
          })}
        />
        <Stack.Screen
          name="Add"
          component={AddTodo}
          options={{title: 'Add Todo', cardStyle: {backgroundColor: 'white'}}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
