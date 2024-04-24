import {Box, SizeBox} from '../DesignSystem'
import {ReactElement} from "react";

interface ScaffoldLayoutProps {
  header?: ReactElement,
  body?: ReactElement,
  footer?: ReactElement,
}

class ScaffoldLayout {
  header?: ReactElement;
  body?: ReactElement;
  footer?: ReactElement

  constructor({header, body, footer}: ScaffoldLayoutProps) {
    this.header = header;
    this.body = body;
    this.footer = footer;
  }

  build() {
    return (
      <Box sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
      }}>
        {this.header ?? <SizeBox/>}
        <Box sx={{width: '100%'}}>
          {this.body ?? <SizeBox/>}
        </Box>
        {this.footer ?? <SizeBox/>}
      </Box>
    )
  }

}

export default ScaffoldLayout;