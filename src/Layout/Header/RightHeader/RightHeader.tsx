import React from 'react'
import { Col } from 'reactstrap'
import ResponsiveSearchInput from './ResponsiveSearchInput/ResponsiveSearchInput'
import ZoomInOut from './ZoomInOut/ZoomInOut'
import HeaderCart from './HeaderCart/HeaderCart'
import DarkMode from './DarkMode/DarkMode'
import HeaderBookmark from './HeaderBookmark/HeaderBookmark'
import HeaderNotifications from './HeaderNotifications/HeaderNotifications'
import HeaderMessage from './HeaderMessage/HeaderMessage'
import HeaderProfile from './HeaderProfile/HeaderProfile'
import HeaderLanguage from './HeaderLanguage/HeaderLanguage'

const RightHeader = () => {
    return (
        <Col lg={7} md={6} xs='auto' className="nav-right box-col-6 pull-right right-header p-0 ms-auto">
            <ul className="nav-menus">
                <ResponsiveSearchInput />
                <ZoomInOut />
                <HeaderLanguage/>
                <HeaderCart />
                <DarkMode />
                <HeaderBookmark />
                <HeaderNotifications/>
                <HeaderMessage/>
                <HeaderProfile/>
            </ul>
        </Col>
    )
}
export default RightHeader;