import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ImagePath, StackableTreeView } from "@/Constant";
import { StackableTreeData } from "@/Data/BonusUi/TreeView";
import { SortableItem } from "@/Types/BonusUiType";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import Sortable from "sortablejs";

interface NestedSortableListProps {
  items: SortableItem[];
}

const SortableSwapList: React.FC<NestedSortableListProps> = ({ items }) => {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (listRef.current) {
      const initSortable = (element: HTMLElement) => {
        Sortable.create(element, {
          group: "shared",
          animation: 150,
          handle: ".sortable-handle",
          onEnd: (event) => console.log("Sorting ended:", event),
        });

        Array.from(element.querySelectorAll(".list-group")).forEach((el) => {
          initSortable(el as HTMLElement);
        });
      };

      initSortable(listRef.current);
    }
  }, []);

  const renderItems = (items: SortableItem[]) => (
    <ListGroup>
      {items.map((item) => (
        <ListGroupItem key={item.id} className='nested-1 sortable-item'>
          <div className='sortable-handle'>
            <Image height={200} width={200} src={`${ImagePath}/${item.image}`} alt='' /> {item.content}
          </div>
          {item.children && renderItems(item.children)}
        </ListGroupItem>
      ))}
    </ListGroup>
  );

  return (
    <Col lg={6}>
      <Card>
        <CommonCardHeader title={StackableTreeView} span={StackableTreeData} />
        <CardBody className='swap-wrapper'>
          <ul className='list-group p-0' ref={listRef} id='sortable-swap'>
            {renderItems(items)}
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SortableSwapList;
