import { ImagePath } from "@/Constant";
import { TabContentProp } from "@/Types/UikitsType";
import Image from "next/image";
import { Col, Row, TabContent, TabPane } from "reactstrap";

export const BackGroundPillContent: React.FC<TabContentProp> = ({ basicTab }) => {
  return (
    <TabContent activeTab={basicTab}>
      <TabPane tabId='1'>
        <Row className='g-3 pt-3'>
          <Col xs={4}>
            <Image height={245} width={236} className='img-fluid' src={`${ImagePath}/switch/s1.jpg`} alt='sofa' unoptimized/>
          </Col>
          <Col xs={4}>
            <Image height={245} width={236} className='img-fluid' src={`${ImagePath}/switch/s2.jpg`} alt='sofa' unoptimized/>
          </Col>
          <Col xs={4}>
            <Image height={245} width={236} className='img-fluid' src={`${ImagePath}/switch/s3.jpg`} alt='sofa' unoptimized/>
          </Col>
        </Row>
      </TabPane>
      <TabPane tabId='2'>
        <Row className='g-3 pt-3'>
          <Col xs={4}>
            <Image height={245} width={236} className='img-fluid' src={`${ImagePath}/switch/c1.jpg`} alt='chairs' unoptimized/>
          </Col>
          <Col xs={4}>
            <Image height={245} width={236} className='img-fluid' src={`${ImagePath}/switch/c2.jpg`} alt='chairs' unoptimized/>
          </Col>
          <Col xs={4}>
            <Image height={245} width={236} className='img-fluid' src={`${ImagePath}/switch/c3.jpg`} alt='chairs' unoptimized/>
          </Col>
        </Row>
      </TabPane>
      <TabPane tabId='3'>
        <Row className='g-3 pt-3'>
          <Col xs={4}>
            <Image height={245} width={236} className='img-fluid' src={`${ImagePath}/switch/t1.jpg`} alt='table' unoptimized/>
          </Col>
          <Col xs={4}>
            <Image height={245} width={236} className='img-fluid' src={`${ImagePath}/switch/t2.jpg`} alt='table' unoptimized/>
          </Col>
          <Col xs={4}>
            <Image height={245} width={236} className='img-fluid' src={`${ImagePath}/switch/t3.jpg`} alt='table' unoptimized/>
          </Col>
        </Row>
      </TabPane>
    </TabContent>
  );
};
