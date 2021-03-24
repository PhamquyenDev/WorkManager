import React, {Component} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Login from "../screens/Login";
import Detail from "../screens/Detail";
import NewWork from "../screens/NewWork";
import Editor from "../screens/Editor";

const Stack = createStackNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
      	    <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Detail" component={Detail} />
                <Stack.Screen name="NewWork" component={NewWork} />
                <Stack.Screen name="Editor" component={Editor} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;