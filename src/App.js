import { Routes, Route } from "react-router-dom";
import { React, useState } from "react";

import './App.css';
import tasks from "./Tasklist.json";
import validation from "./Components/LoginValidation";

import LoginSignUp from "./Screens/LoginSignUp";
import ToDoListScreen from "./Screens/ToDoListScreen";
import Navbar from "./Components/Nav";
import LoginScreen from "./Screens/LoginScreen";


function App() {

 //_______________________________________________________________________________________________________________ 
  
//TaskForm Functions
  //input which is the task and todos is the list of tasks
  const [taskInput, setTaskInput] = useState("");

  //input for the level of importance of the task in the list of tasks
  const [taskLevel, setTaskLevel] = useState("");

  //the list of tasks
  const [todos, setTodos] = useState(tasks);
//__________________________________________________________________________________________________________________________________________

//Task Edit Functions
  //Edit To Do List
  const [editToDo, setEditToDo] = useState(null);
  //________________________________________________________________________________________________________________________________________

//Login Functions

   //Create a list to store the login credentials
   const [loginValues, setLoginValues] = useState({
    username: "",
    password: "",
  })

  //A function to store the typed login credentials to the login list
  function handleLoginChange(e) {
    setLoginValues({...loginValues, [e.target.name]: e.target.value})
  };

  //function to submit the login form credentials
  function handleLoginSubmit(e) {
    e.preventDefault();
  };

  //____________________________________________________________________________________________________________________________________________________

//Registration Functions

  //creating a list to store the registration credentials
  const [regValues, setRegValues] = useState({
    username: "",
    gender: "",
    emailAddress: "",
    password: "",
  });

  //create an empty array on the errors validation
  const [errors, setErrors] = useState({});

  //function to store the form inputs into the registration list
  function handleRegChange(e) {
    setRegValues({...regValues, [e.target.name]: e.target.value})
  };

  //function to submit the form inputs of the registration credentials
  function handleRegSubmit(e) {
    e.preventDefault();

    setErrors(validation(regValues));
  };


  //________________________________________________________________________________________________________________________________________________________

  return (
    <>
    <Navbar />

    <Routes>
      <Route path="/" element={<LoginSignUp
                                    loginValues={loginValues}
                                    setLoginValues={setLoginValues}
                                    handleLoginChange={handleLoginChange}
                                    handleLoginSubmit={handleLoginSubmit}
                                    regValues={regValues}
                                    setRegValues={setRegValues}
                                    errors={errors}
                                    setErrors={setErrors}
                                    handleRegChange={handleRegChange}
                                    handleRegSubmit={handleRegSubmit} />} />
      <Route path="/login" element={<LoginScreen
                                     loginValues={loginValues}
                                     setLoginValues={setLoginValues}
                                     handleLoginChange={handleLoginChange}
                                     handleLoginSubmit={handleLoginSubmit}  />} />
      <Route path = "/login/todolist" element={<ToDoListScreen 
                                            taskInput={taskInput}
                                            setTaskInput={setTaskInput}
                                            taskLevel = {taskLevel}
                                            setTaskLevel = {setTaskLevel}
                                            todos={todos}
                                            setTodos={setTodos}
                                            setEditToDo={setEditToDo}
                                            editToDo={editToDo} />} />
    </Routes>
    </>
  );
}

export default App;
