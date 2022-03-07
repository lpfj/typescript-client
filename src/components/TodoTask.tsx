import React from 'react';
import { ITask } from '../utils/interfaces';

interface Props {
  taskItem?: ITask;
  deleteTask(taskNametoDelete: string): void;
}

const TodoTask = ({ taskItem, deleteTask }: Props) => (
  <div className="task">
    <div className="content">
      <span>{taskItem?.taskName}</span>
      <span>{taskItem?.deadline}</span>
    </div>
    <button
      type="button"
      onClick={() => {
        if (taskItem) {
          deleteTask(taskItem.taskName);
        }
      }}
    >
      x
    </button>
  </div>
);
export default TodoTask;
