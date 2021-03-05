import { StatusBar } from 'expo-status-bar';
import React,  { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header';

function Detail({ navigation }) {
  return (
    <View style={styles.waper}>
			<Header
				onBack={()=>navigation.navigate('Home')}
				title='Detail'
			></Header>
			<View style={styles.container}>
        <Text>Đấy là trang Detail</Text>
		  </View>
    </View>
  );
}

const styles = StyleSheet.create({
  waper: {
		flex: 1,
	},
	container: {
		padding: 10,
		backgroundColor: '#fff',
		marginVertical: 10,
		marginHorizontal: 10,
		flexDirection: 'row',
		borderRadius: 7,
		overflow: 'hidden',
	},
});


export default Detail;