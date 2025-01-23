import { ImagePath } from "@/Constant";
import { CommonTabCardProp } from "@/Types/BookmarkType";
import { Card, CardBody, CardHeader, Col, TabPane } from "reactstrap";
import ViewBookmark from "../ViewBookmarks";

const CommonTabCard: React.FC<CommonTabCardProp> = ({ tabId, title }) => {
  return (
    <TabPane tabId={tabId}>
      <Card className='mb-0'>
        <CardHeader className='d-flex mb-0'>
          <h4 className='mb-0'>{title}</h4>
          <ViewBookmark />
        </CardHeader>
        <CardBody>
          <Col sm='12'>
            <div>
              <div className='search-not-found text-center p-5'>
                <img className='img-100 mb-4' src={`${ImagePath}/other-images/sad.png`} alt='' />
                <p>{`Sorry, Not Found Any Bookmark`}</p>
              </div>
            </div>
          </Col>
        </CardBody>
      </Card>
    </TabPane>
  );
};

export default CommonTabCard;