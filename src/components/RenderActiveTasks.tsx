import React from 'react';
import RenderTask from './RenderTask';
import { TaskInfo } from './TaskTypes';
interface RenderActiveTasksProps {
  tasks: TaskInfo[];
  toggleTaskStatus: (taskName: string) => void;
  deleteTask: (taskName: string) => void;
}

const RenderActiveTasks: React.FC<RenderActiveTasksProps> = ({ tasks, toggleTaskStatus,deleteTask }) => {
  const activeTasks: TaskInfo[] = tasks.filter(task => task.isActive);

  return (
    
    <div className="text-center text-secondary">
    {activeTasks.length === 0 ? (
        <p>No active Tasks.</p>
    ) : (
        <div>
            {activeTasks.map(task => (
                <div key={task.taskName}>
                    <RenderTask task={task} toggleTaskStatus={toggleTaskStatus} deleteTask={deleteTask}/>
                </div>
            ))}
        </div>
    )}  
</div>
  );
};

export default RenderActiveTasks;
