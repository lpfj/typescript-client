import React, { FC, ChangeEvent, useState } from 'react';
import { ITask } from './utils/interfaces';
import './App.css';
import TodoTask from './components/TodoTask';

const App: FC = () => {
  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = {
      taskName: task,
      deadline,
    };
    setTodoList([...todoList, newTask]);
    setTask('');
    setDeadline(0);
  };

  const deleteTask = (taskToDelete: string): void =>
    setTodoList(todoList.filter((taskItems) => taskItems.taskName !== taskToDelete));

  return (
    <div className="App">
      <header className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="task..."
            onChange={handleChange}
            name="task"
            value={task}
          />
          <input
            type="number"
            placeholder="deadline in days"
            onChange={handleChange}
            name="deadline"
            value={deadline}
          />
        </div>
        <button type="button" onClick={addTask}>
          Add Task
        </button>
      </header>
      <div className="todoList">
        {todoList.map((taskItemMap: ITask) => (
          <TodoTask
            key={`${taskItemMap.taskName}TD`}
            taskItem={taskItemMap}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
