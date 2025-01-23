import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { SimpleLists } from "@/Constant";
import { SimpleTreeData } from "@/Data/BonusUi/TreeView";
import React, { useEffect, useRef } from "react";
import { Card, CardBody, Col, ListGroupItem } from "reactstrap";
import Sortable from "sortablejs";

const SimpleSortableList = () => {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (listRef.current) {
      Sortable.create(listRef.current, {
        animation: 150,
        onEnd: (event) => console.log("Sorting ended:", event),
      });
    }
  }, []);

  return (
    <Col lg={4} sm={6}>
      <Card>
        <CommonCardHeader title={SimpleLists} span={SimpleTreeData} />
        <CardBody>
          <ul className='list-group' ref={listRef}>
            <ListGroupItem>Section 1</ListGroupItem>
            <ListGroupItem>Section 2</ListGroupItem>
            <ListGroupItem>Section 3</ListGroupItem>
            <ListGroupItem>Section 4</ListGroupItem>
            <ListGroupItem>Section 5</ListGroupItem>
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SimpleSortableList;
