import { useAppDispatch } from "@/Redux/Hooks";
import { setSearchTerm } from "@/Redux/Reducer/Layout/TableSearchSlice";
import { Input } from "reactstrap";

const SearchBar = () => {
  const dispatch = useAppDispatch();

  const handleSearch = (e: { target: { value: any } }) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className='dataTables_filter'>
      <label>
        Search:
        <Input type='search' onChange={handleSearch} />
      </label>
    </div>
  );
};

export default SearchBar;
