import React, {useState, useEffect} from 'react';
import './App.css';
import List from "./list";
import Todoss from "./todo";

function App() {
    const [todos, setTodos] = useState([]);
    
    const addTodo = (todo) => {
        setTodos([...todos, {text:todo}] );
    };

    const markComplete = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
    };
    const [todoRemaining, setRemaining] = useState(0);
    useEffect(() => { setRemaining(todos.filter(task => !task.isCompleted).length) });



    const remove = (i) => {
      const removed = todos.filter((t, index) => i !== index);

      setTodos(removed);
    }


    return (
      
          <div className="container top-container">
                  <div className="todoform">
                      <List addTodo={addTodo} />
                    
                      <div style={{marginBottom:'10px', color:'Black', fontSize:'20px'}} >Pending tasks #{todoRemaining}</div>
                      <Todoss todos={todos} markComplete={markComplete} remove={remove}/>

                  </div>
          </div>
    );
}

export default App;