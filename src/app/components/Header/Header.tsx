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

			<div className={cx('header__wrapper')}>
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
					<div className={cx('header__phone-container')}>
						<a href={'tel:+78005504022'} className={cx('header__phone')}>
							8 800 550-40-22
						</a>
					</div>
					<button className={cx('header__mobile-button')} onClick={openPopup}>
						<img src={'/images/icons/mobileMenu.svg'} alt={'Меню'} fetchPriority='high' />
					</button>

					<DynamicHeaderMobilePopup
						isMobilePopupVisible={isMobilePopupVisible}
						setIsMobilePopupVisible={setIsMobilePopupVisible}
						openCallbackPopup={openCallbackPopup}
					/>
				</div>
			</div>

			<div className={cx('header__phone-subtitle-container')}>
				<button
					className={cx('header__phone-subtitle')}
					onClick={openCallbackPopup}
				>
					Обратный звонок
				</button>
			</div>
		</header>
	);
}
