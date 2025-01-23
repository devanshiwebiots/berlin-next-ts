import { DescriptionLists } from "@/Constant";
import { OrderListData } from "@/Data/Uikits/typography";
import React, { Fragment } from "react";
import { Col } from "reactstrap";

export const DescriptionList = () => {
  return (
    <Col md='12' xxl='6'>
      <div className='card-wrapper border rounded-3'>
        <h6 className='sub-title fw-bold'>{DescriptionLists}</h6>
        <dl className='pb-1 row'>
          {OrderListData.map((item, index) => (
            <Fragment key={index}>
              <dt className='col-sm-3'>{item.dt}</dt>
              <dd className='col-sm-9'>{item.dd}</dd>
            </Fragment>
          ))}
          <dt className="col-sm-3">Term</dt>
          <dd className='col-sm-9'>
            <p>Definition for the term.</p>
            <p>And some more placeholder definition text.</p>
          </dd>
           <dt className="col-sm-3">Nesting</dt>
          <dd className='col-sm-9'>
            <dl className='row'>
              <dt className='col-sm-4'>Nested definition list</dt>
              <dd className='col-sm-8'>I heard you like definition lists. Let me put a definition list inside your definition list.</dd>
            </dl>
          </dd>
        </dl>
      </div>
    </Col>
  );
};
