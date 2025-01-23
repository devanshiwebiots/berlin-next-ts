"use client";
import { NesetditemList, SwapData } from "@/Data/BonusUi/TreeView";
import { Container, Row } from "reactstrap";
import NestedSortableList from "./SortableList";
import SortableSwapList from "./SortableSwapList";
import SimpleSortableList from "./SimpleSortableList";
import SharedSortableLists from "./SharedSortableLists";
import DisabledSortableList from "./DisabledSortableList";
import SortableHandleList from "./SortableHandleList";
import DraggableFilterList from "./DraggableFilterList";
import RandomSortableGrid from "./RandomSortableGrid";
 

const TreeViewContainer = () => {
  return (
    <Container fluid>
      <Row>
        <NestedSortableList items={NesetditemList} />
        <SortableSwapList items={SwapData} />
        <SimpleSortableList/>
        <SharedSortableLists/>
        <DisabledSortableList/>
        <SortableHandleList/>
        <DraggableFilterList/>
        <RandomSortableGrid/>
      </Row>
    </Container>
  );
};

export default TreeViewContainer;
