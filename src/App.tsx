import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import RenderActiveTasks from './components/RenderActiveTasks';
import RenderCompletedTasks from './components/RenderCompletedTasks';
import { TaskInfo } from './components/TaskTypes';
import { CreateTask } from './components/CreateTask';
import './index.css';
import { Loading } from './components/Loading';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<TaskInfo[]>([ ]);
  const [currentTab, setCurrentTab] = useState<string>('active');
  const [loading,setLoading]=useState<boolean>(false);

  const toggleTaskStatus = (taskName: string) => {
    const updatedTasks = tasks.map(task => {
      if (task.taskName === taskName) {
        return { ...task, isActive: !task.isActive };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleTabSelect = (tab: string) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false); 
    }, 1000);
    setCurrentTab(tab);
  };

  const addNewTask=(taskname:string)=>{
    setTasks([...tasks, {taskName: taskname, isActive: true}])
  }
  const deleteTask = (taskName: string) => {
    setTasks(tasks.filter(task => task.taskName !== taskName));
  };

  return (
    <div className="app-container">
    <Tabs
      activeKey={currentTab}
      id="tabnav"
      onSelect={handleTabSelect}
      className="mb-3 justify-content-center"
    >
      <Tab eventKey="active" title="Active">
        {loading? <Loading/>:
        <div>
        <CreateTask addNewTask={addNewTask}/>
        <RenderActiveTasks tasks={tasks} toggleTaskStatus={toggleTaskStatus} deleteTask={deleteTask}/>
        </div>
        }
      </Tab>

      <Tab eventKey="completed" title="Completed">
      {loading? <Loading/>:
        <RenderCompletedTasks tasks={tasks} toggleTaskStatus={toggleTaskStatus} deleteTask={deleteTask} />
}
      </Tab>
    </Tabs> 
  </div>
    );
  
};

export default App;
