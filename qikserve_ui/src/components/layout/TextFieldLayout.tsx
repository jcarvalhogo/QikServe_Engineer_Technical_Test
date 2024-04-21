import {
  TextField,
  Title,
  Row,
  Column,
  SizeBox,
  Alignment,
} from "../DesignSystem";


interface ApoloTextFieldProps {
  placeholder?: string,
  required?: boolean,
  unit?: 'px' | '%',
  width?: number;
  label?: string,
  help?: string,
}

const TextFieldLayout = ({placeholder, required, width, unit, label, help}: ApoloTextFieldProps) => {
  return (
    <Column widthFull={true}>
      {label === undefined ? <SizeBox/> :
        <Row verticalAlignment={Alignment.CENTER}>
          {required ? <Title size={16} text={'*'} color={'red'}/> : undefined}
          <SizeBox width={required ? 8 : 0}/>
          <Title size={16} text={label}/>
          <SizeBox width={help === undefined ? 0 : 8}/>
          {help === undefined ? undefined : <img src="/src/assets/icons/information.svg" alt="Information" style={{
            width: '16px',
            height: '16px'
          }}/>}
        </Row>
      }
      <TextField
        id="outlined-basic"
        sx={{
          width: width === undefined ? '100%' : `${width}${unit ?? 'px'}`,
        }}
        required={required ?? false}
        placeholder={placeholder ?? ''}
        variant="outlined"/>
    </Column>
  )
}

export default TextFieldLayout;

