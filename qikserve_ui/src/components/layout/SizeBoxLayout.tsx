import {Box} from "../DesignSystem";

interface SizeBoxProps {
  width?: number,
  height?: number,
}

const SizeBoxLayout = ({width, height}: SizeBoxProps) => {
  return (<Box sx={{width: `${width ?? 0}px`, height: `${height ?? 0}px`}}></Box>);
}

export default SizeBoxLayout;