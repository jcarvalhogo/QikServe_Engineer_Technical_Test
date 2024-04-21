import React, {PropsWithChildren} from "react";
import {Box} from "../DesignSystem";

interface SubBodyProps {
  color?: string,
  padding?: string,
}

const ApoloSubBody: React.FC<PropsWithChildren<SubBodyProps>> =
  ({
     color,
     padding,
     children
   }) => {
    return (<Box sx={{
      width: '100%',
      backgroundColor: color ?? '#F5F5F5',
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'column',
      padding: padding ?? '16px',
    }}>
      {children}
    </Box>)
  }

export default ApoloSubBody;