import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import SVG from "@/CommonComponent/SVG";
import { Href } from "@/Constant";
import { TransactionsData } from "@/Data/General/Widgets/General/GeneralData";
import Link from "next/link";
import { Card, CardBody, Col, Table } from "reactstrap";

const Transaction = () => {
  return (
    <Col xxl={4} sm={6} className='box-col-6'>
      <Card className='transaction-history'>
        <DashboardCommonHeader title='Transaction History' />
        <CardBody>
          <div className='table-responsive custom-scrollbar'>
            <Table className='table display'>
              <tbody>
                {TransactionsData.map((transaction, index) => (
                  <tr key={index}>
                    <td>
                      <div className='d-flex'>
                        <span className={`bg-light-${transaction.color} history`}>
                          <SVG iconId={transaction.icon} />
                        </span>
                        <div className='flex-grow-1 ms-2'>
                          <Link href={Href}>
                            <span>{transaction.label}</span>
                            <h5>{transaction.date}</h5>
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td>{transaction.status}</td>
                    <td>{transaction.amount}</td>
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

export default Transaction;
