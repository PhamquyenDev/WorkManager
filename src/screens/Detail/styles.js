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
	header: {
		fontSize: 18,
		fontWeight: '700'
	},
	info: {
		fontSize: 15
	},
	btnOption: {
        marginTop:50,
        flex:1,
        justifyContent:"center",
        alignItems:'center',
        flexDirection:'row'
    },
    btnDone:{
        width:300,
        height:40,
        borderRadius: 7,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
	txtComplete: {
		color: '#fff',
		fontSize: 17,
		fontWeight: 'bold'
	}
});

export default styles;