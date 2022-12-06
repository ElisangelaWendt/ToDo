import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    height: 64,
    backgroundColor: '#262626',
    alignItems:'center',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    paddingHorizontal: 18
  },
  text:{
    color: 'white',
    flex:1
  },
  textChecked:{
    color: '#808080',
    flex:1,
    textDecorationLine:"line-through"
  }
});