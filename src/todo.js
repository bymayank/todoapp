import React from 'react';
import { AiOutlineCloseSquare} from 'react-icons/ai'
const Todos = ({todos, markComplete, remove}) => {
    return (
        <div className={"todo-list"}>
                {

                    todos.map((todo, index) => (
                        <Todo todo={todo} key={todo.id} index={index} markComplete={markComplete} remove={remove}/>
                    ))
                }
        </div>
    );
};

const Todo = ({todo,key, index, markComplete, remove}) =>(
    <div className="todo" >
        <p style={{textDecoration : todo.isCompleted ? "line-through" : ""}}>
            
            <input type={"checkbox"} onChange={() => markComplete(todo.id)} name={"completed"} id={key}/>{' '}
            {todo.text}
        </p>
        <AiOutlineCloseSquare
          onClick={() => remove(index)}
          className='delete-icon'
        />
    </div>
);

export default Todos;