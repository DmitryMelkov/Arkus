import {ReactNode} from "react";
import styles from './popup-wrapper.module.scss';
import classNames from "classnames/bind";

type Props = {
    children: ReactNode
    isPopupOpen: boolean
    setPopupStatus: (value: boolean) => void
}

export default function PopupWrapper({ children, isPopupOpen, setPopupStatus }: Props) {
    const cx = classNames.bind(styles);

    const closePopupWrapper = (e: any) => {
        if (e.target.className.includes('popup-wrapper_wrapper_active')) {
            setPopupStatus(false)
        }
    }

    return (
        <div className={cx('wrapper', isPopupOpen ? 'wrapper_active' : '')} onClick={closePopupWrapper}>
            {children}
        </div>
    )
}