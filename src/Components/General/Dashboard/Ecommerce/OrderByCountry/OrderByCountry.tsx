import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { Href, OrdersbyCountriesTitle } from "@/Constant";
import { OrdersByCountriesData } from "@/Data/General/Dashboard/EcommerceData";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "react-feather";
import { Card, CardBody, Col, Table } from "reactstrap";

const OrderByCountry = () => {
  return (
    <Col xxl={4} lg={7} md={8} className="custom-order-1 box-col-7">
      <Card>
        <DashboardCommonHeader title={OrdersbyCountriesTitle} />
        <CardBody className="sales-countries">
          <div className="table-responsive custom-scrollbar">
            <Table className="table display">
              <tbody>
                {OrdersByCountriesData.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <div className="flex-shrink-0">
                          <span>{item.country}</span>
                        </div>
                        <div className="flex-grow-1">
                          <Link href={Href}>
                            <h6>{item.product}</h6>
                          </Link>
                          <span>{item.countryName}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className={item.percentageClass}>
                        {item.percentage}
                        {item.percentageIcon === "chevron-up" ? <ChevronUp/>: <ChevronDown/>}
                      </span>
                    </td>
                    <td>{item.date}</td>
                    <td>
                      <h6>{item.sales}</h6>
                      <span>{item.salesLabel}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OrderByCountry;
