import { React, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Add from "../images/plus.png";
import Ok from "../images/ok.png";

const TaskForm = ({taskInput, taskLevel, todos, setTaskInput, setTaskLevel, setTodos, editToDo,setEditToDo}) => {

    //function to update the todolist
    const updateToDo = (title, level, id, completed) => {
        const newToDo = todos.map((todo) => 
            todo.id === id ? {title, level, id, completed} : todo
        )
        setTodos(newToDo);
        setEditToDo("");
    };

    //useEffect to store the data to local storage and prevent loss of data when refreshing
    useEffect(() => {
        if (editToDo){
            setTaskInput(editToDo.title);
            setTaskLevel(editToDo.level);
        } else {
            setTaskInput("");
            setTaskLevel("General");
        }
    }, [setTaskInput, setTaskLevel, editToDo]);

    //______________________________________________________
    
    //function to store the typed task in the form input
    const onInputChange = (event) => {
        setTaskInput(event.target.value);
        
    };

    //function to store the typed task level in the form input
    const onLevelChange = (event) => {
        setTaskLevel(event.target.value);
    }

    //_____________________________________________________________

    //Form Submission function
    const onFormSubmit = (event) => {
        event.preventDefault();

        //edit task functions
        if(!editToDo) {
            //add the new task to the existing task list
            setTodos([...todos, {
                id: uuidv4(),
                title: taskInput,
                level: taskLevel,
                completed: false
            }]);

            //set the input to empty again
            setTaskInput("");
            setTaskLevel("General")
        } else {
            updateToDo(taskInput, taskLevel, editToDo.id, editToDo.completed)
        }

        
    }

    return (
        <form onSubmit={onFormSubmit}>

        <input type="text"
                placeholder="Enter a new task..."
                className="NTaskForm"
                value={taskInput}
                onChange={onInputChange}
                required
                style={{height:"50px", width:"300px", marginRight:"50px"}}
        />

        <select defaultValue={taskLevel}
                onChange={onLevelChange}
                className="NTaskForm"
                style={{height:"50px", width:"100px", marginRight:"50px"}}
                required
        >
            <option value="General">General</option>
            <option value="Important">Important</option>
            <option value="Urgent">Urgent</option>
        </select>

        <button
                className="AddButton"
                type="submit"
        >
            {editToDo ? 
            <svg width="50px" height="50px" xmlns="http://www.w3.org/2000/svg">
                <image href={Ok} height="50px" width="50px" />
            </svg>
            :
            <svg width="50px" height="50px" xmlns="http://www.w3.org/2000/svg">
                <image href={Add} height="50px" width="50px" />
            </svg>
            }
            
        </button>
        </form>
    )
};

export default TaskForm;