import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { Href, ImagePath, TrendingNewsTitle } from "@/Constant";
import { newsItems } from "@/Data/General/Dashboard/Default";
import Link from "next/link";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

const TrendingNews = () => {
  return (
    <Col xxl={3} lg={4} sm={6} className='box-col-4'>
      <Card className='news-update'>
        <DashboardCommonHeader title={TrendingNewsTitle} />
        <CardBody>
          <ListGroup flush>
            {newsItems.map((news) => (
              <ListGroupItem key={news.id} className='d-flex align-items-center gap-3'>
                <div className='flex-shrink-0'>
                  <img src={`${ImagePath}/${news.image}`} alt='update' />
                </div>
                <div className='flex-grow-1'>
                  <Link href={Href}>
                    <h6>{news.title}</h6>
                  </Link>
                  <span>{news.timeAgo}</span>
                </div>
              </ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TrendingNews;
