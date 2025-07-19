import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, complete: false };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, complete: !task.complete } : task
    );
    setTasks(updatedTasks);
  };

  const deletetask=(id)=>{
    const filtertask=tasks.filter((tasks)=>{
        return tasks['id'] !==id
    })
    setTasks(filtertask)
  }

  console.log(tasks)
  return (
    <>
      <h2 className="text-danger text-center ms-3 mt-4">Task Manager App</h2>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deletetask} toggleComplete={toggleComplete}/>
    </>
  );
}

export default TaskManager;
