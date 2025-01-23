import { ImagePath } from "@/Constant";
import { TabContentProp } from "@/Types/UikitsType";
import Image from "next/image";
import { Col, ListGroup, ListGroupItem, Row, TabContent, TabPane } from "reactstrap";

export const ArrowTabContent: React.FC<TabContentProp> = ({ basicTab }) => {
  return (
    <TabContent activeTab={basicTab}>
      <TabPane tabId='1'>
        <div>
          <div className='common-box'>
            <i className='fa fa-arrow-circle-o-right' />
            <p>Your account details serve as the digital gateway to safe, customized online experiences. Modern security measures are in place to safeguard your data, and we have given top priority to the smooth handling of your account details during the building of our website.</p>
          </div>
          <div className='common-box'>
            <i className='fa fa-arrow-circle-o-right' />
            <p>We design systems that enable customers to easily update and access their account information, from user-friendly interfaces to simple navigation. Because of our dedication to openness, you have easy access to change settings, see transaction history, and customize your preferences while being informed. With our website solutions, you can take account management to the next level. Your information is protected, and your digital trip is customized to meet your demands.</p>
          </div>
        </div>
      </TabPane>
      <TabPane tabId='2'>
        <Row className='g-3 pt-3'>
          <Col xs={4}>
            <Image height={245} width={236} className='img-fluid' src={`${ImagePath}/switch/c1.jpg`} alt='chairs' />
          </Col>
          <Col xs={4}>
            <Image height={245} width={236} className='img-fluid' src={`${ImagePath}/switch/c2.jpg`} alt='chairs' />
          </Col>
          <Col xs={4}>
            <Image height={245} width={236} className='img-fluid' src={`${ImagePath}/switch/c3.jpg`} alt='chairs' />
          </Col>
        </Row>
      </TabPane>
      <TabPane tabId='3'>
        <div className='skill-tab'>
          <h5>In what area are you an expert?</h5>
          <p>Summarize your expertise for us in a few crucial terms. Make careful to select these tags carefully, since they will appear on your portfolio page.</p>
          <ListGroup >
            <ListGroupItem>HTML5</ListGroupItem>
            <ListGroupItem>CSS3</ListGroupItem>
            <ListGroupItem>Javascript</ListGroupItem>
            <ListGroupItem>React</ListGroupItem>
            <ListGroupItem>SQL</ListGroupItem>
          </ListGroup>
        </div>
      </TabPane>
      <TabPane tabId='4'>
        <div>
          <div className='common-box'>
            <i className='fa fa-arrow-circle-o-right' />
            <p>We will handle your payment procedure, saving you the trouble of following up with clients after each assignment. We`ll try our hardest to make sure you receive your money promptly and equitably.</p>
          </div>
          <div className='common-box'>
            <i className='fa fa-arrow-circle-o-right' />
            <p>Seamless website development requires a foundation that`s reliable and efficient. Enter the installment process – the bedrock of building a powerful online presence. Installments in website development refer to the strategic implementation of features, functionalities, and updates in a phased manner, ensuring smooth integration and optimal performance. </p>
          </div>
        </div>
      </TabPane>
    </TabContent>
  );
};
