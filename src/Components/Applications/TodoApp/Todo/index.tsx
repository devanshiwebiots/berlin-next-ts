import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { markTaskAsCompleted } from "@/Redux/Reducer/ToDoSlice";
import { useState } from "react";
import { toast } from "react-toastify";
import { Card, CardBody, Col } from "reactstrap";
import { ToDoHeader } from "./ToDoHeader";
import TodoList from "./TodoList";

const ToDo = () => {
  const dispatch = useAppDispatch();
  const [markAll, setMarkAll] = useState(false);
  const { todoList } = useAppSelector((state) => state.todo);
  const markAllStatus = () => {
    if (markAll === true) {
      todoList.forEach((todo) => {
        dispatch(markTaskAsCompleted(todo.id));
      });
      toast.error("All Task In-Completed !");
    } else {
      todoList.forEach((todo) => {
        dispatch(markTaskAsCompleted(todo.id));
      });
      toast.success("All Task Completed !");
    }
    setMarkAll(!markAll);
  };
  return (
    <Col xxl='9' xl='8' className='box-col-12'>
      <Card>
        <ToDoHeader />
        <CardBody>
          <div className='todo'>
            <div className='todo-list-wrapper theme-scrollbar'>
              <div className='todo-list-container'>
                <div className='mark-all-tasks'>
                  <div className='mark-all-tasks-container'>
                    <span className='mark-all-btn d-flex align-items-center justify-content-end gap-1 mb-4'>
                      <span className={`btn-label txt-${markAll ? "success" : "danger"}`}>{!markAll ? "Mark all as finished" : "Mark all as Incomplete"}</span>
                      <span className={`action-box completed`} onClick={markAllStatus}>
                        {markAll && (
                          <i className='icon'>
                            <i className='icon-check' />
                          </i>
                        )}
                      </span>
                    </span>
                  </div>
                </div>
                <TodoList />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ToDo;
