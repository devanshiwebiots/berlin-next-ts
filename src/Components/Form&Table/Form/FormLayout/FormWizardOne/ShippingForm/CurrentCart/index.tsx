import { CurrentCartHeading } from "@/Constant";
import { Col, Table } from "reactstrap";
import CurrentCartTableHead from "./CurrentCartTableHead";
import CurrentCartTableBody from "./CurrentCartTableBody";
import CurrentCartTableFooter from "./CurrentCartTableFooter";

const CurrentCart = () => {
  return (
    <Col xl="4">
      <div className="shipping-info custom-current">
        <h5>{CurrentCartHeading}</h5>
        <div className="overflow-auto theme-scrollbar">
          <Table striped>
            <CurrentCartTableHead/>
            <CurrentCartTableBody/>
            <CurrentCartTableFooter/>
          </Table>
        </div>
      </div>
    </Col>
  );
};

export default CurrentCart;
