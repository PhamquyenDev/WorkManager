import React, { useState, useContext } from 'react';

import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import Works from '../../service/Works';
import styles from "./styles";

import { Context } from "../Context";
import Header from '../../components/Header';
//import { useState } from 'react/cjs/react.development';

function Editor({ navigation, route }) {

    const [name, setName] = useState('');
    // const [userID, setUserID] = useState('');
    const [desception, setDesception] = useState('');
    const [datetime, setDatetime] = useState('');

    const { workId } = route.params;
    const work = Works.filter((item) => item.id === workId)[0];

    //	// khi ấn Hoàn thành thì trạng thái đổi sang "Hoàn Thành"
    // const [context, setContext] = useContext(Context);
    const handleComplete = () => {
    //     let index = Works.indexOf(workId);
    //     const [data, setData] = useState('');
    //     setData = {
    //         // userId: "admin",
    //         name: name,
    //         desception: desception,
    //         datetime: datetime,
    //         status: 'chưa Hoàn thành'
    //     }
    //     Works.splice(index, 1, data);
    //     // setdata('');
        return Alert.alert('Đang hoàn thiện chức năng này!!');
    }

    return (
        <View style={styles.waper}>
            <Header
                onBack={() => navigation.goBack()}
                title='Editor'
            ></Header>
            <View style={styles.container}>
                <View style={styles.option}>
                    <Text style={styles.label}>Title:</Text>
                    <TextInput
                        style={styles.input}
                        value={work.name}
                        onChangeText={(text) => setName(text)}
                    ></TextInput>
                </View>

                <View style={styles.option}>
                    <Text style={styles.label}>Desception:</Text>
                    <TextInput
                        style={styles.input}
                        defaultValue={work.desception}
                        onChangeText={(text) => setDesception(text)}
                    ></TextInput>
                </View>

                <View style={styles.option}>
                    <Text style={styles.label}>Date:</Text>
                    <TextInput
                        style={styles.input}
                        defaultValue={work.datetime}
                        onChangeText={(text) => setDatetime(text)}
                    ></TextInput>
                </View>
                {/* button hoàn thành hoặc hủy bỏ */}
                <View style={styles.btnOption}>
                    <TouchableOpacity
                        style={styles.btnDone}
                        onPress={handleComplete}
                    >
                        <Text style={styles.text}>Xong</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.btnCancel}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.text}>Hủy</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Editor;