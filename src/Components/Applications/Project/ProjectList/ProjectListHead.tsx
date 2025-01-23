import { All, CreateNewProject, Doing, Done, Href } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setActiveTab } from "@/Redux/Reducer/ProjectSlice";
import Link from "next/link";
import { CheckCircle, Info, PlusSquare, Target } from "react-feather";
import { Card, Col, FormGroup, Nav, NavItem, NavLink, Row } from "reactstrap";

export const ProjectListHead = () => {
  const {activeTab} = useAppSelector((state)=>state.project)
  const dispatch = useAppDispatch()

  return (
    <Card>
      <Row>
        <Col md="6" className="p-0 d-flex">
          <Nav tabs className="border-tab" id="top-tab">
            <NavItem><NavLink href={Href} className={activeTab === '1' ? 'active' : ''} onClick={() => dispatch(setActiveTab("1"))}><Target />{All}</NavLink></NavItem>
            <NavItem><NavLink href={Href} className={activeTab === '2' ? 'active' : ''} onClick={() => dispatch(setActiveTab("2"))}><Info />{Doing}</NavLink></NavItem>
            <NavItem><NavLink href={Href} className={activeTab === '3' ? 'active' : ''} onClick={() => dispatch(setActiveTab("3"))}><CheckCircle />{Done}</NavLink></NavItem>
          </Nav>
        </Col>
        <Col md="6">
          <FormGroup className="m-0 me-0"></FormGroup>
          <Link className="btn btn-primary" href={`/app/project/project_create`}><PlusSquare />{CreateNewProject}</Link>
        </Col>
      </Row>
    </Card>
  );
};