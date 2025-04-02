import styles from './form-popup.module.scss';
import classNames from "classnames/bind";
import PopupWrapper from "@/app/components/Popups/PopupWrapper";
import SuccessFormPopup from "@/app/components/Popups/SuccessFormPopup/SuccessFormPopup";
import {ChangeEvent, useEffect, useState} from "react";
import {postForm} from "@/app/api/requests";
import {phoneMask} from "@/app/setup/masks";
import MaskedInput from "react-text-mask";

type Props = {
    title: string;
    titleSpan: string;
    setPopupStatus: (status: boolean) => void;
    isPopupOpen: boolean;
    callback?: () => void;
}

export default function FormPopup({title, titleSpan, setPopupStatus, isPopupOpen, callback}: Props) {
    const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false)
    const [isCheckboxChecked, setIsCheckboxChecked] = useState<boolean>(false);
    const [formValues, setFormValues] = useState({
        name: '',
        organization: '',
        phone: ''
    })
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
    const [isButtonDelay, setIsButtonDelay] = useState<boolean>(false);

    const cx = classNames.bind(styles)

    const closePopup = () => {
        setPopupStatus(false)
    }

    const handleCheckboxClick = () => {
        setIsCheckboxChecked(!isCheckboxChecked);
    }

    const handleOrganizationChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setFormValues((previous) => ({
            ...previous,
            organization: value,
        }))
    }

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setFormValues((previous) => ({
            ...previous,
            name: value,
        }))
    }

    const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setFormValues((previous) => ({
            ...previous,
            phone: value,
        }))
    }

    const submitForm = async (event: any) => {
        event.preventDefault();

        const formattedPhone = formValues.phone.replace(/\D/g, '');
        const finalPhone = `+7${formattedPhone.slice(1)}`;

        setIsButtonDelay(true);

        const response = await postForm({
            name: formValues.name,
            organizationName: formValues.organization,
            phoneNumber: finalPhone
        })

        if (response.status === 202) {
            setIsSuccessPopupOpen(true);
            setPopupStatus(false);
            setFormValues({
                name: '',
                organization: '',
                phone: ''
            })
            setIsCheckboxChecked(false);
            if(callback) callback();
            setTimeout(() => setIsButtonDelay(false), 25000);
        } else {
            setIsButtonDelay(false);
        }
    }

    useEffect(() => {
        const isPhoneValid = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(formValues.phone);
        if (
            formValues.name &&
            formValues.name.length <= 100 &&
            formValues.organization.length <= 200 &&
            formValues.organization &&
            isPhoneValid &&
            isCheckboxChecked
        ) {
            setIsButtonDisabled(false)
        } else {
            setIsButtonDisabled(true)
        }
    }, [formValues, isCheckboxChecked])


    return (
        <>
            <SuccessFormPopup setPopupStatus={setIsSuccessPopupOpen} isPopupOpen={isSuccessPopupOpen} />

            <PopupWrapper isPopupOpen={isPopupOpen} setPopupStatus={setPopupStatus}>
                <div className={cx('popup')}>
                    <button className={cx('popup__close')} onClick={closePopup}>
                        <img src={'/images/icons/popupClose.svg'} alt={'Кнопка закрытия'} loading='lazy'/>
                    </button>

                    {/** Верхний блок */}
                    <div className={cx('popup__top')}>
                        <div className={cx('popup__top-left')}>
                            <h3 className={cx('popup__title')}>
                                {title}<br className={cx('popup__mobile-br')}/>
                                <span className={cx('popup__title_span')}>{titleSpan}</span>
                            </h3>

                            <p className={cx('popup__subtitle')}>Присоединяйтесь к сообществу успешных предприятий в
                                сфере ЖКХ !</p>

                            <p className={cx('popup__top-text')}>
                                Оставьте контакты, с вами свяжется персональный менеджер для обсуждения задачи
                            </p>
                        </div>

                        {/* <div className={cx('popup__top-right')}>
                            <p className={cx('popup__month-title')}>2 мес.</p>
                            <p className={cx('popup__month-text')}>БЕСПЛАТНО</p>
                        </div> */}
                    </div>

                    {/** Инпуты */}
                    <div className={cx('popup__center')}>
                        <div className={cx('popup__inputs')}>
                            <div className={cx('popup__input-container')}>
                                <input
                                    className={cx('popup__input')}
                                    placeholder={'Имя'}
                                    value={formValues.name}
                                    onChange={handleNameChange}
                                />
                                {formValues.name.length > 100 ? (
                                    <span className={cx('popup__input-error')}>Введите не более 100 символов.</span>
                                ) : ''}
                            </div>
                            <div className={cx('popup__input-container')}>
                                <input
                                    className={cx('popup__input')}
                                    placeholder={'Организация'}
                                    value={formValues.organization}
                                    onChange={handleOrganizationChange}
                                />
                                {formValues.organization.length > 200 ? (
                                    <span className={cx('popup__input-error')}>Введите не более 200 символов.</span>
                                ) : ''}
                            </div>
                            <MaskedInput
                                className={cx('popup__input')}
                                mask={phoneMask}
                                placeholder={'+7 (999) 999-99-99 '}
                                value={formValues.phone}
                                onChange={handlePhoneChange}
                            />
                        </div>

                        {/* <div className={cx('popup__month-mobile-container')}>
                            <p className={cx('popup__month-title')}>2 мес.</p>
                            <p className={cx('popup__month-text')}>БЕСПЛАТНО</p>
                        </div> */}

                        {/* <p className={cx('popup__inputs-text')}>
                            *При заключении договора
                            <span className={cx('popup__inputs-text_span')}> до 01.01.25 </span>
                            предоставляем
                            <span className={cx('popup__inputs-text_span')}> 2 месяца </span>
                            сопровождения
                            <span className={cx('popup__inputs-text_span')}> бесплатно</span>
                        </p> */}
                    </div>

                    <div className={cx('popup__bottom')}>
                        <div className={cx('popup__buttons')}>
                            <button className={cx('popup__button')} onClick={closePopup}>Закрыть</button>
                            <button
                                className={cx('popup__button')}
                                onClick={submitForm}
                                disabled={isButtonDisabled || isButtonDelay}
                            >Отправить</button>
                        </div>

                        <div className={cx('popup__checkbox-container')}>
                            <div className={cx('popup__confirm-checkbox-container')}>
                                <input
                                    type={'checkbox'}
                                    className={cx('popup__confirm-checkbox')}
                                    checked={isCheckboxChecked}
                                    onChange={() => {}}
                                    aria-label="Согласие на обработку персональных данных"
                                />
                                <span onClick={handleCheckboxClick} className={cx('popup__confirm-checkbox-custom')}/>
                            </div>

                            <p className={cx('popup__bottom-text')}>
                                Нажимая кнопку «Отправить» Вы даете<br/>
                                согласие на <a href={'/privacy.pdf'} target='_blank'
                                               className={cx('popup__bottom-text_link')}>обработку персональных
                                данных</a>
                            </p>
                        </div>
                    </div>
                </div>
            </PopupWrapper>
        </>
    )
}