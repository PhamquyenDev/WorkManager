import { StatusBar } from 'expo-status-bar';
import React,  { Component, useState, useContext, createContext } from 'react';

import Context from './src/screens/Context';
import Navigation from "./src/navigation";

const App = () => {
  const [context, setContext] = useState([])
  
  return (
    <Context.Provider value = {[context, setContext]}>
        <Navigation></Navigation>
    </Context.Provider>
  );
}

export default App;