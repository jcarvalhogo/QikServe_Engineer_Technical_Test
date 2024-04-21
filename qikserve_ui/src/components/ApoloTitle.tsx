import {Typography, Common} from "../components/DesignSystem";

interface ApoloTitleProps {
  size: number,
  text: string,
  color?: string,
  weight?: string,
}

const ApoloTitle = ({text, size, color, weight}: ApoloTitleProps) => {
  return (
    <Typography
      variant='inherit'
      sx={{
        color: color ?? '#333333',
        fontSize: `${size * 0.063}rem`,
        fontWeight: weight ?? '500',
      }}
      fontFamily={Common.fontFamily}>
      {text}
    </Typography>);
}

export default ApoloTitle;
