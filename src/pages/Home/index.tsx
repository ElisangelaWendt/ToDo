import React, { useState } from "react";
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import Task, { concluded } from "../../components/Task";
import { Divider } from "react-native-paper";

export default function Home() {
  const [task, setTask] = useState<string[]>([])
  const [newTask, setNewTask] = useState('')
  const [tasksCreated, setTasksCreated] = useState(0)

  function handleAddTask() {
    setTask(prevState => [...prevState, newTask])
    setTasksCreated(tasksCreated + 1)
    setNewTask('')
  }

  function handleRemoveTask(taskName: string) {
    setTask(prevState => prevState.filter(task => task !== taskName))
    setTasksCreated(tasksCreated - 1)
  }

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/Logo.png')} style={styles.logo} />
      <View style={styles.row}>
        <TextInput onChangeText={setNewTask} style={styles.input} placeholder="Adicione uma nova tarefa" placeholderTextColor="#808080" selectionColor={"#5E60CE"} value={newTask} />
        <TouchableOpacity style={styles.button} onPress={handleAddTask} >
          <Feather name="plus-circle" size={15} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.status}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.textCreated}>Criadas
          </Text>
          <View style={styles.quantity}><Text style={{ color: 'white' }}>{tasksCreated}</Text></View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.textConcluded}>Concluídas</Text>
          <View style={styles.quantity}><Text style={{ color: 'white' }}>{concluded}</Text></View>
        </View>

      </View>
      <Divider style={{ marginBottom: 48 }} />
      <FlatList
        data={task}
        renderItem={({ item }) => (
          <Task key={item} text={item} onRemove={() => handleRemoveTask(item)} />
        )} keyExtractor={item => item}
        ListEmptyComponent={() => (
          <View style={{ alignItems: 'center' }}>
            <Feather name="clipboard" size={40} color="#808080" />
            <Text style={styles.textBold}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.listEmptyText}>Crie tarefas e organize seus itens a fazer</Text>
          </View>
        )}
      />
    </View>
  )
}