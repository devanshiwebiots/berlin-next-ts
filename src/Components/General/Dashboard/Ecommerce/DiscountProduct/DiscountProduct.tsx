import SVG from "@/CommonComponent/SVG";
import { DiscountData } from "@/Data/General/Dashboard/EcommerceData";
import React from "react";
import { Plus } from "react-feather";
import { Card, CardBody, Button, Col, Row } from "reactstrap";

const DiscountProduct = () => {
  return (
    <Col xl={5} md={6} className="xl-30 box-col-4e">
      <Card className="discount-product">
        <CardBody>
          <Row>
            {DiscountData.map((data, i) => {
              return (
                <Col xl={6} md={12} sm={6} className={data.ColClass} key={i}>
                  <h4 className="f-w-600">{data.title}</h4>
                  <div className="d-flex align-items-center gap-2">
                    <div className={`main-box border-${data.SvgWrap}`}>
                      <SVG iconId={data.iconID} className={data.SvgClass} />
                    </div>
                    <p className="flex-grow-1">{data.description}</p>
                  </div>
                  <div className={`details-box bg-light-${data.Bgcolor}`}>
                    <h5>{data.H5}</h5>
                    <Button color={data.ButtonColor}>
                      {data.ButtonTitle}
                      <Plus className="ms-2" />
                    </Button>
                  </div>
                </Col>
              );
            })}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DiscountProduct;
