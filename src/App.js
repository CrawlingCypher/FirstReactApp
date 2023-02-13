import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
//some line
import {useState} from 'react'


function App() {

  const [showAddTask, setAddTask] = useState(false)

  const [tasks, setTasks] = useState([
      {
      "id": 1,
      "text": "doctors appointment",
      "date": ('2017-01-03'),
      "reminder": false
    },
    {
      "id": 2,

      "text": "meeting school",
      "date": ('2018-03-03'),
      "reminder": false
    },
    {
      "id": 3,
      "text": "meeting at the station ",
      "date": ('2018-03-03'),
      "reminder": false
    },
  ]) //name of the state and setTasks is a function and its immutable 




  //Add Task
  function addTask(text) {
    const id = Math.floor(Math.random() * 1000) + 1
    console.log(id)
    const newTask = {id, ...text}
    setTasks([...tasks, newTask]) //updating the tasks component with the new task submition and adding it into the existing array
  }

  //delete Task
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id))
    console.log(setTasks) 
  }

  //toggle reminder if double clicked set reminder to true or false
  function toggleReminder(id) {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }
  
  return (
    <div className="container">
      {<Header title='Task Tracker' onAdd={() => setAddTask(!showAddTask)} showAdd={showAddTask}/>} {/*  onAdd takes the function of the state and sets the state as the opposite */}
      
      { showAddTask && <AddTask onAdd={addTask} />} {/* && is a short ternary if there is no else needed. if showAddTask is true do this  */}
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ) : 'There are not tasks'}
    </div>
  );
}

export default App;
 