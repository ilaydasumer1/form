import { useState } from 'react';
import './App.css';
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
/* basket ve task, taskCreate'den gönderilen değişkenler.
'createTask' fonksiyonunu tanımlıyoruz. Bu fonksiyon, 
'TaskCreate' bileşeninden gelen 'basket' ve 'task' değerlerini alacak.*/
function App() {
  const [tasks, setTasks] = useState([])

  const createTask = (basket,task) => {
   const createdTasks = [
    ...tasks, {
      id:Math.round(Math.random()*9999999999999999999),
      basket:basket,
      task:task
    },
   ];
   setTasks(createdTasks);
  };

  const deleteTaskById = (id) => {
   const afterDeletingTasks = tasks.filter((task)=> {
    return task.id !== id;
   })
   setTasks(afterDeletingTasks);
  }

  return ( <div>
    <TaskCreate onCreate={createTask}/>
    <h2>Görevler</h2>
    <TaskList tasks={tasks} onDelete={deleteTaskById}/>
  </div>

  )
     }

export default App;