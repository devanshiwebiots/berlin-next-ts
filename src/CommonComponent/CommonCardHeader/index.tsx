import { CommonCardHeaderProp } from "@/Types/CommonTypes";
import React, { Fragment } from "react";
import { CardHeader } from "reactstrap";

const CommonCardHeader: React.FC<CommonCardHeaderProp> = ({ title, span, headClass, icon, tagClass }) => {
  return (
    <CardHeader className={headClass ? headClass : "pb-0"}>
      <h4 className={tagClass ? tagClass : ""}>{icon && icon}{title}</h4>
      {span && (
        <p className="f-m-light mt-1">
          {span.map((data, index) => (
            <Fragment key={index}>
              {data?.text} {data.code && <code>{data.code}</code>} {data.mark && <mark>{data.mark}</mark>}
            </Fragment>
          ))}
        </p>
      )}
    </CardHeader>
  );
};

export default CommonCardHeader;
