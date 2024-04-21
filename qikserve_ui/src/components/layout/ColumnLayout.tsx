import {Alignment, Box} from '../DesignSystem'
import React, {PropsWithChildren} from "react";

interface ColumnProps {
  padding?: number,
  height?: number,
  width?: number,
  widthFull?: boolean,
  color?: string,
  horizontalAlignment?: Alignment,
  verticalAlignment?: Alignment,
  widthUnit?: '%' | 'px' | 'vh',
  heightUnit?: '%' | 'px' | 'vh',
}

const ColumnLayout: React.FC<PropsWithChildren<ColumnProps>> =
  ({
     padding,
     height,
     width,
     color,
     horizontalAlignment,
     verticalAlignment,
     widthFull,
     widthUnit,
     heightUnit,
     children
   }) => {
    return (<Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: horizontalAlignment ?? 'flex-start',
          justifyContent: verticalAlignment ?? 'flex-start',
          width: width === undefined ? widthFull ? (widthUnit ?? '100%') : 'auto' : `${width}${widthUnit ?? 'px'}`,
          height: height === undefined ? 'auto' : `${height}${heightUnit ?? 'px'}`,
          padding: `${padding ?? 0}px`,
          background: color ?? 'transparent',
          backgroundColor: color ?? 'transparent',
        }}>
        {children}
      </Box>
    )
  }

export default ColumnLayout;