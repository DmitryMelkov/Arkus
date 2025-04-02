import classNames from 'classnames/bind';
import styles from './personal-manager.module.scss';

const stages = [
  {
    leftNumber: '01 ',
    rightNumber: '— 06',
    text: 'Анализируем ситуацию',
  },
  {
    leftNumber: '02 ',
    rightNumber: '— 06',
    text: 'Предлагаем решение',
  },
  {
    leftNumber: '03 ',
    rightNumber: '— 06',
    text: 'Готовим базу данных',
  },
  {
    leftNumber: '04 ',
    rightNumber: '— 06',
    text: 'Переносим информацию',
  },
  {
    leftNumber: '05 ',
    rightNumber: '— 06',
    text: 'Проводим обучение',
  },
  {
    leftNumber: '06 ',
    rightNumber: '— 06',
    text: 'Вы на новом уровне',
  },
]

export default function PersonalManager() {
	const cx = classNames.bind(styles);

	return (
		<section className={cx('manager__wrapper')}>
			<div className={cx('manager')}>
				<h2 className={cx('manager__title')}>Персональный менеджер</h2>

				<p className={cx('manager__text')}>
					После внедрения предоставим персонального менеджера с командой опытных
					экспертов, который будет курировать Вас, помогать по всем вопросам и
					доведет «за ручку» до первой квитанции.
				</p>

				<h3 className={cx('manager__subtitle')}>
					Этапы перехода на новый уровень
				</h3>

				<div className={cx('manager__centre-container')}>
					<div className={cx('manager__stages')}>
            {stages.map((item) => (
              <div className={cx('manager__item')}>
                <span className={cx('manager__item-number')}>
                  {item.leftNumber}
                  <span className={cx('manager__item-number_span')}>{item.rightNumber}</span>
                </span>

                <h3 className={cx('manager__item-text')}>{item.text}</h3>
              </div>
            ))}
          </div>
					<div className={cx('manager__line-container')}>
						<span className={cx('manager__line')} />
						<span className={cx('manager__point')} />
					</div>
				</div>

				<div className={cx('manager__bottom-text-container')}>
					<h3 className={cx('manager__bottom-title')}>
						Быстрое внедрение{' '}
						<span className={cx('manager__bottom-title_span')}>за 14 дней</span>
					</h3>
					<p className={cx('manager__bottom-text')}>
						Перенесем или конвертируем ваши данные, настроим тарифы, разработаем
						нужный отчет, проведем интеграцию с 1С:Бухгалтерия, обучим и дадим
						консультацию по любому сложному вопросу.
					</p>
				</div>

				<img
					src="/images/icons/arkusGray.svg"
					alt="Иконка Аркус"
					className={cx('manager__arkus-icon')}
          loading='lazy'
				/>
			</div>
		</section>
	);
}
