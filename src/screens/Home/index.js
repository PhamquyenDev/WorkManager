import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';

import Header from '../../components/Header';
import styles from "./styles";

//import Works from '../../service/Works';
import data from '../../service/Works';

function ItemList({ navigation, data }) {
  // const { userSection } = route.params;
  // const work = Works.filter((item) => item.userId === userSection);
  return (
    <View style={styles.items}>
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
              <TouchableOpacity
                style={styles.btnEdit}
                onPress={() => { }}>
                <Text style={styles.addText}>Sửa</Text>
              </TouchableOpacity>
              <Text></Text>
              <TouchableOpacity
                style={styles.btnDelete}
                onPress={() => { }}>
                <Text style={styles.addText}>Xóa</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

function Home({ navigation }) {
  return (
    <View style={styles.waper}>
      <Header
        //        onBack={()=>navigation.navigate('Login')}
        title='Home'
        onPress={() => navigation.navigate('NewWork')}
      ></Header>
      <View style={styles.container}>
        <View style={styles.Options}>
          <View style={styles.today}>
            <TouchableOpacity
              style={styles.addBtn}
              onPress={() => { }}>
              <Text style={styles.addText}>Hôm Nay</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.plans}>
            <TouchableOpacity
              style={styles.addBtn}
              onPress={() => { }}>
              <Text style={styles.addText}>Dự Kiến</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => { }}>
          <Text style={styles.listText}>Danh Sách Công Việc</Text>
        </TouchableOpacity>
        <View style={styles.lists}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) =>
              <ItemList
                data={item}
                //  route={route}
                navigation={navigation}
              ></ItemList>}>
          </FlatList>
        </View>
      </View>
    </View>
  );
}

export default Home;