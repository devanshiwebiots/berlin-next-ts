import { Row } from "reactstrap";
import { ImageAbout } from "@/Constant";
import PagesSort from "./Pages";
import { DescriptionMyGallery } from "./DescriptionMyGallery";

const PhotosTab = () => {
  return (
    <>
      <h4 className='mb-2'>{ImageAbout}</h4>
      <Row className='my-gallery gallery-with-description'>
        <DescriptionMyGallery />
      </Row>
      <PagesSort pageClass='start' />
    </>
  );
};

export default PhotosTab;
