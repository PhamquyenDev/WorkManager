import React, { Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from "./styles";
import NewWork from "../../screens/NewWork";

const addbtn = (onPress) => {
    return (
        <TouchableOpacity 
            style={styles.addBtn} 
            onPress={onPress}>
            <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
    );
}


function Header({ title, onBack }) {
    const checkBackBtn = () => {
        if(onBack === null) {
            return (null);
        }

        else return (
                <TouchableOpacity style={styles.backBtn} onPress={onBack}>
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
        );

    }

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                {checkBackBtn()}
                <Text style={styles.title}>
                    {title}
                </Text>
                {addbtn()}
            </View>
        </SafeAreaView>
    );
}

Header.defaultProps = {
    title: 'Header',
    onBack: null
}

export default Header;