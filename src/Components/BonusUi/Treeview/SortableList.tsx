import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { StackableTreeView } from "@/Constant";
import { StackableTreeData } from "@/Data/BonusUi/TreeView";
import { NestedItem, NestedSortableListProps } from "@/Types/BonusUiType";
import React, { useEffect, useRef } from "react";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import Sortable from "sortablejs";

const NestedSortableList: React.FC<NestedSortableListProps> = ({ items }) => {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initSortable = (element: HTMLElement) => {
      Sortable.create(element, {
        group: "shared",
        animation: 150,
        handle: ".handle",
        onEnd: (event) => console.log("Sorting ended:", event),
      });

      Array.from(element.querySelectorAll(".nested-sortable")).forEach((el) => {
        initSortable(el as HTMLElement);
      });
    };

    if (listRef.current) {
      initSortable(listRef.current);
    }
  }, []);

  const renderItems = (items: NestedItem[]) => (
    <ListGroup className='nested-sortable handle'>
      {items.map((item) => (
        <ListGroupItem key={item.id} className='nested-1'>
          <i className='fa fa-folder-open '></i>
          {item.content}
          {item.children && renderItems(item.children)}
        </ListGroupItem>
      ))}
    </ListGroup>
  );

  return (
    <Col lg={6}>
      <Card>
        <CommonCardHeader title={StackableTreeView} span={StackableTreeData} />
        <CardBody className='stackable-list'>
          <div ref={listRef} className='list-group col nested-sortable p-0'>
            {renderItems(items)}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NestedSortableList;
