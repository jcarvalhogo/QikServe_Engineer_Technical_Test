import {
  Row,
  Column,
  Common,
  Container,
  Alignment,
  SizeBox,
  Cart,
} from '../../components/DesignSystem'

import {IItem} from '../../types/ShareTypes'

const BodyWidget = () => {
  const height: number = 720;

  const items: IItem  [] = [
    {
      id: "Dwt5F7KAhi",
      name: "Amazing Pizza!",
      price: 1099,
      promotions: []
    },
    {
      id: "PWWe3w1SDU",
      name: "Amazing Burger!",
      price: 999,
      promotions: []
    },
    {
      id: "C8GDyLrHJb",
      name: "Amazing Salad!",
      price: 499,
      promotions: []
    },
    {
      id: "4MB7UfpTQs",
      name: "Boring Fries!",
      price: 199,
      promotions: []
    }
  ];

  return (
    <Column width={100}
            widthUnit={'%'}
            height={100}
            heightUnit={'vh'}
            horizontalAlignment={Alignment.CENTER}
            verticalAlignment={Alignment.FLEX_START}>
      <SizeBox height={40}/>
      <Row width={Common.widthSizeBody} widthUnit={'px'}>
        <Container color={'#F7DC6F'} borderRadius={10} height={height}>

        </Container>
        <SizeBox width={10}/>
        <Container color={'#F8C471'} borderRadius={10} height={height}>
          <Cart items={items}></Cart>
        </Container>
      </Row>
    </Column>
  )
}

export default BodyWidget;