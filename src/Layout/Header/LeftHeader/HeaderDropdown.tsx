import { EasyQuick } from '@/Constant';
import { headerMenu } from '@/Data/Layout/Header';
import Link from 'next/link';
import React, { useState } from 'react'

const HeaderDropdown = () => {
    const [headerDropdown, setHeaderDropdown] = useState(false);
    return (
        <div className="header-dropdown">
            <div className="d-flex gap-2" onClick={() => setHeaderDropdown(!headerDropdown)}>
                <h6>{EasyQuick}</h6>
                <i className="fa fa-angle-down" />
            </div>
            <ul className={`header-menu ${headerDropdown ? 'active' : ''}`}>
                {headerMenu.map((item) => (
                    <li key={item.id}>
                        <Link href={item.link}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default HeaderDropdown;