import styles from './callback-popup.module.scss';
import classNames from "classnames/bind";
import PopupWrapper from "@/app/components/Popups/PopupWrapper";
import SuccessCallbackPopup from "@/app/components/Popups/SuccessCallbackPopup/SuccessCallbackPopup";
import {ChangeEvent, useEffect, useState} from "react";
import MaskedInput from "react-text-mask";
import {phoneMask} from "@/app/setup/masks";
import {postCallback} from "@/app/api/requests";

type Props = {
    setPopupStatus: (status: boolean) => void
    isPopupOpen: boolean
    isConsultationMode?: boolean
    callback?: () => void;
}

export default function CallbackPopup({setPopupStatus, isPopupOpen, isConsultationMode = false, callback}: Props) {
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
    const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState<boolean>(false);

    const cx = classNames.bind(styles);

    const closePopup = () => {
        setPopupStatus(false)
    }

    const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setPhoneNumber(value);
    }

    const submitForm = async (event: any) => {
        event.preventDefault();

        const formattedPhone = phoneNumber.replace(/\D/g, '');
        const finalPhone = `+7${formattedPhone.slice(1)}`;

        const response: any = await postCallback({
            phoneNumber: finalPhone
        })

        if (response.status === 202) {
            setIsSuccessPopupOpen(true);
            setPopupStatus(false);
            setPhoneNumber('')
            if(callback) callback();
        }
    }

    useEffect(() => {
        const isPhoneValid = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(phoneNumber);
        if (isPhoneValid) {
            setIsButtonDisabled(false)
        } else {
            setIsButtonDisabled(true)
        }
    }, [phoneNumber]);

    return (
        <>
            <SuccessCallbackPopup setPopupStatus={setIsSuccessPopupOpen} isPopupOpen={isSuccessPopupOpen}/>

            <PopupWrapper isPopupOpen={isPopupOpen} setPopupStatus={setPopupStatus}>
                <div className={cx('popup', isConsultationMode ? 'popup_consultation-mode' : '')}>
                    <button className={cx('popup__close-button')} onClick={closePopup}>
                        <img src={'/images/icons/popupClose.svg'} alt={'Закрыть'} loading='lazy'/>
                    </button>

                    <div className={cx('popup__mobile-container', isConsultationMode ? 'popup__consultation-mode' : '')}>
                        <img
                            className={cx('popup__mobile-logo')}
                            src={'/images/icons/mobileCallbackLogo.svg'}
                            alt={'Логотип'}
                            loading='lazy'
                        />

                        <h3 className={cx('popup__mobile-title')}>Есть вопросы?</h3>

                        <p className={cx('popup__mobile-subtitle')}>
                            Получите профессиональную консультацию
                        </p>

                        <p className={cx('popup__mobile-text')}>
                            Оставьте контакты, с вами свяжется
                            персональный менеджер
                        </p>
                    </div>

                    <MaskedInput
                        className={cx('popup__input', isConsultationMode ? 'popup__input_consultation-mode' : '')}
                        mask={phoneMask}
                        placeholder={'+7 (999) 999-99-99 '}
                        value={phoneNumber}
                        onChange={handlePhoneChange}
                    />

                    <button className={cx('popup__button')} onClick={submitForm} disabled={isButtonDisabled}>
                        Жду звонка
                    </button>
                </div>
            </PopupWrapper>
        </>
    )
}