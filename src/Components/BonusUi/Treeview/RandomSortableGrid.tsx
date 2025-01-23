import React, { useEffect, useRef } from 'react';
import Sortable from 'sortablejs';
import { Card, CardBody, Col } from 'reactstrap';

const RandomSortableGrid = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      Sortable.create(gridRef.current, {
        animation: 150,
        onStart: () => console.log("Sorting started"),
        onEnd: () => console.log("Sorting ended"),
      });
    }
  }, []);

  return (
    <Col className="col-12">
      <Card>
        <div className="card-header pb-0">
          <h4>Random Sortable</h4>
          <p className="f-m-light mt-1">
            You can just drag and drop after entering your requirements.
          </p>
        </div>
        <CardBody>
          <div className="grid-box-wrapper" id="sortable-grids" ref={gridRef}>
            {Array.from({ length: 12 }, (_, index) => (
              <div className="grid-box" key={index}>
                <img src={`../assets/images/social-app/post-${(index % 9) + 1}.png`} alt={`Post ${index + 1}`} />
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RandomSortableGrid;
