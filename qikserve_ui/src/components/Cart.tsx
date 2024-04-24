import {IItem} from '../types/ShareTypes'
import {TableContainer, Paper, Table, TableHead, TableRow, TableCell} from './DesignSystem'
import {TableBody} from "@mui/material";

interface ICartProps {
  items: IItem[],
}

const Cart = ({items}: ICartProps) => {
  console.log('Items: ', items)
  return (
    <TableContainer sx={{backgroundColor: '#F8C471'}} component={Paper}>
      <Table>
        <TableHead>
          <TableRow sx={{width: '100%'}}>
            <TableCell width={'40px'}>ID</TableCell>
            <TableCell>NAME</TableCell>
            <TableCell>PRICE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item, index) => (
            (
              <TableRow>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{`U$ ${item.price.toLocaleString(navigator.language, {maximumFractionDigits: 2})}`}</TableCell>
              </TableRow>
            )
          ))}

        </TableBody>
      </Table>

    </TableContainer>
  )
}

export default Cart;