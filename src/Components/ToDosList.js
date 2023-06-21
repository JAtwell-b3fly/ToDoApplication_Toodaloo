import { React } from "react";

import DeleteImg from "../images/trash.png";
import Edit from "../images/pencil.png";
import Check from "../images/check.png";
import UnCheck from "../images/uncheck.png";
import GreenColor from "../images/greencolorcode.png";
import RedColor from "../images/redcolorcode.png";

const ToDoList = ({todos, setTodos, setEditToDo}) => {

    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed};
                }
                return item;
            })
        );
    };

    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditToDo(findTodo);
    };

    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    //_________________________________________________________________________________________________________________________________

    return(
        <div className="ReadOnly">
            <ul style={{display: "table", listStyleType:"none",   marginLeft: "10px"}}>
              {todos.map((todo) => (
                <li style={{display:"table-cell", fontSize:"medium", display:"flex"}} key={todo.id}>

                    <input type="text" 
                            value={todo.title}
                            className="Task-items"
                            onChange={(event) => event.preventDefault()}
                            style={{borderRadius:"15px", margin:"15px", width:"300px"}}
                    />

                    <div style={{marginTop:"20px"}}>

                    {
                                todo.level === "Urgent" ? 
                                <>
                                   <svg width="30px" height="30px" xmlns="http://www.w3.org/2000/svg">
                                        <image href={RedColor} height="30px" width="30px" />
                                    </svg> 
                                </>
                                :
                                <>
                                    <svg width="30px" height="30px" xmlns="http://www.w3.org/2000/svg">
                                        <image href={GreenColor} height="30px" width="30px" />
                                    </svg>
                                </> 
                            }
        
                    </div>


                    <button 
                        type="button"
                        name="complete"
                        className="TaskButtons"
                        onClick={() => handleComplete(todo)}
                    >
                        {todo.completed ? 
                            <svg width="30px" height="30px" xmlns="http://www.w3.org/2000/svg">
                                <image href={Check} height="30px" width="30px" />
                            </svg>
                        :
                            <svg width="30px" height="30px" xmlns="http://www.w3.org/2000/svg">
                                <image href={UnCheck} height="30px" width="30px" />
                            </svg>
                        }
                        
                    </button>

                    <button
                        name="update"
                        type="button"
                        onClick={() => handleEdit(todo)}
                        className="TaskButtons"
                    >
                        <svg width="30px" height="30px" xmlns="http://www.w3.org/2000/svg">
                            <image href={Edit} height="30px" width="30px" />
                        </svg>
                    </button> 

                    <button
                        name="delete"
                        type="button"
                        onClick={() => handleDelete(todo)}
                        className="TaskButtons"
                    >
                        <svg width="30px" height="30px" xmlns="http://www.w3.org/2000/svg">
                            <image href={DeleteImg} height="30px" width="30px" />
                        </svg>
                    </button>

                    
                </li>
              ))}
            </ul>
        </div>
    )
};

export default ToDoList;