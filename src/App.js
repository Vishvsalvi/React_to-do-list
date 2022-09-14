import "./App.css";
import React, { useState, useReducer } from "react";
import TaskCard from "./Components/TaskCard";
import Alert from "./Components/Alert";

function App() {


  const [taskText, setTaskText] = useState("");
  const [showAlert, setShowAlert] = useState(false)

  const states = {
    taskList: [],
    alertContent: "",
    styling: "flex items-center justify-center p-4 text-green-700 border rounded border-green-900/10 bg-green-50",
    
  };

  function reducer(state, action) {
    if (action.type === "ADD_ITEM") {
      const addToList = [...state.taskList, action.payload];
      return {
        taskList: addToList,
        alertContent: "Task added !",
        styling:
          "flex items-center justify-center p-4 text-green-700 border rounded border-green-900/10 bg-green-50",
        
      };
    } else if(action.type==="DELETE_ITEM"){
      return {
        taskList: action.payload,
        alertContent: "Task deleted",
        styling:
        "flex items-center justify-center p-4 text-red-700 border rounded border-red-900/10 bg-red-50",
        
      }
    }
    else {
      return {
        taskList: state.taskList,
        alertContent: "Add a task !",
        styling:
        "flex items-center justify-center p-4 text-red-700 border rounded border-red-900/10 bg-red-50",
        
      };
    }
  }

 

  const [state, dispatch] = useReducer(reducer, states);

  const addTask = (e) => {
    e.preventDefault();
    if (taskText) {
      const newTask = { taskText, id:new Date().getTime().toString() };
      dispatch({ type: "ADD_ITEM", payload: newTask });
      setTaskText("");
      setShowAlert(true);
      alertOut();
    } else {
      dispatch({ type: "" });
      setShowAlert(true);
      alertOut();
    }
  };

  function alertOut(){
    setTimeout(() => {
      setShowAlert(false);
      console.log('out')
    }, 1500);
  }

  const deleteTask = ((id) =>{
   let filtered = state.taskList.filter((singleTask)=>{
      return singleTask.id !== id
    })
    
    dispatch({type: "DELETE_ITEM", payload: filtered})
    setShowAlert(true);
    alertOut();

  } )

  return (



    <div className="App">
      <section className="bg-white">
        <div className="px-4 py-16 mx-auto w-2/3 sm:px-6 lg:px-8 sm:py-24">
            { showAlert && < Alert content={state.alertContent} styling={state.styling} />}
          <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto">
              <form
                onSubmit={addTask}
                className="p-8 mt-6 mb-0 rounded-lg shadow-2xl space-y-4"
              >
                <p className="text-lg font-medium">To do list</p>

                <div>
                  <div className="relative mt-1">
                    <input
                      type="Text"
                      id="Text"
                      className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                      placeholder="Enter task"
                      autoComplete="off"
                      value={taskText}
                      onChange={(e) => setTaskText(e.target.value)}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="block w-full px-5 py-3 text-sm font-medium text-white bg-black hover:bg-neutral-800 rounded-lg"
                >
                  Add
                </button>
              </form>
            </div>
          </div>
          <div className="mt-2 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 sm:gap-16">
            {/* Add cards here */}
            {state.taskList.map((task, index) => {
             
              return (
                <TaskCard
                  
                 id={task.id}
                  key={index}
                  task={task.taskText}
                  deleteTask={deleteTask}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
