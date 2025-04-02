import styles from '@/app/blocks/Ecosystem/Crm/crm.module.scss';
import classNames from 'classnames/bind';
import Menu from '../Menu/Menu';
import CrmDetails, { crmDetailsList } from './CrmDetails';

export default function Crm() {
	const cx = classNames.bind(styles);

	return (
		<div className={cx('crm__wrapper')}>
			<Menu activeMenu="crm" />

			<section className={cx('crm')}>
				<h2 className={cx('crm__title')}>
					<span className={cx('crm__title_span')}>Эффективная </span>
					электронная <br className={cx('crm__mobile-br')} />
					диспетчерская <span className={cx('crm__title_span')}>для</span> УК
				</h2>

				<p className={cx('crm__subtitle')}>
					Программа для АДС (электронная <br className={cx('crm__br')} />
					аварийно диспетчерская служба ЖКХ). <br className={cx('crm__br')} />
					CRM для управляющей компании ЖКХ <br className={cx('crm__br')} />и
					работы с обращениями жителей.
				</p>

				<div className={cx('crm__mobile-graph-container')}>
					<picture>
						<source
							srcSet="/images/ecosystemBlock/crm/crm320.svg"
							media="(max-width: 360px)"
						/>
						<img
							src={'/images/ecosystemBlock/crm/crm393.svg'}
							alt={'CRM АРКУС График'}
							className={cx('crm__mobile-graph')}
							loading='lazy'
						/>
					</picture>

					<p className={cx('crm__mobile-graph-title')}>
						Снижение нагрузки
						<br />
						на диспетчерскую службу
					</p>
				</div>

				<div className={cx('crm__text-container')}>
					<h3 className={cx('crm__card-title')}>
						Удобный кабинет
						<br className={cx('crm__card-title_br')} /> диспетчера АДС
					</h3>
					<p className={cx('crm__card-subtitle')}>
						Приложение для заявок ЖКХ и обработки заявок жителей,{' '}
						<br className={cx('crm__br')} />
						автоматизация рутинных задач, доступ к необходимой{' '}
						<br className={cx('crm__br')} />
						информации и контроль работы исполнителей и др.
					</p>
				</div>
				<div className={cx('crm__text-container', 'crm__text-container_2')}>
					<h3 className={cx('crm__card-title')}>
						Мобильное приложение
						<br className={cx('crm__br')} /> исполнителя
					</h3>
					<p className={cx('crm__card-subtitle')}>
						Сотрудник выполняет заявки от жителей.{' '}
						<br className={cx('crm__desktop-br')} />
						Чат с заявителями, комментарии, пуш-уведомления,{' '}
						<br className={cx('crm__mobile-br')} />
						статусы, фотофиксация работ «до» и «после».
					</p>
				</div>

				<div className={cx('crm__icon-card', 'crm__icon-card_margin-top')}>
					<div className={cx('crm__icon-container')}>
						<img
							className={cx('crm__icon')}
							src={'/images/ecosystemBlock/crm/flag.svg'}
							alt={'Герб России'}
							loading="lazy"
						/>
					</div>
					<p className={cx('crm__icon-card-text')}>
						Полное соответствие
						<br />
						Постановлению Правительства
						<br />
						РФ № 331 от 27.03.2018 г.
					</p>
				</div>

				<div className={cx('crm__icon-card', 'crm__icon-card_2')}>
					<div className={cx('crm__icon-container')}>
						<img
							className={cx('crm__icon')}
							src={'/images/ecosystemBlock/crm/phone.svg'}
							alt={'Телефон'}
							loading="lazy"
						/>
					</div>
					<p className={cx('crm__icon-card-text')}>
						Прием заявок: прямым обращением
						<br />в УК, по телефону или через мобильное{' '}
						<br className={cx('crm__br')} />
						приложение «КВАРТПЛАТА Онлайн».
					</p>
				</div>

				<div className={cx('crm__icon-card', 'crm__icon-card_3')}>
					<div className={cx('crm__icon-container')}>
						<img
							className={cx('crm__icon')}
							src={'/images/ecosystemBlock/crm/message.svg'}
							alt={'Сообщение'}
							loading="lazy"
						/>
					</div>
					<p className={cx('crm__icon-card-text')}>
						Запись и хранение телефонных разговоров{' '}
						<br className={cx('crm__br')} />
						заявителя. Прикрепление звонков к <br className={cx('crm__br')} />
						заявкам.
					</p>
				</div>

				<div
					className={cx(
						'crm__icon-card',
						'crm__icon-card_4',
						'crm__icon-card_bottom-margin'
					)}
				>
					<div className={cx('crm__icon-container')}>
						<img
							className={cx('crm__icon')}
							src={'/images/ecosystemBlock/crm/file.svg'}
							alt={'Файл'}
							loading="lazy"
						/>
					</div>
					<p className={cx('crm__icon-card-text')}>
						Возможность оказывать
						<br />
						платные услуги с отправкой
						<br />
						электронного чека.
					</p>
				</div>

				{/** График */}
				<div className={cx('crm__graph-container')}>
					<picture>
						<source
							srcSet="/images/ecosystemBlock/crm/crm768.svg"
							media="(max-width: 1023px)"
						/>
						<source
							srcSet="/images/ecosystemBlock/crm/crm1024.svg"
							media="(max-width: 1279px)"
						/>
						<source
							srcSet="/images/ecosystemBlock/crm/crm1280.svg"
							media="(max-width: 1440px)"
						/>
						<source
							srcSet="/images/ecosystemBlock/crm/crm1440.svg"
							media="(max-width: 1920px)"
						/>
						<img
							className={cx('crm__graph')}
							src={'/images/ecosystemBlock/crm/crm1920.svg'}
							alt={'CRM АРКУС График'}
							loading='lazy'
						/>
					</picture>
				</div>

				<div className={cx('crm__details')}>
					{/** Отображается на пк */}
					<CrmDetails />

					{/** Отображается на мобилках */}
					<p className={cx('crm__details-text')}>
						CRM система и программа<br/> для автоматизации диспетчерской службы
						управляющей компании. Обработка заявок жителей, автоматизация
						рутинных задач, доступ<br/> к необходимой информации и контроль работы
						исполнителей
					</p>

					<ul className={cx("crm__details-list")}>
						{crmDetailsList.map((item, index) => (
							<li className={cx('crm__details-item')} key={index}>
								<img
									src="/images/ecosystemBlock/crm/check.svg"
									alt="Галочка"
									className={cx('crm__item-check')}
									loading='lazy'
								/>
								<p className={cx('crm__item-text')}>{item}</p>
							</li>
						))}
					</ul>
				</div>
			</section>
		</div>
	);
}
