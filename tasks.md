https://www.youtube.com/watch?v=ZVnjOPwW4ZA&ab_channel=ProgrammingwithMosh
https://youtu.be/KPTG2sNacM4?si=VMTU3ExVLqrJrmbV 
https://youtu.be/8Gj35y0JhqQ?si=DQm720Y3xhyvz8Nd 

1. Routing (nextjs - based on convention - filesystem)

/products --> PLP - Product Listing Page
/products/:id --> PDP - Product Details Page

1.1 Add app/products
1.1.1 Add app/products/components
1.1.2 Create app/products/page.tsx
1.1.2.1 Copy contents from app/page.tsx to products/page.tsx
1.1.2.2 Rename products/page.tsx component to ProductListing
1.1.2.2 Move contents from app/components to products/components
1.1.2.3 Cleanup app/page.tsx
    <ProductListing />

1.1.3 Create DummyData.tsx in model 
1.1.3.1 Copy products to DummyData.tsx
    import { Product } from "./Model";
    const AllProducts : Product[] = [
    export {AllProducts};


1.2 Create Dynamic Route - Create /product/[productid]
1.2.1 Add app/products/[productid]/page.tsx (navigate to...)
1.2.2 Add app/products/[productid]/components/ProductDetails
--> Resolve ""use client"; 
1.2.3 Add app/products/[productid]/components/ProductSliderBasic
1.2.4 Add app/products/c[productid]/components/Galery
1.2.5 Styling
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
        <div className="flex flex-row md:flex-row">
            <GalleryHorizontal />
            <ProductDetails />
        </div>
        <h4 className="text-3xl">Recommendations</h4>
        <ProductSliderBasic />
    </div>
1.2.5 Capture [productid] na [productid]/page.tsx
     Page( { params }: { params: { productid: string } })

Agora queremos passar um produto para o ProductDetails

1.2.6 Receive productid in ProductDetails params
    ProductDetails(props : Product )

        <h1 className="mb-1 font-bold typography-headline-4">
          {props.description}
        </h1>
        <h2>{props.code}</h2>
        ...
1.2.7 Change [productid]/page.tsx
    const product = AllProducts.find(p=>p.code == params.productid); 
    
    if (product!==undefined)
    {
        return  !--FORÇAR ESTE ENTER --!
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-8">

        <ProductDetails {...product}/>
              
    }
    else
    {
        return <p>Product {params.productid} not found</p>
    }

1.3 Change links  ProductCardVertical
     const pdpLink = "/products/" + props.code

    href={pdpLink} na imagem e na description

1.4 test



https://www.youtube.com/watch?v=gEB3ckYeZF4&ab_channel=Codewithguillaume

2. Server Side
CORS
https://dummyjson.com/products

2.1 Create app/api/route.ts
export async function GET() {
    export async function GET() {
    return NextResponse.json({status:"alive!"})
2.1.1 http://localhost:3000/api

2.2 Create app/api/products/route.ts
export async function GET() {
    const data = AllProducts;        
    return NextResponse.json(data)
}

2.2.1 http://localhost:3000/api/products

POST| PUT | DEL...

2.3 create app/api/[productid]/route.ts
    request: Request, context:any) {
    const {params} = context;
    const product = AllProducts.find(p=>p.code == params.productid); 

2.3.1 http://localhost:3000/api/products/KCO123
2.3.2 http://localhost:3000/api/products/12345
if (product)
  {
    return NextResponse.json(product||{})
  }
  else
  {
    return NextResponse.json({ message: "Not Found" }, { status: 404 }); 
  }

2.4 Use API

https://nextjs.org/docs/pages/building-your-application/data-fetching/client-side

2.4.1 products/page.tsx
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
   

    useEffect(() => {
        fetch('/api/products')
          .then((res) => res.json())
          .then((data) => {
            setData(data)
            setLoading(false)
          })
      }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No  data</p>

2.4.1.1 http://localhost:3000/products


2.5 Debugging 
https://nextjs.org/docs/pages/building-your-application/configuring/debugging


