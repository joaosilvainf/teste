export type Product = 
{
  code :string
  description :string
  price :number
  stock :number
  image ?:string
}

export type Customer = 
{
  name :string
  phone :string
  adress :Address
}

export type Address = {
  street : string
  number : string
  city : string
  country : string
  zipcode : string
}

export type Cart =
{
  id : number
  productCode: string
  quantity : number
}

export type Order =
{
  customer : Customer
  cart : Cart
  orderDate : Date
  deliveryAddress : string
  status : string
  totalPrice : number
}