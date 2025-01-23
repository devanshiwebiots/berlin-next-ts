import SVG from "@/CommonComponent/SVG";
import { ImagePath } from "@/Constant";
import { ProfileData } from "@/Data/Uikits/modal";
import { ProfileModalType } from "@/Types/UikitsType";
import Image from "next/image";
import Link from "next/link";
import { Card, CardBody, Col, Modal } from "reactstrap";

export const ProfileModal:React.FC<ProfileModalType> = ({ modalOne, modalOneTogggle }) => {

  return (
    <Modal fade centered isOpen={modalOne} toggle={modalOneTogggle}>
      <div className="modal-dialog m-0">
        <div className="modal-content">
          <Col xl="12">
            <Card className="social-profile mb-0 border-top-0">
              <CardBody>
                <div className="social-img-wrap">
                  <div className="social-img">
                    <Image height={68} width={68} src={`${ImagePath}/product-lists/profile.png`} alt="profile" />
                  </div>
                  <div className="edit-icon"><SVG iconId="profile-check" /></div>
                </div>
                <div className="social-details">
                  <h5 className="mb-1"><Link href={`/app/social_app`}>Brooklyn Simmons</Link></h5>
                  <span className="f-light">@brookly.simmons</span>
                  <ul className="social-follow">
                    <li>
                      <h5 className="mb-0">1,908</h5>
                      <span className="f-light">Posts</span>
                    </li>
                    {ProfileData.map(({ heading, data }, index) => (
                      <li key={index}>
                        <h5 className="mb-0">{heading}</h5>
                        <span className="f-light">{data}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardBody>
            </Card>
          </Col>
        </div>
      </div>
    </Modal>
  );
};
