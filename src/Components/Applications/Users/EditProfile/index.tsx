"use client";
import { Container, Row } from "reactstrap";
import MyProfile from "./MyProfile/MyProfile";
import AddProjectsAndUpload from "./AddProjectsAndUpload/AddProjectsAndUpload";
import EditProfileForm from "./EditProfiles/EditProfileForm";

const EditProfileContainer = () => {
  return (
    <Container fluid>
      <div className='edit-profile'>
        <Row>
          <MyProfile/>
          <EditProfileForm/>
          <AddProjectsAndUpload />
        </Row>
      </div>
    </Container>
  );
};

export default EditProfileContainer;
