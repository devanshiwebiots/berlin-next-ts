"use client";
import { Container, Row } from "reactstrap";
import BasicDropdown from "./BasicDropdown";
import RoundedDropdown from "./RoundedDropdown";
import SplitDropdown from "./SplitDropdown";
import HeadingDropdown from "./HeadingDropdown";
import WithInputType from "./WithInputType";
import DarkDropdown from "./DarkDropdown";
import UniqueDropdown from "./UniqueDropdown";
import JustifyContents from "./JustifyContents";
import Alignments from "./AlignmentDropdown/Alignments";
import HelperCard from "./HelperCard";
import DividerDropdown from "./DividerDropdown";
import DropdownSizing from "./DropdownSizing";
import DropdownAlignmentOptions from "./DropdownAlignmentOptions";
import DropdownOptions from "./DropDownOption";
 

const DropdownContainer = () => {
  return (
    <Container fluid className="dropdown-page">
      <Row>
         <BasicDropdown/>
         <RoundedDropdown/>
         <SplitDropdown/>
         <HeadingDropdown/>
         <WithInputType/>
         <DarkDropdown/>
         <DropdownAlignmentOptions/>
         <UniqueDropdown/>
         <JustifyContents/>
         <Alignments/>
         <HelperCard/>
         <DividerDropdown/>
         <DropdownSizing/>
         <DropdownOptions/>
      </Row>
    </Container>
  );
};

export default DropdownContainer;
