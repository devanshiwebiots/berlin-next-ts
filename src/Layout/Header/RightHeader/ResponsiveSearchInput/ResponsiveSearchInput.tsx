import SVG from "@/CommonComponent/SVG";
import { MenuList } from "@/Data/Layout/Menu";
import { useAppDispatch } from "@/Redux/Hooks";
import { SearchSuggestionItem, SidebarItemType } from "@/Types/Layout.type";
import { ChangeEvent, useEffect, useState } from "react";
import { FormGroup, Input } from "reactstrap";
import SearchSuggestionList from "./SearchSuggestionList";
import { setResponsiveSearch } from "@/Redux/Reducer/Layout/LayoutSlice";
import { getLinkItemsArray } from "@/Redux/Reducer/Layout/HeaderBookmarkSlice";

const ResponsiveSearchInput = () => {
  const [arr, setArr] = useState<SearchSuggestionItem[]>([]);
  const [searchedWord, setSearchedWord] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [searchedArray, setSearchedArray] = useState<SearchSuggestionItem[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const suggestionArray: SearchSuggestionItem[] = [];
    let num = 0;
    const getAllLink = (item: SidebarItemType, icon: string | undefined) => {
      if (item.subMenu) {
        item.subMenu.forEach((ele) => {
          getAllLink(ele, icon);
        });
      } else {
        num = num + 1;
        suggestionArray.push({ icon: icon, title: item.title || "", path: item.path ? item.path : "", bookmarked: false, id: num });
      }
    };
    MenuList?.forEach((item) => {
      item.menu?.forEach((child) => {
        getAllLink(child, child.icon);
      });
    });
    setArr(suggestionArray);
    dispatch(getLinkItemsArray(suggestionArray));
  }, []);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (!searchedWord) setSearchedWord("");
    setSearchedWord(e.target.value);
    let result = arr.filter((item) => item.title?.toLowerCase().includes(e.target.value.toLowerCase()));
    setSearchedArray(result);
  };

  return (
    <>
      <li onClick={() => dispatch(setResponsiveSearch())} className='serchinput'>
        <div className='searchbox' onClick={() => setOpen(!open)}>
          <SVG iconId='fill-search' />
        </div>
        <FormGroup className={`search-form ${open ? "open" : ""}`}>
          <Input type='text' placeholder={"Search here..."} name='q' onChange={(e) => handleSearch(e)} value={searchedWord} />
          <div className={`Typeahead-menu w-100 custom-scrollbar ${searchedWord.length ? "is-open" : ""}`}>
            <SearchSuggestionList searchedArray={searchedArray} setSearchedWord={setSearchedWord} />
          </div>
        </FormGroup>
      </li>
    </>
  );
};
export default ResponsiveSearchInput;
