// types/react-jvectormap.d.ts
declare module '@react-jvectormap/core' {
    import * as React from 'react';
  
    export interface IVectorMapProps {
      map: any;  // Define more specific types if needed
      backgroundColor?: string;
      zoomOnScroll?: boolean;
      containerStyle?: React.CSSProperties;
      containerClassName?: string;
      regionStyle?: {
        initial?: React.CSSProperties;
        hover?: React.CSSProperties;
      };
      series?: {
        regions?: {
          attribute?: string;
          values?: { [key: string]: number };
          scale?: string[];
          normalizeFunction?: string;
        }[];
      };
    }
  
    export class VectorMap extends React.Component<IVectorMapProps> {}
  }
  
  declare module '@react-jvectormap/world' {
    export const worldMill: any;
  }
  