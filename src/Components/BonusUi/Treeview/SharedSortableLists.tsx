import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { SharedLists } from "@/Constant";
import { SharedListsTreeData } from "@/Data/BonusUi/TreeView";
import { useEffect, useRef } from "react";
import { Card, CardBody, Col, ListGroupItem, Row } from "reactstrap";
import Sortable from "sortablejs";

const SharedSortableLists = () => {
  const leftListRef = useRef<HTMLUListElement>(null);
  const rightListRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (leftListRef.current && rightListRef.current) {
      Sortable.create(leftListRef.current, {
        group: "shared",
        animation: 150,
        onEnd: (event) => console.log("Left list sorting ended:", event),
      });

      Sortable.create(rightListRef.current, {
        group: "shared",
        animation: 150,
        onEnd: (event) => console.log("Right list sorting ended:", event),
      });
    }
  }, []);

  return (
    <Col lg={4} sm={6}>
      <Card>
        
        <CommonCardHeader title={SharedLists} span={SharedListsTreeData} />

        <CardBody>
          <Row>
            <Col xs='6'>
              <ul className="list-group" id="mix-left" ref={leftListRef}>
                <ListGroupItem><span>Item 1</span></ListGroupItem>
                <ListGroupItem><span>Item 2</span></ListGroupItem>
                <ListGroupItem><span>Item 3</span></ListGroupItem>
                <ListGroupItem><span>Item 4</span></ListGroupItem>
                <ListGroupItem><span>Item 5</span></ListGroupItem>
              </ul>
            </Col>
            <Col xs='6'>
              <ul className="list-group" id="mix-right" ref={rightListRef}>
                <ListGroupItem className="light-background"><span>Item 6</span></ListGroupItem>
                <ListGroupItem className="light-background"><span>Item 7</span></ListGroupItem>
                <ListGroupItem className="light-background"><span>Item 8</span></ListGroupItem>
                <ListGroupItem className="light-background"><span>Item 9</span></ListGroupItem>
                <ListGroupItem className="light-background"><span>Item 10</span></ListGroupItem>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SharedSortableLists;
