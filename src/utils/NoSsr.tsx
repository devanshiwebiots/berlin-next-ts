import dynamic from "next/dynamic";
import React, { Fragment, ReactNode } from "react";

interface NoSsrProps {
 children: ReactNode;
}

const NoSsr: React.FC<NoSsrProps> = (props) => <Fragment>{props.children}</Fragment>;

export default dynamic(() => Promise.resolve(NoSsr), {ssr: false});