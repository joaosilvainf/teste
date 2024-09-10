import { Product } from "@/model/Model";
import {
  SfButton,
  SfRating,
  SfCounter,
  SfLink,
  SfIconShoppingCart,
} from "@storefront-ui/react";

export default function ProductCardVertical(props: Product) {
  function addToCart() {
    return (
      <SfButton size="sm" slotPrefix={<SfIconShoppingCart size="sm"/>}>
        Add to cart
      </SfButton>  
    );
  }

  const pdpLink = "/products/" + props.code;

  return (
    <div className="border border-neutral-200 rounded-md hover:shadow-lg max-w-[240px]">
      <div className="relative">
        <SfLink href={pdpLink} className="block">
          <img
            src="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/sneakers.png"
            alt="Great product"
            className="object-cover h-auto rounded-md aspect-square"
            width="300"
            height="300"
          />
        </SfLink>
      </div>
      <div className="p-4 border-t border-neutral-200">
        <SfLink href={pdpLink} variant="secondary" className="no-underline">
          {props.description}
        </SfLink>
        <div className="flex items-center pt-1">
          <SfRating size="xs" value={5} max={5} />

          <SfLink href="#" variant="secondary" className="pl-1 no-underline">
            <SfCounter size="xs">{123}</SfCounter>
          </SfLink>
        </div>
        <p className="block py-2 font-normal typography-text-sm text-neutral-700">
          Lightweight • Non slip • Flexible outsole • Easy to wear on and off
        </p>
        <span className="block pb-2 font-bold typography-text-lg">
          {props.price}€
        </span>

        <p className="block py-2 font-normal typography-text-sm text-neutral-700">
          Stock:{props.stock}
        </p>

        {(props.stock || 0) > 0 && addToCart()}
      </div>
    </div>
  );
}
