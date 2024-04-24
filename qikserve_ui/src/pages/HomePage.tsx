import {ReactElement} from "react";
import {Header, ScaffoldLayout, Footer} from '../components/DesignSystem'
import BodyWidget from "./widgets/BodyWidget";


export default class HomePage {
  build(): ReactElement {
    return (
      new ScaffoldLayout({
        header: new Header().build(),
        body: <BodyWidget/>,
      }).build()
    )
  }
}