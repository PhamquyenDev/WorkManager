import React, { useState, useContext } from 'react';

import { Text, View, TouchableOpacity, Alert } from 'react-native';
import Works from '../../service/Works';
import styles from "./styles";

import { Context } from "../Context";
import Header from '../../components/Header';
//import { useState } from 'react/cjs/react.development';

function Detail({ navigation, route }) {
	
	const { workId } = route.params;
	const work = Works.filter((item) => item.id === workId)[0];

	//	// khi ấn Hoàn thành thì trạng thái đổi sang "Hoàn Thành"
	// const [context, setContext] = useContext(Context);
	const handleComplete = () => {
		// var index = Works.indexOf(workId);
    	// for(let item in Works) {
		// 	if(item.id === workId) {
		// 		item.status = 'Đã Hòn Thành';
		// 	}
		// }
    	return Alert.alert('Đang hoàn thiện chức năng này!!');
	}

	return (
		<View style={styles.waper}>
			<Header
				onBack={() => navigation.goBack()}
				title='Detail'
				onPress={() => navigation.navigate('NewWork')}
			></Header>
			<View style={styles.container}>
				<View style={styles.workDetail}>
					<View style={styles.item}>
						<Text style={styles.header}>Tên Công Việc:</Text>
						<Text style={styles.info}>{work.name}</Text>
					</View>
					<View style={styles.item}>
						<Text style={styles.header}>Chi tiết công việc</Text>
						<Text style={styles.info}>{work.desception}</Text>
					</View>
					<View style={styles.item}>
						<Text style={styles.header}>Thời gian</Text>
						<Text style={styles.info}>{work.datetime}</Text>
					</View>
					<View style={styles.item}>
						<Text style={styles.header}>Tình Trạng</Text>
						<Text style={styles.info}>{work.status}</Text>
					</View>
				</View>
				<View style={styles.btnOption}>
					<TouchableOpacity
						style={styles.btnDone}
						onPress={handleComplete}
					>
						<Text style={styles.text}>Hoàn thành</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

export default Detail;