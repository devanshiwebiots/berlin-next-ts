"use client";
import { Container, Row } from "reactstrap";
import GenaralCard from "./GenaralCard/GenaralCard";
import LearningSummarys from "./LearningSummary/LearningSummarys";
import OrderOverView from "./OrderOverView/OrderOverView";
import Visitorfull from "./Visitor/Visitorfull";
import Transaction from "./Transaction/Transaction";
import SocialCard from "./SocialCard/SocialCard";
import ProjectCreated from "../Charts/BarCharts/ProjectCreated";
import SaleStatistic from "../../Dashboard/Ecommerce/SaleStatistic/SaleStatistic";

const WidgetsGenralContainer = () => {
  return (
    <Container fluid className='general-widget'>
      <Row>
        <GenaralCard />
        <Visitorfull />
        <OrderOverView />
        <LearningSummarys />
        <Transaction />
        <SocialCard />
        <ProjectCreated />
        <SaleStatistic small={"6"} />
      </Row>
    </Container>
  );
};

export default WidgetsGenralContainer;
