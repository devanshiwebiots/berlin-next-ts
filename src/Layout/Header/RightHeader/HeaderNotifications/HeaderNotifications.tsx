import SVG from '@/CommonComponent/SVG';
import { CheckAll, Notifications } from '@/Constant';
import { headerNotificationsData } from '@/Data/Layout/Header';
import Link from 'next/link';
import React from 'react'
import { Badge } from 'reactstrap';

const HeaderNotifications = () => {
    return (
        <li className="onhover-dropdown">
            <div className="notification-box">
                <SVG iconId="Bell" />
                <Badge color='primary' pill>{'4'}</Badge>
            </div>
            <div className="onhover-show-div notification-dropdown">
                <h6 className="f-18 mb-0 dropdown-title">{Notifications}</h6>
                <ul>
                    {headerNotificationsData.map((item) => (
                        <li className="d-flex align-items-center" key={item.id}>
                            <div className={`flex-shrink-0 bg-light-${item.color}`}>
                                {item.icon}
                            </div>
                            <div className="flex-grow-1">
                                <p>
                                    <Link href={item.path}>{item.title} </Link>
                                    <span className="pull-right">{item.time}</span>
                                </p>
                            </div>
                        </li>
                    ))}
                    <li>
                        <Link className="btn btn-primary w-100" href="/app/chat/private_chat">{CheckAll}</Link>
                    </li>
                </ul>
            </div>
        </li>
    )
}
export default HeaderNotifications;