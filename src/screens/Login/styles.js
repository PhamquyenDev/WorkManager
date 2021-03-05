import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
          width: 300,
          height: 40,
          backgroundColor: 'rgba(0,0,0,.1)',
          borderRadius: 7,
          fontSize: 20,
          paddingHorizontal: 15,
      },
      username: {
          marginBottom: 10,
          width: 300,
          height: 40,
          backgroundColor: 'rgba(0,0,0,.1)',
          borderRadius: 7,
          fontSize: 20,
          paddingHorizontal: 15,
      },
    btnLogin: {
      width: 300,
      height: 40,
      borderRadius: 7,
      backgroundColor: '#000',
      marginTop: 50,
      justifyContent: 'center',
      alignItems: 'center'
    },
    image: {
      marginBottom: 20,
      justifyContent: 'center',
      borderRadius: 50,
      width: 150, height: 150,
    },
    textLogin: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
    }
  });
  
export default styles;