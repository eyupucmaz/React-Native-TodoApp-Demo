import React, {useState} from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Text,
  FlatList,
  View,
  StyleSheet,
} from 'react-native';
import {Buttons, Inputs} from './Components';

export default function App() {
  const [title, setTitle] = useState('');
  const [dsc, setDsc] = useState('');
  const [data, setData] = useState([]);

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.dsc}>{item.dsc}</Text>
    </View>
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <FlatList
          style={{flex: 1}}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={() => {
            return (
              <View style={{alignItems: 'center', marginTop: 20}}>
                <Text style={{fontSize: 20}}>
                  Herhangi bir data bulunamadı.
                </Text>
              </View>
            );
          }}
        />

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
            value={dsc}
            onChangeText={(value) => setDsc(value)}
          />

          <Buttons
            text={'Add'}
            onPress={() => {
              let arr = data.slice();
              let obj = {
                id: data.length,
                title,
                dsc,
              };
              arr.push(obj);

              setData(arr);
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
  dsc: {
    fontSize: 14,
    color: 'gray',
  },
});
