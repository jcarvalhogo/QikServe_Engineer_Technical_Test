import Service from './service'

const endpoint = '/products'


interface IPromotion {
  "id": string,
  "type": string,
  "required_qty": number,
  "price": number
}

interface IProductDTO {
  "id": string,
  "name": string,
  "price": number,
  "promotions": IPromotion[],
}

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