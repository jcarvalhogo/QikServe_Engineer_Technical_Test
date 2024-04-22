import {Row, Common, Avatar} from './DesignSystem'
import logo from '../assets/logo.png'
import picture from '../assets/picture.png'
import Alignment from "./layout/enums/Alignment";

export default class Header {
  build() {
    return (
      <Row height={100} color={Common.backgroundHeader} horizontalAlignment={Alignment.CENTER}>
        <Row
          width={Common.widthSizeBody}
          height={100}
          widthUnit={'px'}
          verticalAlignment={Alignment.CENTER}
          horizontalAlignment={Alignment.SPACE_BETWEEN}
        >
          <img src={logo} alt={'logo'} width={160}/>

          <a href={'https://www.linkedin.com/in/jcarvalho-dev/'} target={'_blank'} rel="noreferrer">
            <Avatar src={picture} alt={'my picture'} sx={{width: '3.5rem', height: '3.5rem'}}/>
          </a>
        </Row>
      </Row>
    )
  }
}