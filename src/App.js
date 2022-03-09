import React, {useState} from 'react';
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

    const remove = (i) => {
      const removearr = todos.filter((t, index) => i !== index);

      setTodos(removearr);
    }


    return (
      <div className="parent-container">
          <div className="container top-container">
              <div className="app">
                  <div className="todoform">
                      <List addTodo={addTodo} />
                      <Todoss todos={todos} markComplete={markComplete} remove={remove}/>

                  </div>
              </div>
          </div>
      </div>
    );
}

export default App;