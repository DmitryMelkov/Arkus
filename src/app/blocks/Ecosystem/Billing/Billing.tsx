'use client';

import classNames from 'classnames/bind';
import styles from '@/app/blocks/Ecosystem/Billing/billing.module.scss';
import { useState } from 'react';
import Menu from '../Menu/Menu';
import BillingDetails from './BillingDetails';
import { billingDetailsList } from './BillingDetails';
import Image from 'next/image';
import billingMobileGraphImage from '../../../../../public/images/ecosystemBlock/billing/billing393.svg';
import dynamic from 'next/dynamic';

const DynamicFormPopup = dynamic(() => import('@/app/components/Popups/FormPopup/FormPopup'));

export default function Billing() {
	const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

	const cx = classNames.bind(styles);

	const openPopup = () => {
		setIsPopupOpen(true);
	};

	return (
		<div className={cx('billing__wrapper')}>
			<DynamicFormPopup
				title={'Заказать расчет '}
				titleSpan={'стоимости'}
				setPopupStatus={setIsPopupOpen}
				isPopupOpen={isPopupOpen}
				callback={() => {
					//@ts-ignore
					ym(98661748, 'reachGoal', 'raschet_mob');
				}}
			/>

			<Menu activeMenu="billing" />

			<section className={cx('billing')}>
				{/** Верхний блок */}
				<div className={cx('billing__top')}>
					<h2 className={cx('billing__title')}>
						<span className={cx('billing__title_span')}>Мощная</span>{' '}
						биллинговая
						<span className={cx('billing__title_span')}> система</span>
						<br />
						<span className={cx('billing__title_span')}>и</span> точный
						<span className={cx('billing__title_span')}> расчет ЖКУ</span>
					</h2>

					<p className={cx('billing__subtitle')}>
						Учет в управляющих компаниях{' '}
						<br className={cx('billing__subtitle_br-1024')} />
						для бухгалтерии ЖКХ. Расчёты ЖКУ,{' '}
						<br className={cx('billing__subtitle_br')} />
						начисления, расщепление платежей{' '}
						<br className={cx('billing__subtitle_br')} />
						по услугам и печать квитанций{' '}
						<br className={cx('billing__subtitle_br-1280')} />
						с QR-кодом и др.
					</p>

					<div className={cx('billing__mobile-graph-container')}>
						<Image
							src={billingMobileGraphImage}
							alt={'График биллинг'}
							className={cx('billing__mobile-graph')}
						/>

						<p className={cx('billing__mobile-graph-title')}>
							Тратьте на работу
							<br />в 4 раза меньше времени
						</p>
					</div>
				</div>

				<div className={cx('billing__bottom')}>
					{/** Верхние карточки */}
					<div className={cx('billing__card')}>
						<div className={cx('billing__card-icon-container')}>
							<img
								className={cx('billing__card-icon')}
								src={'/images/ecosystemBlock/billing/home.svg'}
								alt={'РАСЧЕТ КВАРТПЛАТЫ ЖКХ'}
								loading='lazy'
							/>
						</div>
						<h3 className={cx('billing__card-title')}>РАСЧЕТ КВАРТПЛАТЫ ЖКХ</h3>
						<p className={cx('billing__card-subtitle')}>
							Массовое заполнение помещений,{' '}
							<br className={cx('billing__br')} />
							собственников, счётчиков и лицевых счётов,{' '}
							<br className={cx('billing__br')} />
							выгрузка показаний, начисления, пени и т.д.
						</p>
					</div>
					<div className={cx('billing__card')}>
						<div className={cx('billing__card-icon-container')}>
							<img
								className={cx('billing__card-icon')}
								src={'/images/ecosystemBlock/billing/graph.svg'}
								alt={'Экономический модуль'}
								loading='lazy'
							/>
						</div>
						<h3 className={cx('billing__card-title')}>Экономический модуль</h3>
						<p className={cx('billing__card-subtitle')}>
							Смета доходов и расходов <br className={cx('billing__br')} />
							на содержание и ремонт общего имущества, учёт{' '}
							<br className={cx('billing__br')} />
							работ, отчёт по услугам и работам и др.
						</p>
					</div>
					<div className={cx('billing__card')}>
						<div className={cx('billing__card-icon-container')}>
							<img
								className={cx('billing__card-icon')}
								src={'/images/ecosystemBlock/billing/file.svg'}
								alt={'Юридический модуль'}
								loading='lazy'
							/>
						</div>
						<h3 className={cx('billing__card-title')}>Юридический модуль</h3>
						<p className={cx('billing__card-subtitle')}>
							Работа с должниками ЖКХ, исковое{' '}
							<br className={cx('billing__br')} />и судебное производство,
							сводные <br className={cx('billing__br')} />
							отчёты по открытым делам и др.
						</p>
					</div>

					{/** 4 карточка и график */}
					<div className={cx('billing__card', 'billing__card_last')}>
						<div className={cx('billing__card-icon-container')}>
							<img
								className={cx('billing__card-icon')}
								src={'/images/ecosystemBlock/billing/reboot.svg'}
								alt={'РАЗМЕЩЕНИЕ В гис жкх'}
								loading='lazy'
							/>
						</div>
						<h3
							className={cx(
								'billing__card-title',
								'billing__card-title_nowrap'
							)}
						>
							РАЗМЕЩЕНИЕ В гис жкх
						</h3>
						<p className={cx('billing__card-subtitle')}>
							Автоматизированная выгрузка в ГИС ЖКХ{' '}
							<br className={cx('billing__br')} />и обмен данными с ГИС ЖКХ и
							ОСЗН <br className={cx('billing__br')} />
							за «пару кликов»
						</p>
					</div>

					<div className={cx('billing__graph-container')}>
						<picture>
							<source
								srcSet="/images/ecosystemBlock/billing/billing768.svg"
								media="(max-width: 1023px)"
							/>
							<source
								srcSet="/images/ecosystemBlock/billing/billing1024.svg"
								media="(max-width: 1279px)"
							/>
							<source
								srcSet="/images/ecosystemBlock/billing/billing1280.svg"
								media="(max-width: 1440px)"
							/>
							<source
								srcSet="/images/ecosystemBlock/billing/billing1440.svg"
								media="(max-width: 1920px)"
							/>
							<img
								className={cx('billing__graph')}
								src={'/images/ecosystemBlock/billing/billing1920.svg'}
								alt={'График Биллинг'}
								loading='lazy'
							/>
						</picture>
					</div>

					<div className={cx('billing__mobile-bottom-container')}>
						<p className={cx('billing__details-text')}>
							Программа АРКУС Биллинг для расчета ЖКУ в управляющих компаниях
							ЖКХ, подойдет не только для УК,
							<br /> но и для ТСЖ, ТСН, ЖСК, ДНТ, СНТ,
							<br />и предназначена для автоматизации таких бизнес-процессов,
							как расчет квартплаты и коммунальных услуг, подомового учета
							затрат.
						</p>

						<ul className={cx('billing__details-list')}>
							{billingDetailsList.map((item, index) => (
								<li className={cx('billing__details-item')} key={index}>
									<img
										src="/images/ecosystemBlock/billing/check.svg"
										alt="Галочка"
										className={cx('billing__item-check')}
										loading='lazy'
									/>
									<p className={cx('billing__item-text')}>{item}</p>
								</li>
							))}
						</ul>

						<div className={cx('billing__mobile-title-container')}>
							<h3 className={cx('billing__mobile-title')}>
								Закажите расчет стоимости.
							</h3>
							<p className={cx('billing__mobile-title-text')}>Это бесплатно.</p>
						</div>

						<button
							className={cx('billing__mobile-button')}
							onClick={openPopup}
						>
							Заказать расчет
						</button>

						<p className={cx('billing__mobile-text')}>
							*Стоимость внедрения и сопровождения
							<br />
							зависит от площади и количества лицевых счетов
						</p>
					</div>
				</div>

				<BillingDetails />
			</section>
		</div>
	);
}
