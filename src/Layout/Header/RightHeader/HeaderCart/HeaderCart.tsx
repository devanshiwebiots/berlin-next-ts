import SVG from "@/CommonComponent/SVG";
import { Cart, Checkout, Href, ImagePath, Subtotal, ViewCart } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { removeCartData } from "@/Redux/Reducer/CartSlice";
import { CartType } from "@/Types/EcommerceType";
import { getallCardTotal } from "@/utils/Ecommerce.service";
import FeatherIcons from "@/utils/FeatherIcons";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { Col } from "reactstrap";

const HeaderCart = () => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cartData);
  const { symbol } = useAppSelector((state) => state.product);
  const removefromcart = (item: CartType) => dispatch(removeCartData(item.id));

  return (
    <li className='cart-nav onhover-dropdown'>
      <div className='cart-box'>
        <SVG iconId='Buy' />
      </div>
      <div className='cart-dropdown onhover-show-div'>
        <h6 className='f-18 mb-0 dropdown-title'>{Cart}</h6>
        <ul>
          {cart.length > 0 ? (
            <Fragment>
              {cart.map((data, index) => (
                <Fragment key={index}>
                  <li>
                    <div className='d-flex'>
                      <Image width={50} height={55} className='img-fluid b-r-5 img-50' src={`${ImagePath}/ecommerce/${data.image}`} alt={Href} priority />
                      <div className='flex-grow-1'>
                        <Link href='/app/ecommerce/product'>
                          <span>{data.name}</span>
                        </Link>
                        <h6>{data.total} x ${data.price}</h6>
                      </div>
                      <div className='close-circle' onClick={() => removefromcart(data)}>
                        <Link href={Href}>
                          <FeatherIcons iconName='X' />
                        </Link>
                      </div>
                    </div>
                  </li>
                </Fragment>
              ))}
              <li className='total'>
                <h6 className='mb-0'>
                  {Subtotal} :
                  <span className='f-right'>
                    {symbol}
                    {getallCardTotal(cart)}
                  </span>
                </h6>
              </li>
              <li className='d-flex gap-2'>
                <Link className='view-cart btn btn-primary w-100' href={`/app/ecommerce/cart`}>
                  {ViewCart}
                </Link>
                <Link className='view-checkout btn btn-primary w-100' href={`/app/ecommerce/checkout`}>
                  {Checkout}
                </Link>
              </li>
            </Fragment>
          ) : (
            <Col sm={12} className='empty-cart-cls text-center'>
              <Image height={172} width={172} src={`${ImagePath}/ecommerce/icon-empty-cart.png`} className='img-fluid mb-4 mt-4' alt='Empty Cart' />
              <h3>
                <strong>Your Cart is Empty</strong>
              </h3>
              <h4>Add something to make me happy</h4>
              <Link className='btn btn-primary cart-btn-transform m-t-15 mb-4' href='/app/ecommerce/product'>
                continue shopping
              </Link>
            </Col>
          )}
        </ul>
      </div>
    </li>
  );
};
export default HeaderCart;
