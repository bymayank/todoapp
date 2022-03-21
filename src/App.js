
import React, {useState, useEffect} from 'react';
import './App.css';
import List from "./list";
import Todoss from "./todo";

function App() {
    const [todos, setTodos] = useState([]);
    
    const addTodo = (todo) => {
      const date=new Date().getMilliseconds();
        setTodos([...todos, {id:date, text:todo, isCompleted:false}] );
    };

    const markComplete = (id) => {
        let newTodos = todos;
        const newlist = newTodos.map(task => {
          if( task.id === id){
            task.isCompleted = !task.isCompleted;
            return task;
          }
          return task;
        })
        // newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newlist);
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