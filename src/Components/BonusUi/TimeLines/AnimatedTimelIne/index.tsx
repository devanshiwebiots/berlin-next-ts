import { AnimatedtimelineData } from '@/Data/BonusUi/Timeline';
import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';

 
const AnimatedTimeline = () => {
  return (
    <Col sm='12' className="box-col-12">
      <Card>
        <CardHeader className="card-header pb-0">
          <h4>Animated Timeline</h4>
          <p className="f-m-light mt-1">
            Use <code>animated-timeline</code> class to your animated timeline.
          </p>
        </CardHeader>
        <CardBody className="overflow-hidden">
          <div className="animated-timeline">
            {AnimatedtimelineData.map((yearBlock, index) => (
              <div className="timeline-block" key={index}>
                <div className="each-year">
                  <div className="title">{yearBlock.year}</div>
                  {yearBlock.events.map((event, eventIndex) => (
                    <div className="timeline-event" key={eventIndex}>
                      <div className="timeline-desc">
                        <h5 className="pb-1">{event.title}:</h5>
                        <span>{event.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AnimatedTimeline;
