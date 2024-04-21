import React, {PropsWithChildren} from "react";
import Alignment from "./enums/Alignment";
import {Box} from "../DesignSystem";

interface RowProps {
  padding?: number,
  height?: number,
  width?: number,
  color?: string,
  widthUnit?: '%' | 'px' | 'vh',
  horizontalAlignment?: Alignment,
  verticalAlignment?: Alignment,
}

const RowLayout: React.FC<PropsWithChildren<RowProps>> =
  ({
     padding,
     height,
     width,
     color,
     horizontalAlignment,
     verticalAlignment,
     widthUnit,
     children
   }) => {
    return (<Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: verticalAlignment ?? 'flex-start',
          justifyContent: horizontalAlignment ?? 'flex-start',
          width: width === undefined ? '100%' : `${width}${widthUnit ?? 'px'}`,
          height: height === undefined ? 'auto' : `${height}px`,
          padding: `${padding ?? 0}px`,
          background: color ?? 'transparent',
          backgroundColor: color ?? 'transparent',
        }}>
        {children}
      </Box>
    )
  }

export default RowLayout;