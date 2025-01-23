import { AddToCartButton, ViewDetails } from "@/Constant";
import { useAppDispatch } from "@/Redux/Hooks";
import { addToCartData } from "@/Redux/Reducer/CartSlice";
import { ModalButtonsProp, ProductItemInterface } from "@/Types/EcommerceType";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const ModalButtons :React.FC<ModalButtonsProp> = ({ singleProduct, quantity }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const AddToCarts = (item: ProductItemInterface) => {
    dispatch(addToCartData({ item, quantity }));
    router.push(`/ecommerce/cart`);
  };
    
  return (
    <div className="addcart-btn">
      <Link href={`/app/ecommerce/cart`} className="btn btn-primary text-white me-3" onClick={() => AddToCarts(singleProduct)}>
        {AddToCartButton}
      </Link>
      <Link href={`/app/ecommerce/product_page`} className="btn btn-primary text-white">
        {ViewDetails}
      </Link>
    </div>
  );
};
