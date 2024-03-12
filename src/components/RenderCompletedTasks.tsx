import React from 'react';
import RenderTask from './RenderTask';
import { TaskInfo } from './TaskTypes';

interface RenderCompletedTasksProps {
  tasks: TaskInfo[];
  toggleTaskStatus: (taskName: string) => void;
  deleteTask: (taskName: string) => void;
}

const RenderCompletedTasks: React.FC<RenderCompletedTasksProps> = ({ tasks, toggleTaskStatus,deleteTask }) => {
  const completedTasks: TaskInfo[] = tasks.filter(task => !task.isActive);

  return (
    <div className='text-center text-success mb-3'>
      {completedTasks.length === 0 ? (
        <p>No completed Tasks.</p>
      ) : (
        completedTasks.map(task => <RenderTask key={task.taskName} task={task} toggleTaskStatus={toggleTaskStatus} deleteTask={deleteTask} />)
      )}
    </div>
  );
};

export default RenderCompletedTasks;
