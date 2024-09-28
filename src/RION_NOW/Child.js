import React,{useState} from 'react'

const Child = (props) => {
    const [todo,setTodo]=useState("")

    const handleInput=(e)=>{
        setTodo(e.target.value)

    }
    const handleFormSubmit=(e)=>{
        e.preventDefault()
         props.todos(todo)
    }
  return (
    <form onSubmit={handleFormSubmit}>
        <label>Todo Input:</label>
        <input type="text" 
        name="todo"
         id="todo"
         value={todo}
         onChange={handleInput}

         >

         </input>
         <button>Add Todo</button>
    </form>
  )
}

export default Child;
