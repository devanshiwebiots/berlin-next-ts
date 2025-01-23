import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { CurrentOrdersTitle, Href, ImagePath } from "@/Constant";
import { ordersData } from "@/Data/General/Dashboard/Default";
import { useAppSelector } from "@/Redux/Hooks";
import Link from "next/link";
import { Button, Card, CardBody, Col, Input, Table } from "reactstrap";

const CurrentOrders = () => {
  const searchTerm = useAppSelector((state) => state.search.searchTerm);
  const FilterOrderTablesData = ordersData.filter((transaction) => transaction.customerName.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <Col xxl={6} lg={8} className="box-col-8e">
      <Card>
        <DashboardCommonHeader title={CurrentOrdersTitle} search="true" dropDownFalse />
        <CardBody className="px-0 pt-1 recent-order">
          <div className="table-responsive custom-scrollbar">
            <Table className="table display" id="recent-order">
              <thead>
                <tr>
                  <th>
                    <div className="form-check">
                      <Input className="form-check-input" type="checkbox" value="" />
                    </div>
                  </th>
                  <th>Customers name</th>
                  <th>Order Date</th>
                  <th>Items Name</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {FilterOrderTablesData.length > 0 ? (
                  <>
                    {FilterOrderTablesData.map((order) => (
                      <tr key={order.id}>
                        <td>
                          <div className="form-check">
                            <Input className="form-check-input" type="checkbox" value="" />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="flex-shrink-0">
                              <img src={`${ImagePath}/${order.customerImage}`} alt="" />
                            </div>
                            <div className="flex-grow-1">
                              <Link href={Href}>
                                <h6>{order.customerName}</h6>
                                <span>{order.id}</span>
                              </Link>
                            </div>
                          </div>
                        </td>
                        <td>
                          <h6>{order.orderDate}</h6>
                          <span>{order.orderTime}</span>
                        </td>
                        <td>{order.itemName}</td>
                        <td>{order.price}</td>
                        <td>
                          <Button color="" className={`btn ${order.status === "Paid" ? "bg-light-primary txt-primary" : order.status === "Pending" ? "bg-light-secondary txt-secondary" : "bg-light-warning txt-warning"}`}>
                            {order.status}
                          </Button>
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

export default CurrentOrders;
