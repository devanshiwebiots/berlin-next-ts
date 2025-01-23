import { Container, Row } from "reactstrap";
import HigherRevenue from "./HigherRevenue/HigherRevenue";
import ProfileGreeting from "./ProfileGreeting/ProfileGreeting";
import RecentActiivity from "./RecentActiivity/RecentActiivity";
import TasksList from "./Tasks List/TasksList";
import Notification from "./Notification/Notification";
import TotalSales from "./TotalSales/TotalSales";
import LearningSummaryChart from "./LearningSummaryChart/LearningSummaryChart";
import CurrentOrders from "./CurrentOrders/CurrentOrders";
import TrendingNews from "./TrendingNews/TrendingNews";
import CustomerReview from "./CustomerReview/CustomerReview";
import SalesByProduct from "./SalesByProduct/SalesByProduct";

const DefaultDashboardContainer = () => {
  return (
    <>
      <Container className='default-dashboard' fluid>
        <Row>
          <ProfileGreeting />
          <HigherRevenue />
          <RecentActiivity/>
          <TasksList/>
          <Notification/>
          <TotalSales/>
          <LearningSummaryChart/>
          <CurrentOrders/>
          <TrendingNews/>
          <CustomerReview/>
          <SalesByProduct/>
        </Row>
      </Container>
    </>
  );
};
export default DefaultDashboardContainer;
