import classNames from 'classnames/bind';
import styles from './billing-details.module.scss';
import DetailsWrapper from '../DetailsWrapper/DetailsWrapper';

export const billingDetailsList: string[] = [
	'Все расчеты реализованы в соответствии с Постановлениями Правительства РФ.',
	'Облачная база данных',
	'Неограниченное количество рабочих мест',
	'Выгрузка чеков в ОФД и применение онлайн-кассы, в соответствии ФЗ-54',
	'Полный функционал необходимый для учета и расчета ЖКУ',
	'Бесшовная интеграция с 1С:Бухгалтерия',
	'Личный кабинет жителя входит в стоимость',
	'Быстрое усвоение программы благодаря интуитивно понятному интерфейсу',
];

export default function BillingDetails() {
	const cx = classNames.bind(styles);

	return (
		<DetailsWrapper wrapperType={'billing'}>
			<div className={cx('details')}>
				<img
					src="/images/icons/billingOrangeLogo.svg"
					alt="Логотип Аркус Биллинг"
					className={cx('details__logo')}
					loading='lazy'
				/>
				<p className={cx('details__text')}>
					Программа АРКУС Биллинг для расчета ЖКУ в управляющих компаниях ЖКХ,
					подойдет не только для УК, но и для ТСЖ, ТСН, ЖСК, ДНТ, СНТ, и
					предназначена для автоматизации таких бизнес-процессов, как расчет
					квартплаты и коммунальных услуг, подомового учета затрат.
				</p>

				<ul className={cx('details__list')}>
					{billingDetailsList.map((item, index) => (
						<li className={cx('details__item')} key={index}>
							<img
								src="/images/ecosystemBlock/billing/check.svg"
								alt="Галочка"
								className={cx('details__item-check')}
								loading='lazy'
							/>
							<p className={cx('details__item-text')}>{item}</p>
						</li>
					))}
				</ul>

				<img
					src="/images/ecosystemBlock/billing/receipt.png"
					alt="Квитанция"
					className={cx('details__receipt')}
					loading='lazy'
				/>
			</div>
		</DetailsWrapper>
	);
}
