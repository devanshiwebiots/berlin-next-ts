import { griditem } from "@/Types/UikitsType";
import React from "react";

const GridItem: React.FC<griditem> = ({ colClasses, text }) => {
  return (
    <div className={colClasses}>
      <span className='grid-space bg-light-secondary txt-secondary'>{text}</span>
    </div>
  );
};

export default GridItem;
