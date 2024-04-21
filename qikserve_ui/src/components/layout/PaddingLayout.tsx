import React, {PropsWithChildren} from "react";
import EdgeInserts from "./EdgeInserts";
import {Box} from "../DesignSystem";

interface PaddingProps {
  padding: EdgeInserts;
  width?: number,
  widthUnit?: 'px' | '%'
}

const PaddingLayout: React.FC<PropsWithChildren<PaddingProps>> =
  ({
     padding,
     width,
     widthUnit,
     children,
   }) => {
    return (
      <Box sx={{
        paddingTop: `${padding.top}px`,
        paddingLeft: `${padding.left}px`,
        paddingRight: `${padding.right}px`,
        paddingBottom: `${padding.bottom}px`,
        width: `${width === undefined ? 'auto' : width}${widthUnit ?? 'px'}`,
      }}>
        {children}
      </Box>
    )
  }

export default PaddingLayout;