'use client';

import classNames from 'classnames/bind';
import styles from './header.module.scss';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const DynamicCallbackPopup = dynamic(() => import('@/app/components/Popups/CallbackPopup/CallbackPopup'));
const DynamicCookiePopup = dynamic(() => import('../Popups/CookiePopup/CookiePopup'));
const DynamicHeaderMobilePopup = dynamic(() => import('@/app/components/Popups/HeaderMobilePopup/HeaderMobilePopup'));

export default function Header() {
	const [isMobilePopupVisible, setIsMobilePopupVisible] = useState<boolean>(false);
	const [isCallbackModalOpen, setIsCallbackModalOpen] =
		useState<boolean>(false);


	const cx = classNames.bind(styles);

	const openPopup = () => {
		setIsMobilePopupVisible(true);
	};

	const openCallbackPopup = () => {
		setIsMobilePopupVisible(false);
		setIsCallbackModalOpen(true);
	};

	return (
		<header className={cx('header')} id={'home'}>
			<DynamicCallbackPopup
				isPopupOpen={isCallbackModalOpen}
				setPopupStatus={setIsCallbackModalOpen}
			/>

			<DynamicCookiePopup />

			<div className={cx('header__wrapper container')}>
				<div className={cx('header__top-container')}>
					<div className={cx('header__logo-container')}>
						<img src={'/images/icons/headerLogo.svg'} alt="Логотип" fetchPriority='high' />
					</div>
					<nav>
						<ul className={cx('header__links')}>
							<li>
								<a className={cx('header__link')} href={'#billing'}>
									Расчет ЖКУ
								</a>
							</li>
							<li>
								<a className={cx('header__link')} href={'#crm'}>
									Электронная диспетчерская
								</a>
							</li>
							<li>
								<a className={cx('header__link')} href={'#kvo'}>
									Кабинет жителя
								</a>
							</li>
							<li>
								<a className={cx('header__link')} href={'#support'}>
									Техподдержка
								</a>
							</li>
							<li>
								<a className={cx('header__link')} href={'#company'}>
									О компании
								</a>
							</li>
						</ul>
					</nav>
					<div className={cx('header__phone-box')}>
						<div className={cx('header__phone-container')}>
							<a href={'tel:+78005504022'} className={cx('header__phone')}>
								8 800 550-40-22
							</a>
							<span className={cx('header__phone-span')}>Бесплатно для регионов РФ</span>
						</div>
						<button className={cx('header__mobile-button')} onClick={openPopup}>
							<img src={'/images/icons/mobileMenu.svg'} alt={'Меню'} fetchPriority='high' />
						</button>
					</div>


					<DynamicHeaderMobilePopup
						isMobilePopupVisible={isMobilePopupVisible}
						setIsMobilePopupVisible={setIsMobilePopupVisible}
						openCallbackPopup={openCallbackPopup}
					/>
				</div>
			</div>

			<div className={cx('container')}>
				<div className={cx('header__phone-subtitle-container')}>
					<a className={cx('header__whatsapp-subtitle')} href='https://wa.me/7282088524' target="_blank"  rel="noopener noreferrer">
						<svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
							<path d="M1.35352 20.625L3.09881 15.3041C2.21322 13.7903 1.70341 12.0237 1.70341 10.1347C1.70341 4.5375 6.16812 0 11.6755 0C17.1829 0 21.6476 4.5375 21.6476 10.1347C21.6476 15.7319 17.1829 20.2694 11.6755 20.2694C9.99986 20.2694 8.42182 19.8473 7.03587 19.1055L1.35352 20.625Z" fill="#FAFCFF"/>
							<path d="M18.0342 13.5071C17.5737 12.6227 15.8757 11.6114 15.8757 11.6114C15.4915 11.3888 15.0279 11.3639 14.8088 11.7608C14.8088 11.7608 14.2571 12.4332 14.1167 12.5299C13.4757 12.9712 12.882 12.9542 12.2826 12.345L10.8896 10.9294L9.49668 9.5137C8.89731 8.90455 8.88051 8.30109 9.31474 7.64963C9.40991 7.50703 10.0716 6.94624 10.0716 6.94624C10.4621 6.72328 10.4376 6.25246 10.2185 5.86201C10.2185 5.86201 9.22341 4.13626 8.35321 3.66829C7.98302 3.46915 7.5285 3.53885 7.23249 3.83969L6.61737 4.46484C4.66598 6.44804 5.6268 8.68692 7.57819 10.6701L9.36162 12.4826L11.1451 14.2951C13.0964 16.2783 15.2994 17.2548 17.2508 15.2716L17.8659 14.6465C18.1619 14.3449 18.2301 13.883 18.0342 13.5071Z" fill="#2CB742"/>
						</svg>
						Написать WhatsApp
					</a>
					<button
						className={cx('header__phone-subtitle')}
						onClick={openCallbackPopup}
					>
						Обратный звонок
					</button>
				</div>
			</div>

		</header>
	);
}
