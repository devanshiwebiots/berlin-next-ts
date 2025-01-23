import SVG from '@/CommonComponent/SVG';
import { CheckAll, ImagePath, Message } from '@/Constant';
import { headerMessageData } from '@/Data/Layout/Header';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { X } from 'react-feather';

const HeaderMessage = () => {
    return (
        <li className="onhover-dropdown">
            <div className="message">
                <SVG iconId='Message' />
            </div>
            <div className="onhover-show-div message-dropdown">
                <h6 className="f-18 mb-0 dropdown-title">{Message}</h6>
                <ul>
                    {headerMessageData.map((item) => (
                        <li key={item.id}>
                            <div className="d-flex align-items-start">
                                <div className="message-img">
                                    <Image width={40} height={40} src={`${ImagePath}/user/${item.image}`} alt="" />
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="mb-1">
                                        <Link href="/app/chat/private_chat">{item.name}</Link>
                                    </h5>
                                    <p>{item.text}</p>
                                </div>
                                <div className="notification-right"><X /></div>
                            </div>
                        </li>
                    ))}
                    <li>
                        <Link className="btn btn-primary w-100" href="/app/letter_box">{CheckAll}</Link>
                    </li>
                </ul>
            </div>
        </li>
    )
}
export default HeaderMessage;