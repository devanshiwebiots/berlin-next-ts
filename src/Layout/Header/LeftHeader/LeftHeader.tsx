import React, { ChangeEvent, useEffect, useState } from 'react'
import { Col, FormGroup, Input } from 'reactstrap';
import HeaderDropdown from './HeaderDropdown';
import SVG from '@/CommonComponent/SVG';
import { MenuList } from '@/Data/Layout/Menu';
import { SearchSuggestionItem, SidebarItemType } from '@/Types/Layout.type';
import ResponsiveSearchList from './ResponsiveSearchList';

const LeftHeader = () => {
    const [arr, setArr] = useState<SearchSuggestionItem[]>([]);
    const [searchedWord, setSearchedWord] = useState<string>("");
    const [searchedArray, setSearchedArray] = useState<SearchSuggestionItem[]>([]);

    useEffect(() => {
        const suggestionArray: SearchSuggestionItem[] = [];
        const getAllLink = (item: SidebarItemType, icon: string | undefined) => {
            if (item.subMenu) {
                item.subMenu.forEach((ele) => {
                    getAllLink(ele, icon);
                });
            } else {
                suggestionArray.push({ icon: icon, title: item.title || '', path: item.path || "" });
            }
        };
        MenuList.forEach((item) => {
            item.menu.forEach((child) => {
                getAllLink(child, child.icon);
            });
        });
        setArr(suggestionArray);
    }, []);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        if (!searchedWord) setSearchedWord("");
        setSearchedWord(e.target.value);
        let data = [...arr];
        let result = data.filter((item) => item.title?.toLowerCase().includes(e.target.value.toLowerCase()));
        setSearchedArray(result);
    };
    return (
        <Col lg={5} md={5} xs='auto' className="left-header box-col-5 horizontal-wrapper p-0">
            <div className="left-menu-header">
                <ul className="header-left">
                    <li>
                        <FormGroup className="w-100">
                            <div className="Typeahead Typeahead--twitterUsers">
                                <div className="u-posRelative d-flex">
                                    <HeaderDropdown />
                                    <Input className="demo-input py-0 Typeahead-input form-control-plaintext w-100" type="text" placeholder="Enter your search..." name="q" value={searchedWord} onChange={(e) => handleSearch(e)} />
                                    <SVG className="search-bg svg-color" iconId='fill-search' />
                                </div>
                                <div className={`Typeahead-menu custom-scrollbar ${searchedWord.length ? "is-open" : ""}`} >
                                    <ResponsiveSearchList searchedArray={searchedArray} setSearchedWord={setSearchedWord} />
                                </div>
                            </div>
                        </FormGroup>
                    </li>
                </ul>
            </div>
        </Col>
    )
}
export default LeftHeader;