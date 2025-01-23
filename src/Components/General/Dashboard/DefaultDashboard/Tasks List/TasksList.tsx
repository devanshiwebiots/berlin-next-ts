import { CommonDropdown } from '@/CommonComponent/CommonDropdown/CommonDropdown'
import DashboardCommonHeader from '@/CommonComponent/CommonDropdown/DashboardCommonHeader'
import { Href, TasksListTitle } from '@/Constant'
import { tasks } from '@/Data/General/Dashboard/Default'
import Link from 'next/link'
import { Card, CardBody, Col, Input } from 'reactstrap'

const TasksList = () => {
  return (
    <Col xl={4} sm={6} className="box-col-4">
    <Card className="active-task">      
      <DashboardCommonHeader title={TasksListTitle} />
      <CardBody>
        <ul>
          {tasks.map(task => (
            <li key={task.id} className="d-flex align-items-center gap-3">
              <span className={task.bgColorClass}></span>
              <div className="flex-shrink-0">
                <div className="checkbox-checked">
                  <Input className="form-check-input" type="checkbox" value="" />
                </div>
              </div>
              <div className="flex-grow-1">
                <Link href={Href}>
                  <h6>{task.title}</h6>
                </Link>
                <p>{task.description} <span className="font-primary">{task.projectNumber}</span> {task.name}</p>
              </div>
               <CommonDropdown/>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  </Col>
  )
}

export default TasksList