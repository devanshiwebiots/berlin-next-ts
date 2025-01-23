import React from "react";
import { CardHeader } from "reactstrap";
import { CommonDropdown } from "./CommonDropdown";
import { DashboardCommonHeaderType } from "@/Types/CommonTypes";
import SearchBar from "@/Components/General/Dashboard/common/SearchTable";

const DashboardCommonHeader: React.FC<DashboardCommonHeaderType> = ({ title, tagClass, dropDownFalse, children, classname, search }) => {
  return (
    <CardHeader className={`card-no-border pb-0 d-flex justify-content-between mt-0 ${classname}`}>
      <h4 className={tagClass ? tagClass : ""}>{title}</h4>
      {!dropDownFalse ? <CommonDropdown /> : null}
      {search && <SearchBar />}
      {children}
    </CardHeader>
  );
};

export default DashboardCommonHeader;
