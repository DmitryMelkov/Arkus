'use client';

import styles from '@/app/blocks/Form/form.module.scss';
import classNames from 'classnames/bind';
import { ChangeEvent, useEffect, useState } from 'react';
import MaskedInput from 'react-text-mask';
import { phoneMask } from '@/app/setup/masks';
import { postForm } from '@/app/api/requests';
import SuccessFormPopup from '@/app/components/Popups/SuccessFormPopup/SuccessFormPopup';

export default function Form() {
	const [formValues, setFormValues] = useState({
		name: '',
		organization: '',
		phone: '',
	});
	const [isCheckboxChecked, setIsCheckboxChecked] = useState<boolean>(false);
	const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
	const [isButtonDelay, setIsButtonDelay] = useState<boolean>(false);
	const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState<boolean>(false);

	const cx = classNames.bind(styles);

	const handleOrganizationChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setFormValues((previous) => ({
			...previous,
			organization: value,
		}));
	};

	const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setFormValues((previous) => ({
			...previous,
			name: value,
		}));
	};

	const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setFormValues((previous) => ({
			...previous,
			phone: value,
		}));
	};

	const handleCheckboxClick = () => {
		setIsCheckboxChecked(!isCheckboxChecked);
	};

	const submitForm = async (event: any) => {
		event.preventDefault();

		const formattedPhone = formValues.phone.replace(/\D/g, '');
		const finalPhone = `+7${formattedPhone.slice(1)}`;

		setIsButtonDelay(true);

		const response = await postForm({
			name: formValues.name,
			organizationName: formValues.organization,
			phoneNumber: finalPhone,
		});

		if (response.status === 202) {
			setIsSuccessPopupOpen(true);
			setFormValues({
				name: '',
				organization: '',
				phone: '',
			});
			setIsCheckboxChecked(false);
			//@ts-ignore
			ym(98661748, 'reachGoal', 'forma_bottom');
			setTimeout(() => setIsButtonDelay(false), 25000);
		} else {
			setIsButtonDelay(false);
		}
	};

	useEffect(() => {
		const isPhoneValid = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(
			formValues.phone
		);
		const windowWidth = window.innerWidth;

		const isMobileCheckbox = windowWidth > 768 ? isCheckboxChecked : true;

		if (
			formValues.name &&
			formValues.name.length <= 100 &&
			formValues.organization.length <= 200 &&
			formValues.organization &&
			isPhoneValid &&
			isMobileCheckbox
		) {
			setIsButtonDisabled(false);
		} else {
			setIsButtonDisabled(true);
		}
	}, [formValues, isCheckboxChecked]);

	return (
		<section className={cx('form__wrapper')} id={'form'}>
			<div className={cx('form__line')} />
			<div className={cx('form')}>
				<SuccessFormPopup
					setPopupStatus={setIsSuccessPopupOpen}
					isPopupOpen={isSuccessPopupOpen}
				/>

				<h2 className={cx('form__title')}>
					Управляйте <br className={cx('form__mobile-br')} /> домами
					<span className={cx('form__title_span')}> легко</span>
				</h2>

				<div className={cx('form__center-container')}>
					<div className={cx('form__text-container')}>
						<h3 className={cx('form__subtitle')}>
							Присоединяйтесь к сообществу{' '}<br className={cx('form__subtitle-mobile-br')}/>
							успешных{' '}
							<br className={cx('form__subtitle-desktop-br')} />
							предприятий в сфере ЖКХ !
						</h3>
						<p className={cx('form__text')}>
							Оставьте контакты, с вами свяжется персональный менеджер для
							обсуждения задачи
						</p>
					</div>

					{/* <img
						src="/images/form/2monthFree.svg"
						alt="2 месяца бесплатно"
						className={cx('form__right-text-container')}
						loading='lazy'
					/> */}
				</div>

				<div className={cx('form__bottom-container')}>
					<form className={cx('form__form')}>
						{/* <img
							src="/images/form/2monthFree.svg"
							alt="2 месяца бесплатно"
							className={cx('form__mobile-text-container')}
							loading='lazy'
						/> */}

						<div className={cx('form__inputs')}>
							<div className={cx('form__input-container')}>
								<input
									className={cx('form__input')}
									placeholder={'Имя'}
									value={formValues.name}
									onChange={handleNameChange}
								/>
								{formValues.name.length > 100 ? (
									<span className={cx('form__input-error')}>
										Введите не более 100 символов.
									</span>
								) : (
									''
								)}
							</div>
							<div className={cx('form__input-container')}>
								<input
									className={cx('form__input')}
									placeholder={'Организация'}
									value={formValues.organization}
									onChange={handleOrganizationChange}
								/>
								{formValues.organization.length > 200 ? (
									<span className={cx('form__input-error')}>
										Введите не более 200 символов.
									</span>
								) : (
									''
								)}
							</div>
							<MaskedInput
								className={cx('form__input')}
								mask={phoneMask}
								placeholder={'+7 (999) 999-99-99 '}
								value={formValues.phone}
								onChange={handlePhoneChange}
							/>
						</div>

						<div className={cx('form__mobile-container')}>
							{/* <p className={cx('form__mobile-button-up-text')}>
								*При заключении договора до
								<span className={cx('form__mobile-button-up-text_span')}>
									{' '}
									01.01.25{' '}
								</span>
								предоставляем
								<span className={cx('form__mobile-button-up-text_span')}>
									{' '}
									2 месяца{' '}
								</span>
								сопровождения
								<span className={cx('form__mobile-button-up-text_span')}>
									{' '}
									бесплатно
								</span>
							</p> */}
						</div>

						<button
							className={cx('form__button')}
							disabled={isButtonDisabled || isButtonDelay}
							onClick={submitForm}
						>
							Отправить
						</button>
					</form>

					<div className={cx('form__form-bottom-container')}>
						{/* <p className={cx('form__form-bottom-text')}>
							*При заключении договора до
							<span className={cx('form__form-bottom-text_span')}>
								{' '}
								01.01.25{' '}
							</span>
							предоставляем
							<span className={cx('form__form-bottom-text_span')}>
								{' '}
								2 месяца{' '}
							</span>
							сопровождения
							<span className={cx('form__form-bottom-text_span')}>
								{' '}
								бесплатно
							</span>
						</p> */}

						<div className={cx('form__confirm-container')}>
							<div className={cx('form__confirm-checkbox-container')}>
								<input
									type={'checkbox'}
									className={cx('form__confirm-checkbox')}
									checked={isCheckboxChecked}
									onChange={() => {}}
									aria-label="Согласие на обработку персональных данных"
								/>
								<span
									onClick={handleCheckboxClick}
									className={cx('form__confirm-checkbox-custom')}
								/>
							</div>

							<p className={cx('form__confirm-text')}>
								Нажимая кнопку «Отправить» Вы даете согласие на{' '}
								<a
									target="_blank"
									href={'/privacy.pdf'}
									className={cx('form__confirm-text_link')}
								>
									обработку персональных данных
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
