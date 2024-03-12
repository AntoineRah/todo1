import React, { useState } from 'react'
import { Form,Button } from 'react-bootstrap'
export const CreateTask = ({ addNewTask }) => {
    const [newtaskname,setnewtaskname]=useState<string>("");
    const handleChange = (event) => {
        setnewtaskname(event.target.value);
        
      };
      const handleAddTask = () => {
            if(newtaskname.length!==0){
                addNewTask(newtaskname);
                setnewtaskname("");
            }      
    };
  return (
    <div className="d-flex justify-content-center" style={{ marginTop: '80px'}}>
            <Form style={{ width: '250px' }}>
                <Form.Group controlId="formCreateTask">
                    <Form.Control
                        type="text"
                        placeholder="Enter New Task"
                        value={newtaskname}
                        onChange={handleChange}
                    />
                </Form.Group>
               <div className=''>
               <Button variant="warning" onClick={handleAddTask} disabled={newtaskname.trim() === ""} style={{ marginLeft: '80px', marginBottom:'30px'}}>
                    Add Task
                </Button>
               </div>
            </Form>
        </div>
  );
}      
