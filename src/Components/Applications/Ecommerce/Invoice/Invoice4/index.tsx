"use client";
import { Card, CardBody, Container, Table } from "reactstrap";
import InvoiceFourHeader from "./InvoiceFourHeader";
import InvoiceFourDetail from "./InvoiceFourDetail";
import InvoiceFourTable from "./InvoiceFourTable";
import InvoiceTotal from "./InvoiceTotal";
import { InvoiceButtons } from "../Common/InvoiceButtons";

const InvoiceFourContainer = () => {
  return (
    <>
      <Container className='invoice-2'>
        <Card>
          <CardBody>
            <Table className='table-wrapper table-responsive theme-scrollbar' borderless>
              <tbody>
                <tr>
                  <InvoiceFourHeader />
                </tr>
                <tr>
                  <InvoiceFourDetail />
                </tr>
                <tr>
                  <InvoiceFourTable />
                </tr>
                <td style={{ height: "3px", width: "100%", padding: "0", background: "linear-gradient(90deg, #2A5699 20.61%, rgba(111, 90, 153, 0) 103.6%)", display: "block", marginTop: 6 }}></td>
                <tr>
                  <InvoiceTotal />
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Container>
      <InvoiceButtons />
    </>
  );
};

export default InvoiceFourContainer;
