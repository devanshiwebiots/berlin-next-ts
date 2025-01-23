import { Heart } from "react-feather";

const LikeContent = () => {
  return (
    <div className="like-content">
      <span className="fs-8"><Heart className="font-danger"/></span>
      <span className="pull-right comment-number">
        <span className="fs-7">20 </span>
        <span><i className="fa fa-share-alt ms-1" /> </span>
      </span>
      <span className="pull-right comment-number">
        <span className="fs-7">10 </span>
        <span><i className="fa fa-comments-o ms-1" /></span>
      </span>
    </div>
  );
};

export default LikeContent;
