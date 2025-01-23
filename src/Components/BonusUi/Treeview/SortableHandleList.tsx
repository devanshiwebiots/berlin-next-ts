import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { HandleList } from "@/Constant";
import { handlelistItems, HandleTreeData } from "@/Data/BonusUi/TreeView";
import React, { useEffect, useRef } from "react";
import { Card, CardBody, Col, ListGroupItem } from "reactstrap";
import Sortable from "sortablejs";

const SortableHandleList: React.FC = () => {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (listRef.current) {
      Sortable.create(listRef.current, {
        handle: ".handle",
        animation: 150,
      });
    }
  }, []);

  return (
    <Col sm={6}>
      <Card>
        <CommonCardHeader title={HandleList} span={HandleTreeData} />
        <CardBody className='sortable-handler'>
          <ul className='list-group' ref={listRef}>
            {handlelistItems.map((item, index) => (
              <ListGroupItem key={index} className={`${index % 2 === 0 ? "light-background" : ""}`}>
                <i className='fa fa-arrows handle'></i>
                {item}
              </ListGroupItem>
            ))}
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SortableHandleList;
