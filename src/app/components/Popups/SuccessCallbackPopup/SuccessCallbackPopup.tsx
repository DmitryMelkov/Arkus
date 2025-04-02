import styles from './success-callback-popup.module.scss';
import classNames from "classnames/bind";
import PopupWrapper from "@/app/components/Popups/PopupWrapper";

type Props = {
    setPopupStatus: (status: boolean) => void
    isPopupOpen: boolean
}

export default function SuccessCallbackPopup({ isPopupOpen, setPopupStatus }: Props) {
    const cx = classNames.bind(styles);

    const closePopup = () => {
        setPopupStatus(false);
    }

    return (
        <PopupWrapper isPopupOpen={isPopupOpen} setPopupStatus={setPopupStatus}>
            <div className={cx('success')}>
                <img className={cx('success__mobile-logo')} src={'/images/icons/success.svg'} alt={'Зеленая стрелка'} loading='lazy' />

                <h3 className={cx('success__title')}>
                    <span className={cx('success__title_span')}>Спасибо! </span>
                    Специалист свяжется с Вами в ближайшее время
                </h3>

                <div className={cx('success__mobile-text')}>
                    <h3 className={cx('success__title-mobile')}>Спасибо!</h3>
                    <p className={cx('success__subtitle-mobile')}>
                        Специалист свяжется с Вами в ближайшее время
                    </p>
                </div>

                <button className={cx('success__button')} onClick={closePopup}>
                    Понятно
                </button>
            </div>
        </PopupWrapper>
    )
}