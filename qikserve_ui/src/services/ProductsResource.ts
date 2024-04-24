import Service from './service'
import {IProductDTO, IPromotion} from '../types/ShareTypes'

const endpoint = '/products'


const getAll = () => {
  return Service.http.get <IProductDTO[]>(endpoint);
}

const getAllId = (id: string) => {
  return Service.http.get<IProductDTO>(`${endpoint}/${id}`);
}

const ProductsResource = {
  getAll,
  getAllId,
}

export default ProductsResource;