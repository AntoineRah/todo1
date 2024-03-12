import React from 'react';
import { Button, FormCheck } from 'react-bootstrap';
import { TaskInfo } from './TaskTypes';

interface RenderTaskProps {
  task: TaskInfo;
  toggleTaskStatus: (taskName: string) => void;
  deleteTask: (taskName: string) => void;
}

const RenderTask: React.FC<RenderTaskProps> = ({ task, toggleTaskStatus,deleteTask }) => {
  const handleCheckboxClick = () => {
    toggleTaskStatus(task.taskName);
  };
  const handleDeleteClick = () => {
    deleteTask(task.taskName);
  };

  return (
    <div key={`default-Checkbox`} className="mt-3 mb-6 d-flex justify-content-center">
    <div className="d-flex align-items-center">
        <FormCheck 
            type={'checkbox'}
            onClick={handleCheckboxClick}
            checked={!task.isActive}
            className="form-check-input-lg"
          
        />  
        <span className='fs-3 text-secondary p-2'>
            {task.taskName}
        </span>
      
    </div>
    <Button className='px-3' variant="warning" size='sm' onClick={handleDeleteClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash " viewBox="0 0 16 16">
            <path d="M3.5 5.5A.5.5 0 0 1 4 5h8a.5.5 0 0 1 .5.5V7H3V5.5zM5 9a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4A.5.5 0 0 1 5 9zm5-.5a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0v-4zM4 1.5A1.5 1.5 0 0 1 5.5 0h5A1.5 1.5 0 0 1 12 1.5V3H4V1.5z"/>
        </svg>
    </Button>
</div>

  );
};

export default RenderTask;
