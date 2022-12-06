import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    paddingHorizontal: 24
  },
  logo:{
    alignSelf:'center',
    justifyContent:'center',
    marginTop: 70
  },
  input:{
    backgroundColor: '#262626',
    height: 54,
    flex: 1,
    marginRight: 4,
    color: 'white',
    padding: 15,
    borderColor:'#5E60CE',
    borderWidth: 1,
    borderRadius:6
  },
  row:{
    flexDirection: 'row',
    marginVertical: 40
  },
  button:{
    backgroundColor: '#1E6F9F',
    width: 52,
    height: 52,
    justifyContent:'center',
    borderRadius: 6
  },
  icon:{
    color: "white",
    alignSelf:'center',
    
  },
  listEmptyText:{
    color:'#808080',
  },
  textBold:{
    color:'#808080',
    fontWeight: 'bold',
    marginTop: 16
  },
  status:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  textCreated:{
    color:'#4EA8DE',
    alignItems: 'center',
    marginRight: 8
  },
  textConcluded:{
    color: "#8284FA",
    marginRight: 8
  },
  quantity:{
    backgroundColor: '#333333',
    height: 19,
    minWidth: 25,
    alignItems:'center',
    borderRadius:99
  }
});