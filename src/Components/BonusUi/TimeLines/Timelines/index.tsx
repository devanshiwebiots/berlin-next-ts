import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { TimelineTitle } from "@/Constant";
import { TimeLineData } from "@/Data/BonusUi/Timeline";
import { Card, CardBody, Col } from "reactstrap";
import AppIdeasTimeline from "./AppIdeasTimeline";
import BlogTimeline from "./BlogTimeline";
import CarouselTimeline from "./CarouselTimeline";
import AutoTestingTimeline from "./AutoTestingTimeline";
import MeetUpTimeline from "./MeetUpTimeline";
import ResolutionTimeline from "./ResolutionTimeline";

const Timelines = () => {
  return (
    <Col sm="12" className="box-col-12">
      <Card>
        <CommonCardHeader title={TimelineTitle} span={TimeLineData} />
        <CardBody className="rounded-timeline">
          <div className="timeline">
            <AppIdeasTimeline />
            <BlogTimeline />
            <CarouselTimeline />
            <AutoTestingTimeline />
            <MeetUpTimeline />
            <ResolutionTimeline />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Timelines;
