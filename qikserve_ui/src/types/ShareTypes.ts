export interface IPromotion {
  "id": string,
  "type": string,
  "required_qty": number,
  "price": number
}

export interface IProductDTO {
  "id": string,
  "name": string,
  "price": number,
  "promotions": IPromotion[],
}

export interface IItem extends IProductDTO {

}

