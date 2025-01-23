import { Href } from '@/Constant';
import Link from 'next/link';
import { useState } from 'react'
import { Maximize } from 'react-feather';

const ZoomInOut = () => {
    const [fullScreen, setFullScreen] = useState(false);
    const fullScreenHandler = (isFullScreen: boolean) => {
        setFullScreen(isFullScreen);
        if (isFullScreen) {
            document.documentElement.requestFullscreen();
        } else {
            document?.exitFullscreen();
        }
    };

    return (
        <li>
            <Link onClick={() => fullScreenHandler(!fullScreen)} href={Href}>
                <Maximize />
            </Link>
        </li>
    );
};
export default ZoomInOut