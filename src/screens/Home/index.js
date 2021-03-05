import { StatusBar } from 'expo-status-bar';
import React,  { Component } from 'react';
import { Text, View,FlatList, TouchableOpacity } from 'react-native';

import Header from '../../components/Header';
import styles from "./styles";

import data  from '../../service/Works';

function ItemList({ data, onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
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
					<Text>Status: { data.status}</Text>
				</View>
		</TouchableOpacity>
	);
}

function Home({navigation}) {
  return (
		<View style={styles.waper}>
			<Header
// 		trang Home không để onBack về trang login trực tiếp
//        	onBack={()=>navigation.navigate('Login')}
				title='Home'
	  	onPress={()=>navigation.navigate('NewWork')}
			></Header>
			<View style={styles.container}>
        <View style={styles.Options}>
            <View style={styles.today}>
              <TouchableOpacity 
                style={styles.addBtn} 
                onPress={() => {}}>
                <Text style={styles.addText}>Hôm Nay</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.plans}>
            <TouchableOpacity 
                style={styles.addBtn} 
                onPress={() => {}}>
                <Text style={styles.addText}>Dự Kiến</Text>
                </TouchableOpacity>
            </View>
        </View>
        <Text style={styles.listText}>Danh Sách Công Việc</Text>
        <View style={styles.lists}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ItemList 
              data={item}
              onPress={()=>navigation.navigate('Detail')}
          ></ItemList>}
        ></FlatList>
        </View>
      </View>
		</View>
	);
}

export default Home;
