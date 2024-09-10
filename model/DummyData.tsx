import { Cart, Product } from "./Model";
var AllProducts : Product[] = [
    {
      code: 'HCO123',
      description: "Athletic mens walking sneakers",
      price: 92.32,
      stock: 10,
    },
    {
      code: 'KCO123',
      description: "Athletic kids running sneakers",
      price: 52.32,
      stock: 30,
    }
    ,
    {
      code: 'WCO123',
      description: "Athletic Womans running sneakers",
      price: 90.32,
      stock: 0,
    },
    {
      code: 'XHCO123',
      description: "Xlow mens walking sneakers",
      price: 92.32,
      stock: 10,
    },
      {
        code: 'XKCO123',
        description: "Xlow kids running sneakers",
        price: 52.32,
        stock: 30,
      }
      ,
      {
        code: 'XWCO123',
        description: "Xlow Womans running sneakers",
        price: 90.32,
        stock: 0,
      }
  ];

var CartList : Cart[] = [
  {
    id: 1,
    productCode: 'HCO123',
    quantity: 2,
  },
  {
    id: 1,
    productCode: 'KCO123',
    quantity: 1,
  }
];  
  export {CartList};
  export {AllProducts};