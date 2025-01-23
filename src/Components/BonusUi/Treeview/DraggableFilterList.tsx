import React, { useEffect, useRef } from "react";
import Sortable from "sortablejs";
import { Card, CardBody, Col } from "reactstrap";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const DraggableFilterList = () => {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (listRef.current) {
      Sortable.create(listRef.current, {
        filter: ".filtered",  
        animation: 150,
        onStart: () => console.log("Dragging started"),
        onEnd: () => console.log("Dragging ended"),
      });
    }
  }, []);

  return (
    <Col sm={6}>
      <Card>
        <div className="card-header pb-0">
          <h4>Draggable Filtering</h4>
          <p className="f-m-light mt-1">
            Try dragging the object with the <code>.list-light-* </code> backdrop. That item is filtered out by the filter option, so it is not possible to accomplish that.
          </p>
        </div>
        <CardBody className="draggable-filter">
          <ul className="list-group" id="draggable-filter" ref={listRef}>
            <li className="list-group-item">
              <Image height={37} width={37} className="rounded-circle" src={`${ImagePath}/user/1.jpg`} alt="user" />
              Teresa J. Mosteller
            </li>
            <li className="list-group-item">
              <Image height={37} width={37} src={`${ImagePath}/user/3.png`} alt="user" />
              Gloria D. Acheson
            </li>
            <li className="list-group-item filtered list-light-primary">
              <Image height={37} width={37} src={`${ImagePath}/user/2.jpg`} alt="user" />
              Sharon C. Obrien
            </li>
            <li className="list-group-item">
              <Image height={37} width={37} src={`${ImagePath}/user/5.jpg`} alt="user" />
              Bryan A. Owens
            </li>
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DraggableFilterList;
