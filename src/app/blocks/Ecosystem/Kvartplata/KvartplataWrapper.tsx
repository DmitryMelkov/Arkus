import classNames from 'classnames/bind';
import DetailsWrapper from '../DetailsWrapper/DetailsWrapper';
import styles from './kvartplata-wrapper.module.scss';

export const kvoDetailsList: string[] = [
	'Возможность добавить в ЛК любое количество помещений',
	'Передача показаний приборов учета автоматически попадают в АРКУС Биллинг',
	'Информация о задолженности за ЖКУ',
	'Электронная квитанция с QR кодом.',
	'Оплата всех услуг одной кнопкой в т.ч автоплатеж',
	'Информация по оплатам поступает в АРКУС Биллинг в виде реестра',
	'Система push-уведомлений и напоминаний о задолженностях и сроках передачи показаний',
	'Маркетплейс для жителей, с возможностью размещения собственных услуг УК',
];

export default function KvartplataWrapper() {
	const cx = classNames.bind(styles);

	return (
		<DetailsWrapper wrapperType="kvo">
			<div className={cx('details')}>
				<img
					src="/images/icons/kvartplataDetailsLogo.svg"
					alt="Логотип Квартплата Онлайн"
					className={cx('details__logo')}
					loading='lazy'
				/>
				<p className={cx('details__text')}>
					Мобильное приложение жителя - единый личный кабинет собственника для
					передачи показаний и оплаты квитанций со встроенным маркетплейсом.
					Доступно для Apple и Android.
				</p>

				<ul className={cx('details__list')}>
					{kvoDetailsList.map((item, index) => (
						<li className={cx('details__item')} key={index}>
							<img
								src="/images/ecosystemBlock/kvartplata/check.svg"
								alt="Галочка"
								className={cx('details__item-check')}
								loading='lazy'
							/>
							<p className={cx('details__item-text')}>{item}</p>
						</li>
					))}
				</ul>

				<img
					src="/images/ecosystemBlock/kvartplata/kvoDetails.png"
					alt="Квартплата Онлайн"
					className={cx('details__image')}
					loading='lazy'
				/>
			</div>
		</DetailsWrapper>
	);
}
