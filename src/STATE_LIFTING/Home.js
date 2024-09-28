import React,{useState} from 'react'
import Todos from './Todos'
import NewTodo from './NewTodo'

const dummytodos =["todo1","todo2"]
function Home() {
  const [todos,setTodos]=useState(dummytodos)

const handleNewTodo=(newTodo)=>{
    // console.log(newTodo)
    setTodos([ ...todos, newTodo])
}

  return (
    <div>
      <NewTodo onTodo={ handleNewTodo} />
      <Todos todos={todos}/>
    </div>
  )
}

export default Home;



