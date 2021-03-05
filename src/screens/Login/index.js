import { StatusBar } from 'expo-status-bar';
import React,  { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Image } from 'react-native';

import styles from "./styles";

import Users from "../../service/Users";

const Login = ({ navigation }) => {
    // --------- Check
    const [username, setUsername] = useState("");
	const [password, setPassword] = useState('');

	const handleLogin = () => {
		if(username.trim() === '' || password.trim() === '') {
			return Alert.alert('tài khoản hoặc mật khẩu không được để trống');
		}
		else {
            if(username === Users.username && password === Users.password) {
                return navigation.navigate('Home');
                // return Alert.alert('Tài khoản hoặc mật khẩu không đúng');
            }
            else {
                return Alert.alert('Tài khoản hoặc mật khẩu không đúng');
                // return navigation.navigate('Home');
            }
        }
	}
    // ---------- screen
    return (
    <View style={styles.container}>
        <Image
			source={require('../../imgs/Logo.png')}
			style={styles.image}
		></Image>
        <TextInput
			style={styles.username}
			placeholder='Username'
			onChangeText={(text) => setUsername(text)}
		></TextInput>
		<TextInput
			style={styles.input}
			placeholder='Password'
			secureTextEntry
			onChangeText={(text) => setPassword(text)}
		></TextInput>

        <TouchableOpacity 
            style={styles.btnLogin}
            onPress={handleLogin}
        >
            <Text style={styles.textLogin}>Login</Text>
        </TouchableOpacity>
    </View>
  );
}

export default Login;