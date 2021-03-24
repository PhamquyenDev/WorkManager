import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from 'react';
import { TextInput, Text, View, TouchableOpacity, Alert } from 'react-native';

import Header from '../../components/Header';
import styles from "./styles";
import Works from '../../service/Works';
import { Context } from "../Context";

function NewWork({ navigation, props }) {
  
  const [name, setName] = useState('');
  // const [userID, setUserID] = useState('');
  const [desception, setDesception] = useState('');
  const [datetime, setDatetime] = useState('');

  // const [context, setContext] = useContext(Context);

  // thêm công việc mơi vào Service
  const handleAddNewWork = () => {
    if (name.trim() === '' || desception.trim() === '' || datetime.trim() === '') {
      return Alert.alert('Trường dữ liệu không được để trống!!');
    }
    else {
      // setContext((state) => [
      //   ...state,
      //   {
      //     id: context.length + 1,
      //     remark: title,
      //     timeCreate: currentTime,
      //     list: listTodo,
      //   },
      // ]);
      Works.push({
        id: Math.floor(Math.random() * 1001),
        userId: "admin",
        name: name,
        desception: desception,
        datetime: datetime,
        status: 'chưa Hoàn thành'
      });
      return Alert.alert('Thêm mới thành công!!');
    }
  }
  return (
    <View style={styles.waper}>
      <Header
        onBack={() => navigation.goBack()}
        title='Công việc mới'
      ></Header>
      <View style={styles.container}>
        <View style={styles.option}>
          <Text style={styles.label}>Title:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setName(text)}
          ></TextInput>
        </View>

        <View style={styles.option}>
          <Text style={styles.label}>Desception:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setDesception(text)}
          ></TextInput>
        </View>

        <View style={styles.option}>
          <Text style={styles.label}>Date:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setDatetime(text)}
          ></TextInput>
        </View>

        {/* công việc của ai?? */}
        {/* <View style={styles.option}>
          <Text style={styles.label}>Staff</Text>
          <TextInput
            style={styles.input}
            placeholder='Nhân Viên'
            value={userSection}
          ></TextInput>
        </View> */}

        <View style={styles.btnOption}>
          <TouchableOpacity
            style={styles.btnDone}
            onPress={handleAddNewWork}
          >
            <Text style={styles.text}>thêm</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default NewWork;