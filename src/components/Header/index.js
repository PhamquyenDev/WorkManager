import React, { Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from "./styles";

function Header({ title, onBack, onPress }) {
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
    const addbtn = () => {
        if(onPress === null) {
            return (null);
        }
        return (
            <TouchableOpacity 
                style={styles.addBtn} 
                onPress={onPress}>
                <Text style={styles.addText}>+</Text>
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
    onBack: null,
    onPress: null
}

export default Header;
