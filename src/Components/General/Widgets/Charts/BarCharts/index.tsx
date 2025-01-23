import React from 'react'
import { Row } from 'reactstrap'
import ProjectCreated from './ProjectCreated'
import SalesOverView from './SalesOverView'
import MonthlyHistory from './MonthlyHistory'

const Barcharts = () => {
  return (
    <Row>
        <ProjectCreated/>
        <SalesOverView/>
        <MonthlyHistory/>
    </Row>
  )
}

export default Barcharts