"use client";
import { Container, Row } from 'reactstrap';
import OnlineSales from './OnlineSales/OnlineSales';
import OrderByCountry from './OrderByCountry/OrderByCountry';
import TopSellingProducts from './TopSellingProducts/TopSellingProducts';
import SaleStatistic from './SaleStatistic/SaleStatistic';
import GoalSummary from './GoalSummary/GoalSummary';
import CurrentActivity from './CurrentActivity/CurrentActivity';
import SupportMailbox from './SupportMailbox/SupportMailbox';
import DiscountProduct from './DiscountProduct/DiscountProduct';
import SpecialDiscount from './SpecialDiscount/SpecialDiscount';
import OfferCard from './Offers/OfferCard';

const EcommerceDashboardContainer = () => {
  return (
    <Container fluid className='ecommerce-dashboard'>
        <Row>
            <OnlineSales/>
            <OrderByCountry/>
            <TopSellingProducts/>
            <SaleStatistic large={'5'}/>
            <GoalSummary/>
            <CurrentActivity/>
            <SupportMailbox/>
            <DiscountProduct/>
            <SpecialDiscount/>  
            <OfferCard/>
        </Row>
    </Container>
  )
}

export default EcommerceDashboardContainer