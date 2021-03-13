import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { TextInput, Text, View, TouchableOpacity } from 'react-native';

import Header from '../../components/Header';
import styles from "./styles";
import Works from '../../service/Works';

function NewWork({ navigation }) {
  // const { userSection } = route.params;
  const [name, setName] = useState('');
  const [desception, setDesception] = useState('');
  const [datetime, setDatetime] = useState('');

  // thêm công việc mơi vào Json Service
  const addNewWork = () => {
    if (name.trim() === '' || desception.trim() === '' || datetime.trim() === '') {
      return Alert.alert('Trường dữ liệu không được để trống!!');
    }
    else {
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
            placeholder='Tên Công việc'
            onChangeText={(text) => setName(text)}
          ></TextInput>
        </View>

        <View style={styles.option}>
          <Text style={styles.label}>Desception:</Text>
          <TextInput
            style={styles.input}
            placeholder='Mô tả'
            onChangeText={(text) => setDesception(text)}

          ></TextInput>
        </View>

        <View style={styles.option}>
          <Text style={styles.label}>Date</Text>
          <TextInput
            style={styles.input}
            placeholder='Ngày thục hiện'
            textContentType={Date}
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
          onChangeText={(text) => setUserId(text)}
        ></TextInput>
      </View> */}

        <TouchableOpacity
          style={styles.btnAdd}
          onPress={addNewWork}
        >
          <Text style={styles.txtAdd}>Thêm</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default NewWork;