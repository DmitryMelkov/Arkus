import classNames from 'classnames/bind';
import styles from './crm-details.module.scss';
import DetailsWrapper from '../DetailsWrapper/DetailsWrapper';

export const crmDetailsList: string[] = [
  'Полное соответствие Постановлению Правительства РФ № 331 от 27.03.2018 г.',
  'Прием заявок: прямым обращением в УК, по телефону или через мобильное приложение',
  'Запись и хранение телефонных разговоров заявителя, прикрепление звонков к заявкам',
  'Оперативное оповещение жителей путем push-уведомлений',
  'Контроль выполнения заявок в онлайн-режиме',
  'Отчеты и аналитика для руководителя',
  'Мобильное приложение для сотрудников',
  'Возможность оказывать платные услуги с отправкой электронного чека'
];

export default function CrmDetails() {
	const cx = classNames.bind(styles);

	return (
		<DetailsWrapper wrapperType="crm">
			<div className={cx('details')}>
				<img
					src="/images/icons/crmPurpleLogo.svg"
					alt="Логотип Аркус CRM"
					className={cx('details__logo')}
					loading='lazy'
				/>
				<p className={cx('details__text')}>
					CRM система и программа для автоматизации диспетчерской службы
					управляющей компании. Обработка заявок жителей, автоматизация рутинных
					задач, доступ к необходимой информации и контроль работы исполнителей
				</p>

				<ul className={cx('details__list')}>
					{crmDetailsList.map((item, index) => (
						<li className={cx('details__item')} key={index}>
							<img
								src="/images/ecosystemBlock/crm/check.svg"
								alt="Галочка"
								className={cx('details__item-check')}
								loading='lazy'
							/>
							<p className={cx('details__item-text')}>{item}</p>
						</li>
					))}
				</ul>

				<img
					src="/images/ecosystemBlock/crm/detailsImage.png"
					alt="Человек за компьютером"
					className={cx('details__image')}
					loading='lazy'
				/>
			</div>
		</DetailsWrapper>
	);
}
