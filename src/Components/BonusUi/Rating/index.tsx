"use client";
import { Container, Row } from "reactstrap";
import SimpleRatingBar from "./SimpleRatingBar";
import MovingRating from "./MovingRating";
import SquareRating from "./SquareRating";
import PillRating from "./PillRating";
import ReverseRating from "./ReverseRating";
import StarRating from "./StarRating";
import HalfStarRating from "./HalfStarRating";
import ThumbUpDown from "./ThumbUpDown";
import HeartRating from "./HeartRating";
import EmojiRating from "./EmojiRating";
import EmojiRating2 from "./EmojiRating2";
 
const RatingContainer = () => {
  return (
    <Container fluid>
      <Row>
         <SimpleRatingBar/>
         <MovingRating/>
         <SquareRating/>
         <PillRating/>
         <ReverseRating/>
         <StarRating/>
         <HalfStarRating/>
         <ThumbUpDown/>
         <HeartRating/>
         <EmojiRating/>
         <EmojiRating2/>
      </Row>
    </Container>
  );
};

export default RatingContainer;
