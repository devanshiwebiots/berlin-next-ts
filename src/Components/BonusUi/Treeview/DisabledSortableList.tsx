import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DisabledLists } from "@/Constant";
import { disabledListData, DisableTreeData } from "@/Data/BonusUi/TreeView";
import { useEffect, useRef } from "react";
import { Card, CardBody, Col, ListGroupItem } from "reactstrap";
import Sortable from "sortablejs";

const DisabledSortableList = () => {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (listRef.current) {
      Sortable.create(listRef.current, {
        disabled: true,
        animation: 150,
      });
    }
  }, []);

  return (
    <Col lg={4}>
      <Card>
        <CommonCardHeader title={DisabledLists} span={DisableTreeData} />
        <CardBody>
          <ul className='list-group' id='disable-list' ref={listRef}>
            {disabledListData.map((item) => (
              <ListGroupItem key={item.id}>{item.content}</ListGroupItem>
            ))}
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DisabledSortableList;
