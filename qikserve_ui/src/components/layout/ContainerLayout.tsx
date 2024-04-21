import React, {PropsWithChildren} from "react";
import {Box} from '../DesignSystem';

interface ContainerProps {
  padding?: number,
  borderRadius?: number,
  height?: number,
  width?: number,
  direction?: undefined | 'row' | 'column',
  horizontalAlignment?: undefined | 'space-between' | 'space-evenly' | 'space-around' | 'flex-end' | 'flex-start' | 'center',
  verticalAlignment?: undefined | 'space-between' | 'space-evenly' | 'space-around' | 'flex-end' | 'flex-start' | 'center',
  color?: string,
  unit?: undefined | 'px' | '%',
}

const ContainerLayout: React.FC<PropsWithChildren<ContainerProps>> =
  ({
     padding,
     borderRadius,
     height,
     width,
     direction,
     horizontalAlignment,
     verticalAlignment,
     color,
     unit,
     children
   }) => {
    return (<Box
        sx={{
          display: 'flex',
          flexDirection: direction ?? 'column',
          alignItems: horizontalAlignment ?? 'flex-start',
          justifyContent: verticalAlignment ?? 'flex-start',
          margin: '0px',
          width: `${width === undefined ? '100%' : `${width}${unit === undefined ? 'px' : unit}`}`,
          height: height === undefined ? 'auto' : `${height}px`,
          padding: `${padding ?? 0}px`,
          background: color ?? '#FEFEFE',
          backgroundColor: color ?? '#FEFEFE',
          borderRadius: `${borderRadius ?? 4}px`,
        }}>
        {children}
      </Box>
    )
  }

export default ContainerLayout;