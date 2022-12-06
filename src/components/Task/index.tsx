import { Text, View } from "react-native";
import { styles } from "./styles";
import { Checkbox } from "react-native-paper";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";

interface TaskProps{
  text: string,
  onRemove: () => void;
}

export var concluded = 0;

export default function Task({text, onRemove}: TaskProps){
  const [isChecked, setIsChecked] = useState(false)

  function check(){
    if(isChecked){
      setIsChecked(false)
      concluded = concluded - 1
    }else{
      setIsChecked(true)
      concluded = concluded + 1
    }
  }

  return(
    <View style={styles.container} >
      <Checkbox status={isChecked ? 'checked' : 'unchecked'} onPress={check} color="#5E60CE" uncheckedColor="#4EA8DE" />
      {isChecked ?
      <Text style={styles.textChecked}>{text}</Text>
      :
      <Text style={styles.text}>{text}</Text>
    }
      <Feather name="trash-2" size={14} color="#808080" onPress={onRemove} />
    </View>
  )
}