import { AddTask, ToDoPlaceholder } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { addNewTodo, setTask } from "@/Redux/Reducer/ToDoSlice";
import React from "react";
import { toast } from "react-toastify";
import { Button, Card, CardHeader, Input } from "reactstrap";

export const ToDoHeader = () => {
  const { task } = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();

  const handleNewTask = () => {
    if (task.trim() === "") {
      toast.error("please add your todo");
    } else {
      dispatch(addNewTodo(task));
      dispatch(setTask(""));
      toast.success(`Task add ${task}`);
    }
  };

  const onTaskChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTask(e.currentTarget.value));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {   
    if (task.trim() === "") {
      toast.error("please add your todo");
    }else if(e.key === "Enter"){
      handleNewTask();
    }
  };
  return (
      <CardHeader>
        <div className='todo-list-header b-bottom'>
          <div className='todo-list-header'>
            <div className='new-task-wrapper input-group'>
              <Input className='m-0' value={task} placeholder={ToDoPlaceholder} onChange={(e) => onTaskChanged(e)} onKeyDown={handleKeyDown}></Input>
              <Button color='primary' size='sm' className='add-new-task-btn' onClick={handleNewTask}>
                {AddTask}
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>
  );
};
