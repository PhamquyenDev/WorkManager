import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  waper: {
    flex: 1,
    flexDirection: 'column',
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
  Options: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lists: {
    flex: 6,
    width: '100%',
    borderRadius: 10,

  },
  plans: {
    width: '45%',
    height: '80%',
    marginHorizontal: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#567',
  },
  today: {
    width: '45%',
    height: '80%',
    marginHorizontal: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#567',
  },
  addBtn: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnEdit: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#567',
  },
  btnDelete: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  addText: {
    fontSize: 24,
    color: '#000',
  },
  listText: {
    paddingHorizontal: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  content: {
    flex: 1,
    width,
  },
  header: {
    fontSize: 20,
    marginBottom: 10,
  },
  desception: {
    fontSize: 15,
    marginBottom: 10,
  },
  time: {
    fontSize: 15,
    marginBottom: 10,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  optionsBtn: {
    flex: 1,
    width,
    width: '50%',
    flexDirection: 'row',
  },
  items: {
    marginLeft: 10,
    flex: 1,
    paddingVertical: 10,
  },
});

export default styles;