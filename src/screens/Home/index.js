import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, ScrollView, Alert } from 'react-native';

import Header from '../../components/Header';
import styles from "./styles";

import Works from '../../service/Works';


function ItemList({ navigation, route, data }) {

  const { userSection } = route.params;
  // const [data, setData] = useState('');
  // const data = Works.filter((item) => item.userId === userSection);
  // console.log(data);
  
  // sự kiện cho nút Xóa dữ liệu
  const handleDelete = ({ itemId }) => {
    var index = Works.indexOf(itemId);
    Works.splice(index, 1);
    return Alert.alert('Xóa thành công!!');
  }

  return (
    <View style={styles.items}>
      {/* sử dụng scrollView khi vuốt ngang se xuất hiện 2 option Sưa và xóa */}
      <ScrollView
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        horizontal={true}
      >
        <TouchableOpacity onPress={() => navigation.navigate('Detail', {
          workId: data.id
        })}>
          <View style={styles.contentContainer}>
            <View style={styles.content}>
              <Text style={styles.header} numberOfLines={2}>
                {data.name}
              </Text>
              <Text style={styles.desception} numberOfLines={2}>
                desception: {data.desception}
              </Text>
              <Text style={styles.time}>
                Time: {data.datetime}
              </Text>
              <Text>Status: {data.status}</Text>
            </View>
            <View style={styles.optionsBtn}>
              {/* nút sửa */}
              <TouchableOpacity
                style={styles.btnEdit}
                onPress={() => { navigation.navigate('Editor', {
                  workId: data.id
                }) }}>
                <Text style={styles.addText}>Sửa</Text>
              </TouchableOpacity>
              <Text></Text>
              {/* nút xóa */}
              <TouchableOpacity
                style={styles.btnDelete}
                onPress={handleDelete(data.id)}>
                <Text style={styles.addText}>Xóa</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

function Home({ navigation, route }) {

  return (
    <View style={styles.waper}>
      <Header
        //        onBack={()=>navigation.navigate('Login')}
        title='Home'
        onPress={() => navigation.navigate('NewWork')}
      ></Header>
      <View style={styles.container}>
        <View style={styles.Options}>
          {/* lấy list danh sách công việc của ngày hôm đó */}
          <View style={styles.today}>
            <TouchableOpacity
              style={styles.addBtn}
              onPress={() => { }}>
              <Text style={styles.addText}>Hôm Nay</Text>
            </TouchableOpacity>
          </View>
          {/* lấy list danh sách công việc của những ngày tiếp theo */}
          <View style={styles.plans}>
            <TouchableOpacity
              style={styles.addBtn}
              onPress={() => { }}>
              <Text style={styles.addText}>Dự Kiến</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* list danh sách tất cả các công việc */}
        <TouchableOpacity
          onPress={() => { }}>
          <Text style={styles.listText}>Danh Sách Công Việc</Text>
        </TouchableOpacity>
        <View style={styles.lists}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={Works}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) =>
              <ItemList
                data={item}
                route={route}
                navigation={navigation}
              ></ItemList>}>
          </FlatList>
        </View>
      </View>
    </View>
  );
}

export default Home;