import {ReactElement} from "react";
import {Header, ScaffoldLayout, Footer} from '../components/DesignSystem'
import BodyPage from "./BodyPage";


export default class HomePage {
  build(): ReactElement {
    return (
      new ScaffoldLayout({
        header: new Header().build(),
        body: <BodyPage></BodyPage>,
        footer: new Footer().build()
      }).build()
    )
  }
}