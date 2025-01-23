import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import SVG from "@/CommonComponent/SVG";
import { SalesByProductTitle } from "@/Constant";
import { CountrySales, ProductSales } from "@/Data/General/Dashboard/Default";
import { Card, CardBody } from "reactstrap";
import { MapContainer, TileLayer } from "react-leaflet";
import { AustaliaMapPosition, IndianMapPosition } from "@/Data/Miscellaneous/Maps";

const IndiaMapProps = {
  center: IndianMapPosition,
  zoom: 2,
};
const SalesByProduct = () => {
  const totalItems = ProductSales.reduce((sum, product) => sum + product.count, 0);
  return (
    <div className="col-xxl-6 col-lg-8 box-col-8e">
      <Card className="overflow-hidden">
        <DashboardCommonHeader title={SalesByProductTitle} />
        <CardBody className="user-continent pb-0">
          <div className="user-map-menu d-flex align-items-center gap-5">
            <div className="user-items">
              <h5>
                {totalItems}
                <span>items</span>
              </h5>
              <div className="progress">
                {ProductSales.map((product, index) => (
                  <div key={index} className={`progress-bar bg-${product.color}`} role="progressbar" style={{ width: `${(product.count / totalItems) * 100}%` }} aria-valuenow={(product.count / totalItems) * 100} aria-valuemin={0} aria-valuemax={100} />
                ))}
              </div>
            </div>
            <div className="map-items">
              <ul className="d-flex align-items-center gap-3">
                {ProductSales.map((product, index) => (
                  <li key={index}>
                    <h5>
                      <span className={`bg-${product.color}`}></span>
                      {product.name}
                    </h5>
                    <p className="mb-0">{product.count}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="contries-sale d-flex gap-4">
            <div className="map-value">
              <h5>All Over Product Sale</h5>
              <ul>
                {CountrySales.map((country, index) => (
                  <li key={index}>
                    <div className="d-flex gap-2">
                      <div className="flex-shrink-0">
                        <SVG iconId="map-loaction" className={`fill-${country.color}`} />
                      </div>
                      <div className="flex-grow-1">
                        <h6>{country.name}</h6>
                      </div>
                      <span>{country.percentage}%</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="map">
              <div className="jvector-map-height" id="world-map2">
                <MapContainer className="custom-map" {...IndiaMapProps} style={{ height: 389 }}>
                  <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
                </MapContainer>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default SalesByProduct;
