import { AddProduct } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setFilterToggle } from "@/Redux/Reducer/ProductSlice";
import Link from "next/link";
import { Filter } from "react-feather";

export const ProductListFilterHeader = () => {
  const { filterToggle } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="bg-light-primary light-box" onClick={() => dispatch(setFilterToggle())}>
        <a>
          <Filter className={`filter-icon ${filterToggle ? "hide" : "show"}`} />
          <i className={`icon-close filter-close ${filterToggle ? "show" : "hide"}`} />
        </a>
      </div>
      <Link className="btn btn-primary" href={`/app/ecommerce/add_product`}>
        <i className="fa fa-plus" />
        {AddProduct}
      </Link>
    </div>
  );
};