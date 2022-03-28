import React from 'react';
import {
   StyleSheet,
   Text, 
   View, 
   Button,
   SafeAreaView, 
   TextInput, 
   TouchableOpacity,
   FlatList,
   Alert
  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { API, graphqlOperation } from 'aws-amplify';
import { createTodo } from '../src/graphql/mutations';
import { deleteTodo } from '../src/graphql/mutations';
import {listTodos} from '../src/graphql/queries';


const initialState = { name: '', description: '' }

export default function TodoList({ navigation }) {
  const [formState, setFormState] = React.useState(initialState)
  const [todos, setTodos] = React.useState([])

  React.useEffect(() => {
    fetchTodos()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listTodos))
      const todos = todoData.data.listTodos.items
      setTodos(todos)
    } catch (err) { console.log('error fetching todos') }
  }

  async function addTodo() {
    try {
      const todo = { ...formState }
      setTodos([...todos, todo])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createTodo, {input: todo}))
    } catch (err) {
      console.log('error creating todo:', err)
    }
  }

  const deleteTodos = async todoId => {
    const newTodosItem = await API.graphql(graphqlOperation(deleteTodo, {input: todoId}))
    setTodos(newTodosItem);
  };

  const ListItem = ({todo}) => {
    return (
      <View style={styles.listItem}>
        <View style={{flex: 1}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              color: '#000000',
              textDecorationLine: todo?.completed ? 'line-through' : 'none',
            }}>
            {todo?.name}
          </Text>
        </View>
        {!todo?.completed && (
          <TouchableOpacity onPress={() => markTodoComplete(todo.id)}>
            <View style={[styles.actionIcon, {backgroundColor: 'green'}]}>
              <Icon name="done" size={20} color="white" />
            </View>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => deleteTodos(todo.id)}>
          <View style={styles.actionIcon}>
            <Icon name="delete" size={20} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View style={styles.header}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: '#55BCF6',
          }}>
          TODO APP
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 20, paddingBottom: 100}}
        data={todos}
        renderItem={({item}) => <ListItem todo={item} />}
      />

      <View style={styles.inputRow}>
        <View style={styles.inputContainer}>
          <TextInput
            value={formState.name}
            placeholder="Add Todo"
            onChangeText={val => setInput('name', val)}
          />
        </View>
        <TouchableOpacity onPress={addTodo}>
          <View style={styles.iconContainer}>
            <Icon name="add" color="white" size={30} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 20 
  },
  todo: {  
    marginBottom: 15 
  },
  input: { 
    height: 50, 
    backgroundColor: '#ddd', 
    marginBottom: 10, 
    padding: 8 
  },
  todoName: { 
    fontSize: 18 
  },
    actionIcon:{
      height: 25,
      width: 25,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'green',
      borderRadius: 5,
      margin: 3,
    },
    ContainerWrapper:{
      paddingTop: 80,
      paddingHorizontal: 20,
    },
    header:{
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    inputRow:{
      position: 'absolute',
      color: '#fff',
      width: '100%',
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: 20,
      bottom: 0,
  
    },
    inputContainer:{
       backgroundColor: '#fff',
       flex: 1,
       height: 50,
       elevation: 40,
       marginRight: 20,
       borderRadius: 30,
       marginVertical: 20,
       paddingHorizontal: 20,
    },
    iconContainer:{
      height: 50,
      width: 50,
      backgroundColor: '#55BCF6',
      borderRadius: 25,
      elevation: 20,
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    listItem:{
      flexDirection: 'row',
      padding: 20,
      backgroundColor: '#fff',
      borderRadius: 5,
      marginVertical: 10,
      elevation: 12,
    },
  
  });
  