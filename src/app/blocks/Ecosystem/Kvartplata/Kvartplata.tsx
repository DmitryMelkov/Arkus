import styles from '@/app/blocks/Ecosystem/Kvartplata/kvartplata.module.scss';
import classNames from 'classnames/bind';
import Menu from '../Menu/Menu';
import KvartplataWrapper from './KvartplataWrapper';
import { kvoDetailsList } from './KvartplataWrapper';
import Image from 'next/image';
import appStoreImage from '../../../../../public/images/ecosystemBlock/kvartplata/apple.svg';
import googlePlayImage from '../../../../../public/images/ecosystemBlock/kvartplata/googlePlay.svg';
import ruStoreImage from '../../../../../public/images/ecosystemBlock/kvartplata/ruStore.svg';
import phoneImage from '../../../../../public/images/ecosystemBlock/kvartplata/phone.png';
import kvartplataGraphMobileImage from '../../../../../public/images/ecosystemBlock/kvartplata/kvartplataGraphMobile.svg';
import appStoreMobileImage from '../../../../../public/images/ecosystemBlock/kvartplata/appleMobile.svg';
import googlePlayMobileImage from '../../../../../public/images/ecosystemBlock/kvartplata/googlePlayMobile.svg';
import ruStoreMobileImage from '../../../../../public/images/ecosystemBlock/kvartplata/ruStoreMobile.svg';
import kvartplataDetailsImage from "../../../../../public/images/icons/kvartplataDetailsLogo.svg";

export default function Kvartplata() {
	const cx = classNames.bind(styles);

	return (
		<div className={cx('kv__wrapper')}>
			<Menu activeMenu="kvo" />

			<section className={cx('kv')}>
				{/** Верхний блок */}
				<div className={cx('kv__top')}>
					<h2 className={cx('kv__title')}>
						<span className={cx('kv__title_span')}>Мобильное</span> приложение{' '}
						<br className={cx('kv__desktop-br')} />
						для ЖКХ, УК, ТСЖ
					</h2>

					<div className={cx('kv__top-right-container')}>
						<p className={cx('kv__subtitle')}>
							Удобный единый личный кабинет жителя.{' '}
							<br className={cx('kv__desktop-br')}/>
							Увеличьте собираемость платежей{' '}
							<br className={cx('kv__desktop-br')}/>
							<br className={cx('kv__subtitle_mobile-br')}/>
							и взаимодействуйте{' '}
							<br className={cx('kv__subtitle_br')}/>
							с жителями{' '}
							<br className={cx('kv__subtitle_mobile-br')}/>
							в онлайн.
						</p>

						<img
							src="/images/ecosystemBlock/kvartplata/kvartplata.svg"
							className={cx('kv__kvartplata-icon')}
							alt={'Квартплата Онлайн'}
							loading='lazy'
						/>

						<div className={cx('kv__apps')}>
							<a
								href={
									'https://apps.apple.com/ru/app/%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%BF%D0%BB%D0%B0%D1%82%D0%B0-%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD/id1482895258'
								}
								className={cx('kv__app')}
								target="_blank"
							>
								<Image
									src={appStoreImage}
									alt={'App Store'}
								/>
							</a>
							<a
								href={
									'https://play.google.com/store/apps/details?id=com.myhousereactnativemigration&hl=ru&pli=1'
								}
								className={cx('kv__app')}
								target="_blank"
							>
								<Image
									src={googlePlayImage}
									alt={'App Store'}
								/>
							</a>
							<a
								href={
									'https://www.rustore.ru/catalog/app/com.myhousereactnativemigration'
								}
								className={cx('kv__app')}
								target="_blank"
							>
								<Image
									src={ruStoreImage}
									alt={'App Store'}
								/>
							</a>
						</div>
					</div>

					<div className={cx('kv__mobile-graph-container')}>
						<Image
							src={kvartplataGraphMobileImage}
							alt={'CRM АРКУС График'}
							className={cx('kv__mobile-graph')}
						/>
						<span className={cx('kv__mobile-graph-title')}>
							Прирост
							<br />
							собираемости платежей
						</span>
					</div>
				</div>

				<div className={cx('kv__bottom')}>
					{/** Карточки слева */}
					<div className={cx('kv__cards')}>
						<div className={cx('kv__card')}>
							<span className={cx('kv__card-icon-container')}>
								<img
									className={cx('kv__card-icon')}
									src={'/images/ecosystemBlock/kvartplata/ruble.svg'}
									alt={'Рубль'}
									loading='lazy'
								/>
							</span>

							<div className={cx('kv__card-text-container')}>
								<h3 className={cx('kv__card-title')}>
									Высокая прозрачность счетов
								</h3>
								<p className={cx('kv__card-text')}>
									Смотрите всю информацию по начислениям{' '}
									<br className={cx('kv__br')} />и производите оплату.
									Информация <br className={cx('kv__br')} />о задолженности за
									ЖКУ, историей оплат <br className={cx('kv__br')} />и
									начислений. Система пуш-уведомлений{' '}
									<br className={cx('kv__br')} />о задолженностях и сроках
									передачи <br className={cx('kv__br')} />
									показаний.
								</p>
							</div>
						</div>
						<div className={cx('kv__card')}>
							<span className={cx('kv__card-icon-container')}>
								<img
									className={cx('kv__card-icon')}
									src={'/images/ecosystemBlock/kvartplata/puzzle.svg'}
									alt={'Пазл'}
									loading='lazy'
								/>
							</span>

							<div className={cx('kv__card-text-container')}>
								<h3 className={cx('kv__card-title')}>
									всегда актуальные данные
								</h3>
								<p className={cx('kv__card-text')}>
									Благодаря работы АРКУС Биллинг и{' '}
									<br className={cx('kv__br')} />
									Квартплаты Онлайн в рамках единой{' '}
									<br className={cx('kv__br')} />
									экосистемы, данные в личном кабинете{' '}
									<br className={cx('kv__br')} />
									всегда актуальны, это позволяет ускорить{' '}
									<br className={cx('kv__br')} />
									прием платежей и повысить качество{' '}
									<br className={cx('kv__br')} />
									услуги для плательщиков.
								</p>
							</div>
						</div>
					</div>

					{/** График справа */}
					<div className={cx('kv__graph-container')}>
						<Image
							src={phoneImage}
							alt={'Приложение Квартплата Онлайн'}
							className={cx('kv__graph-phone')}
						/>

						<picture>
							<source
								srcSet="/images/ecosystemBlock/kvartplata/kvartplataGraph768.svg"
								media="(max-width: 1023px)"
							/>
							<img
								className={cx('kv__graph')}
								src={'/images/ecosystemBlock/kvartplata/kvartplataGraph.svg'}
								alt={'График Квартплата Онлайн'}
								loading='lazy'
							/>
						</picture>
					</div>

					<div className={cx('kv__mobile-bottom-container')}>
						<p className={cx('kv__details-text')}>
							Единый личный кабинет собственника для передачи показаний и оплаты
							квитанций со встроенным маркетплейсом. Доступно для Apple и
							Android.
						</p>

						<ul className={cx('kv__details-items')}>
							{kvoDetailsList.map((item, index) => (
								<li className={cx('kv__details-item')} key={index}>
									<img
										src="/images/ecosystemBlock/kvartplata/check.svg"
										alt="Галочка"
										className={cx('kv__details-item-check')}
										loading='lazy'
									/>
									<p className={cx('kv__details-item-text')}>{item}</p>
								</li>
							))}
						</ul>

						<Image
							src={kvartplataDetailsImage}
							className={cx('kv__kvartplata-icon-mobile')}
							alt={'Квартплата Онлайн'}
						/>

						<div className={cx('kv__mobile-apps')}>
							<a
								href={
									'https://apps.apple.com/ru/app/%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%BF%D0%BB%D0%B0%D1%82%D0%B0-%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD/id1482895258'
								}
								className={cx('kv__mobile-app')}
								target="_blank"
							>
								<Image
									src={appStoreMobileImage}
									alt='App Store'
								/>
							</a>
							<a
								href={
									'https://play.google.com/store/apps/details?id=com.myhousereactnativemigration&hl=ru&pli=1'
								}
								className={cx('kv__mobile-app')}
								target="_blank"
							>
								<Image
									src={googlePlayMobileImage}
									alt='Google Play'
								/>
							</a>
							<a
								href={
									'https://www.rustore.ru/catalog/app/com.myhousereactnativemigration'
								}
								className={cx('kv__mobile-app')}
								target="_blank"
							>
								<Image
									src={ruStoreMobileImage}
									alt={'RuStore'}
								/>
							</a>
						</div>
					</div>
				</div>

				<KvartplataWrapper />
			</section>
		</div>
	);
}
