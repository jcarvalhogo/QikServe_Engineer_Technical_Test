import {Row, Title} from './DesignSystem'
import Alignment from "./layout/enums/Alignment";

export default class Header {
  build() {
    return (
      <Row height={100} color={'#4A148C'} horizontalAlignment={Alignment.CENTER}>
        <Row width={70} height={100} widthUnit={'%'} verticalAlignment={Alignment.CENTER}>
          <Title color={'#FAFAFA'} text={'QIK SERVER UI'} size={30}/>
        </Row>
      </Row>
    )
  }
}