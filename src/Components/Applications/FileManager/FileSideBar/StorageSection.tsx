import React from "react";
import { Button, ListGroup, ListGroupItem, Progress } from "reactstrap";
import { Storage, StorageData } from "@/Constant";
import { Database } from "react-feather";

export const StorageSection = () => {
  return (
    <>
    <ListGroup>
      <ListGroupItem>
        <Button outline color="primary" className="progress-text w-100"><Database />{Storage}</Button>
        <div className="m-t-15">
          <Progress color="primary" style={{ height: "8px" }} value="25" className="sm-progress-bar mb-3" />
          <h6>{StorageData}</h6>
        </div>
      </ListGroupItem>
    </ListGroup>
    <hr style={{ opacity: 0.25 }} />
    </>
  );
};