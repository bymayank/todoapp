import React from 'react';
import { AiOutlineCloseSquare} from 'react-icons/ai'
const Todos = ({todos, markComplete, remove}) => {
    return (
        <div className={"todo-list"}>
                {

                    todos.map((todo, index) => (
                        <Todo todo={todo} key={index} index={index} markComplete={markComplete} remove={remove}/>
                    ))
                }
        </div>
    );
};

const Todo = ({todo, index, markComplete, remove}) =>(
    <div className="todo">
        <p style={{textDecoration : todo.isCompleted ? "line-through" : ""}}>
            
            <input type={"checkbox"} onChange={() => markComplete(index)} name={"completed"} id={todo.id}/>{' '}
            {todo.text}
        </p>
        <AiOutlineCloseSquare
          onClick={() => remove(index)}
          className='delete-icon'
        />
    </div>
);

export default Todos;