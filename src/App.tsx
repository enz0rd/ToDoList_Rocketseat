import styles from './App.module.css'
import { Header } from './components/Header/header'
import { TaskListHeader } from './components/TaskList/TaskListHeader'
import { TaskForm } from './components/TaskForm/TaskForm'
import { useState } from 'react';
import { Task } from './components/TaskList/Task';
import { EmptyList } from './components/EmptyList/EmptyList';

function App() {
  const [tasks, setTasks] = useState<{ id: number; text: string; isChecked: boolean }[]>([]);
  const [doneTasks, setDoneTasks] = useState<number>(0);

  function handleNewTask(task: { task: string }) {
    const newTask = {
      id: Math.random(),
      text: task.task,
      isChecked: false,
    };
    setTasks([...tasks, newTask]);
  }

  function handleRemoveTask(id: number) {
    const taskToRemove = tasks.find((task) => task.id === id);
    const newTaskLisk = tasks.filter((task) => task.id !== id);
    setTasks(newTaskLisk);
    if(taskToRemove?.isChecked) {
      setDoneTasks(doneTasks - 1);
    }
  }

  function handleToggleStatus(id: number, isChecked: boolean) {
    const task = tasks.find((task) => task.id === id);
    if (task) {
      task.isChecked = isChecked;
    }
    if (isChecked) {
      setDoneTasks(doneTasks + 1);
    } else {
      setDoneTasks(doneTasks - 1);
    }
  }

  return (
    <>
      <Header />
      <TaskForm onSubmit={handleNewTask}/>
      <TaskListHeader tasks={tasks.length} doneTasks={doneTasks}>
        <ul className={styles.list}>
          {tasks.length === 0 ? (
            <>
              <EmptyList />
            </>
          ) : (
            tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                removeTask={handleRemoveTask}
                onChangeStatus={handleToggleStatus}
              />
            ))
          )}
        </ul>
      </TaskListHeader>
    </>
  )
}

export default App
