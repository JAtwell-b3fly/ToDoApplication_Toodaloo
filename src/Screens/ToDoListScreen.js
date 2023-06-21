import React from "react";
import { useState } from "react";

import Binding from "../images/Binding.png";
import Flowers from "../images/Flowers.png";
import TaskForm from "../Components/TaskForm";
import ToDoList from "../Components/ToDosList";

const ToDoListScreen = ({taskInput,setTaskInput,taskLevel, setTaskLevel,todos,setTodos,setEditToDo,editToDo}) => {
    //Dashboard Show/Hide Functionality
        const [isTaskFormShow, setIsTaskFormShow] = useState(false);
        const [isTaskListShow, setIsTaskListShow] = useState(false);

        const handleTaskFormShow = () => {
            if (isTaskFormShow === true) {
                setIsTaskFormShow(false);
            }
            else {
                setIsTaskFormShow(true);
            }
        }

        const handleTaskListShow = () => {
            if (isTaskListShow === true) {
                setIsTaskListShow(false);
            }
            else{
                setIsTaskListShow(true);
            }
        }

    //______________________________________________________________
 
//Search Bar
    //Set the search value in default to null text
    const [searchValue, setSearchValue] = useState("");

    //function to store the typed search value to the variable
    const handleSearchValue = (event) => {
    setSearchValue(event.target.value);
    }

    //function to fetch the search value from the list using an api
    const onSearch = (searchTerm) => {
        setSearchValue(searchTerm);
        //our api to fetch the search result
        console.log("search", searchTerm);
    }

    //__________________________________________________________________________________________________________________________

    return(
        <div className="App">
            <div className="Box" style={{display: "flex"}}>


                <div className="FileDecor">
                    <svg width="100px" height="400px" xmlns="http://www.w3.org/2000/svg">
                        <image href={Binding} height="400px" width="100px" />
                    </svg>
                    <svg width="100px" height="395px" xmlns="http://www.w3.org/2000/svg">
                        <image href={Binding} height="400px" width="100px" />
                    </svg>
                    <svg width="100px" height="190px" xmlns="http://www.w3.org/2000/svg">
                        <image href={Binding} height="400px" width="100px" />
                    </svg>
                </div>


                <div className="FloralDecor">
                    <svg width="300px" height="690px" xmlns="http://www.w3.org/2000/svg">
                        <image href={Flowers} height="680px" width="300px" />
                    </svg>
                    <svg width="300px" height="300px" xmlns="http://www.w3.org/2000/svg">
                        <image href={Flowers} height="680px" width="300px" />
                    </svg>
                </div>


                <div className="Content">
                    <div className="ToDoList">

                        <div>
                            <div>
                                <div className="ToDoTitle">
                                    <h1>Toodaloo List</h1>
                                </div>
        
                               
                            </div>
                        </div>

                        <div style={{display:"flex"}}>
                            <div>
                                <input
                                    className="SearchBar"
                                    name="searchBar"
                                    type="text"
                                    placeholder="Search"
                                    value={searchValue}
                                    onChange={handleSearchValue} 
                                />

                                <button
                                    type="submit"
                                    name="SearchIcon"
                                    className="SearchButton"
                                    onClick={() => onSearch(searchValue)}
                                >
                                    <>
                                        <svg width="20px" height="15px" xmlns="http://www.w3.org/2000/svg">
                                            <image href="https://www.freepnglogos.com/uploads/search-png/search-icon-transparent-images-vector-16.png" height="15px" width="20px" />
                                        </svg>
                                    </>
                                </button>
                                <div style={{backgroundColor:"white", color:"black", display: "flex", flexDirection:"column", marginLeft:"50px"}}>
                                    {todos.filter((todo) => {
                                        const searchTerm = searchValue.toLowerCase();
                                        const searchTask = todo.title.toLowerCase();

                                        return searchTerm && searchTask.startsWith(searchTerm) && searchTask !== searchTerm;
                                        })
                                        .slice(0,10)
                                        .map((todo) => (
                                            <div 
                                                onClick={() => onSearch(todo.title)}
                                                style={{cursor:"pointer", textAlign:"start", margin: "2px 0"}}>
                                            {todo.title}
                                            </div>
                                        )
                                    )}
                                </div>
                                   
                        
                            </div>
                            
                            <div>
                                <select className="Language">
                                    <option>English</option>
                                    <option>Afrikaans</option>
                                </select>
                            </div>
                            
                        </div>

                        <div className="Dashboard">

                            <div>
                                <button
                                    className="NewTaskButton"
                                    onClick={() => handleTaskFormShow(!isTaskFormShow)}
                                >New Task
                                </button>
                                {
                                    isTaskFormShow && (
                                    <>
                                        <div className="NewTaskForm"></div>
                                    </>
                                    )
                                }
                            </div>

                            <div>
                                <button
                                    className="ViewTasksButton"
                                    onClick={() => handleTaskListShow(!isTaskListShow)}
                                >View Tasks
                                </button>
                                {
                                    isTaskListShow && (
                                    <>
                                        <div className="TaskDisplay"></div>
                                    </>
                                    )
                                }
                            </div>

                        </div>

                        <div>
                            
                            {
                                isTaskFormShow ?

                                <>
                                    <div className="NewTaskForm">
                                        <TaskForm 
                                        taskInput={taskInput}
                                        setTaskInput={setTaskInput}
                                        taskLevel = {taskLevel}
                                        setTaskLevel = {setTaskLevel}
                                        todos={todos}
                                        setTodos={setTodos}
                                        editToDo={editToDo}
                                        setEditToDo={setEditToDo}
                                        />
                                    </div>
                                    
                                </>
                                : 
                                null
                            }
                            
                            {
                                isTaskListShow ?

                                <>
                                    <div className="TaskDisplay">
                                    <ToDoList
                                         todos={todos}
                                         setTodos={setTodos}
                                         setEditToDo={setEditToDo}
                                    />
                                    </div>
                                    
                                </>
                                : 
                                null
                            }

                        <div>

                        </div>

                        </div>

                    </div>
            
                </div>

            </div>
        </div>   
    );
};

export default ToDoListScreen;