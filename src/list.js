import React, {useState} from 'react'

const TodoForm = ({addTodo}) =>{


    const [value, setvalue] = useState('');

    const handleChange = (e) => {   
        setvalue(e.target.value);         
    };
    const handleSubmit = (e) => {
        e.preventDefault();   

        if (!value)             
            return;
        addTodo(value);
        setvalue('');         
    };

    return(
        <div className={"container"}>

            <div className="app-title text-center">Todo app by Mayank</div>
            <form onSubmit={handleSubmit} className={"form-group row todo-form"}>
                <input className={"form-control col-md-8 "} style={{padding:'10px', width:'50%',marginTop:'40px', marginBottom:'40px', marginRight:'10px', borderRadius:'5px'}} type={"text"} placeholder={"What's up for the today!!!"} value={value} onChange={handleChange}/>
                <input className={"form-control btn-primary col-md-4 submit-button"} type={"submit"} value={"Add Task"}/>
            </form>
        </div>
    )
};

export default TodoForm;