import { AddToCart, AddToWishList, BuyNow } from "@/Constant";
import Link from "next/link";

export const ProductDetailButton = () => {

  return (
    <div className="m-t-15 btn-showcase">
      <Link className="btn btn-primary" href={`/app/ecommerce/cart`} title="">
        <i className="fa fa-shopping-basket me-1"></i>
        {AddToCart}
      </Link>
      <Link className="btn btn-success" href={`/app/ecommerce/checkout`} title="">
        <i className="fa fa-shopping-cart me-1"></i>
        {BuyNow}
      </Link>
      <Link className="btn btn-secondary" href={`/app/ecommerce/wishlist`}>
        <i className="fa fa-heart me-1"></i>
        {AddToWishList}
      </Link>
    </div>
  );
};