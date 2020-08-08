import React, {useState} from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Todos = (props) => {
  const [data, setData] = useState([]);

  const renderItem = ({item}) => {
    <View style={style.item}>
      <Text style={style.title}>{item.title}</Text>
      <Text style={style.desc}>{item.desc}</Text>
    </View>;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        style={{flex: 1}}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => {
          return (
            <View style={{alignItems: 'center', marginTop: 20}}>
              <Text style={{fontSize: 20}}>Herhangi bir data bulunamadı.</Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  item: {},
  title: {},
  desc: {},
});

export default Todos;
