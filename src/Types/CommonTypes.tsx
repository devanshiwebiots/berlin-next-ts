import { ReactNode } from "react";

interface SpanType {
  text?: string;
  code?: string;
  mark?: string;
}

export interface CommonCardHeaderProp {
  title: string;
  span?: SpanType[];
  headClass?: string;
  icon?: JSX.Element;
  tagClass?: string;
}

export interface DashboardCommonHeaderType {
  title: string;
  tagClass?: string;
  dropDownFalse?: boolean;
  children?: ReactNode;
  classname?:string
  subtitle?:string
  search?:string
}

export interface DashBoardCommonDropdown {
  days?: boolean;
}

export interface Chartdata {
  headerTitle: string;
  chartId: string;
  chartData: any;
  types: any;
  height: number;
  colsize:number;
}

export interface SvgType {
  iconId: string;
  className?: string;
  style?: {
      height: string;
      width: string;
      fill: string;
      marginRight: string;
  };
  onClick?: () => void;
}


export interface CountdownDataProp {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

export interface CommonFileUploadProp {
  maxFiles?: number;
  multiple?: boolean;
  body?: boolean;
}
export interface CommonErrorPageType {
  error: string;
  color: string;
  src:string
}
