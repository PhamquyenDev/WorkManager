import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	waper: {
		flex: 1,
	},
	container: {
		flex: 1,
		padding: 10,
		backgroundColor: '#fff',
		marginVertical: 5,
		flexDirection: 'column',
		borderRadius: 7,
		overflow: 'hidden',
	},
	item: {
		marginHorizontal: 16,
		marginVertical: 8
	},
	option: {
        justifyContent:'center',
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
	btnOption: {
        marginTop:50,
        flex:1,
        justifyContent:"center",
        alignItems:'center',
        flexDirection:'row'
    },
    btnDone:{
        flex:1,
        height:40,
        borderRadius: 7,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnCancel:{
        flex:1,
        height:40,
        borderRadius: 7,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles;