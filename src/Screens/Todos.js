import React, {useState, useEffect} from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Buttons} from '../Components/Button';

const Todos = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log('Gelen Depğer: ', props.route.params?.obj);

    if (props.route.params?.obj) {
      let arr = data.slice();
      arr.push(props.route.params?.obj);
      setData(arr);
    }
  }, [props.route.params?.obj]);

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.dsc}>{item.desc}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        style={{flex: 1}}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        ListEmptyComponent={() => {
          return (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20,
                height: 300,
              }}>
              <Text style={{fontSize: 16, marginBottom: 15}}>
                Can not find any todo, please add new
              </Text>
              <Buttons
                text={'Add New'}
                onPress={() => {
                  props.navigation.navigate('Add', {data});
                }}
              />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#cfcfcf',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: 'black',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dsc: {
    fontSize: 16,
    color: 'black',
  },
});

export default Todos;
