import styles from './success-form-popup.module.scss';
import classNames from "classnames/bind";
import PopupWrapper from "@/app/components/Popups/PopupWrapper";

type Props = {
    setPopupStatus: (status: boolean) => void
    isPopupOpen: boolean
}

export default function SuccessFormPopup({ isPopupOpen, setPopupStatus }: Props) {
    const cx = classNames.bind(styles);

    const closePopup = () => {
        setPopupStatus(false);
    }

    return (
        <PopupWrapper isPopupOpen={isPopupOpen} setPopupStatus={setPopupStatus}>
            <div className={cx('success')}>
                <div className={cx('success__top-container')}>
                    <img className={cx('success__icon')} src={'/images/icons/success.svg'} alt={'Зеленая стрелочка'} loading='lazy'/>

                    <h3 className={cx('success__title')}>Ваша заявка принята!</h3>

                    <p className={cx('success__text')}>
                        Персональный менеджер<br/>
                        свяжется с Вами в ближайшее время
                    </p>
                </div>

                <button className={cx('success__button')} onClick={closePopup}>Понятно</button>
            </div>
        </PopupWrapper>
    )
}