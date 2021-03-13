import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    waper: {
        flex: 1,
        flexDirection: 'column',
      },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 7,
        backgroundColor: '#fff',
        marginVertical: 5,
        alignItems:'center',
        flexDirection: 'column',
    },
    option: {
        width:'100%',
        height:50,
        flexDirection: 'row'
    },
    label:{
        flex: 1,
    },
    input: {
        flex: 3,
        width: 300,
        height: 40,
        backgroundColor: 'rgba(0,0,0,.1)',
        borderRadius: 7,
        fontSize: 20,
        paddingHorizontal: 15,
    },
    btnAdd: {
        width: 300,
        height: 40,
        borderRadius: 7,
        backgroundColor: '#000',
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtAdd: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
    }
});

export default styles;