import { CommonDropdown } from "@/CommonComponent/CommonDropdown/CommonDropdown";
import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { Href, ImagePath, TopSellingProductsTitle } from "@/Constant";
import { TopSellingProductsData } from "@/Data/General/Dashboard/EcommerceData";
import { useAppSelector } from "@/Redux/Hooks";
import Link from "next/link";
import { Card, CardBody, Col, FormGroup, Input, Table } from "reactstrap";

const TopSellingProducts = () => {
  const searchTerm = useAppSelector((state) => state.search.searchTerm);
  const FilterOrderTablesData = TopSellingProductsData.filter((transaction) => transaction.productName.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <Col xl={7} className="box-col-7">
      <Card>
        <DashboardCommonHeader title={TopSellingProductsTitle} search="true" dropDownFalse />
        <CardBody className="last-order px-0 pt-1">
          <div className="table-responsive custom-scrollbar">
            <Table className="table display" id="last-orders">
              <thead>
                <tr>
                  <th className="checkbox-checked">
                    <FormGroup check>
                      <Input type="checkbox" />
                    </FormGroup>
                  </th>
                  <th>Product Name</th>
                  <th>Date & Time</th>
                  <th>Customer</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {FilterOrderTablesData.length > 0 ? (
                  <>
                    {FilterOrderTablesData.map((item, i) => (
                      <tr key={i}>
                        <td className="checkbox-checked">
                          <FormGroup check>
                            <Input type="checkbox" />
                          </FormGroup>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="flex-shrink-0">
                              <img src={`${ImagePath}/${item.imgSrc}`} alt="product" />
                            </div>
                            <div className="flex-grow-1">
                              <Link href={Href}>
                                <h6>{item.productName}</h6>
                                <span>{item.productCode}</span>
                              </Link>
                            </div>
                          </div>
                        </td>
                        <td>
                          <h6>{item.date}</h6>
                          <span>{item.time}</span>
                        </td>
                        <td>{item.customer}</td>
                        <td>{item.price}</td>
                        <td className={item.statusClass}>{item.status}</td>
                        <td>
                          <CommonDropdown />
                        </td>
                      </tr>
                    ))}
                  </>
                ) : (
                  <tr>
                    <th colSpan={7} className="text-center">
                      No matching records found
                    </th>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TopSellingProducts;
