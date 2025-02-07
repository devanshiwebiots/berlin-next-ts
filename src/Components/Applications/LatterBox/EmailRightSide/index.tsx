import { LetterBoxNavContentType } from "@/Types/LatterBoxType";
import { Card, Col, TabContent } from "reactstrap";
import { useAppSelector } from "../../../../Redux/Hooks";
import ComposeEmailModal from "./ComposeEmailModal";
import DraftContent from "./DraftContent";
import EmailHeader from "./EmailHeader";
import InboxContent from "./InboxContent";
import InterviewMail from "./InterviewMail";
import SentContent from "./SentContent";
import StarredContent from "./StarredContent";
import TrashContent from "./TrashContent";
import WorkContent from "./WorkContent";
import PrivateContent from "./PrivateContent";
import SupportContent from "./SupportContent";
import AddLabelModal from "./AddLabelModal";

const EmailRightSide: React.FC<LetterBoxNavContentType> = ({ navId }) => {
  const { interviewEmail } = useAppSelector((state) => state.letterBox);

  return (
    <Col xxl='9' xl='8' className='box-col-12'>
      <div className='email-right-aside'>
        <Card className={`email-body email-list ${interviewEmail ? "hide" : "show"}`}>
          <ComposeEmailModal />
          <EmailHeader />
          <TabContent activeTab={navId} id='email-pills-tabContent'>
            <InboxContent />
            <SentContent />
            <StarredContent />
            <DraftContent />
            <TrashContent />
            <WorkContent />
            <PrivateContent />
            <SupportContent />
            <AddLabelModal />
          </TabContent>
        </Card>
        <InterviewMail />
      </div>
    </Col>
  );
};

export default EmailRightSide;
