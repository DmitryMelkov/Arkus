import styles from '@/app/blocks/Ecosystem/Ecosystem/ecosystem.module.scss'
import classNames from 'classnames/bind'
import MenuComponent from '../Menu/Menu'

export default function Ecosystem() {
  const cx = classNames.bind(styles)

  return (
    <div className={cx('ecosystem__wrapper')}>
      <MenuComponent activeMenu={'ecosystem'} />

      <section className={cx('ecosystem')}>
        {/** Верхняя строка */}
        <div className={cx('ecosystem__top-container')}>
          <h2 className={cx('ecosystem__title')}>
            Единая
            <span className={cx('ecosystem__title_span')}>
              {' '}
              платформа{' '}
            </span>ЖКХ <br />
            <span className={cx('ecosystem__title_span')}>
              для управляющих компаний
            </span>
          </h2>
          <p className={cx('ecosystem__subtitle')}>
            Цифровая система для управления МКД{' '}
            <br className={cx('ecosystem__desktop-br')} />в управляющих
            компаниях и ТСЖ, ЖСК.
            <br className={cx('ecosystem__desktop-br')} /> Экономит{' '}
            <span className={cx('ecosystem__subtitle_span')}>до 70%</span>{' '}
            рабочего времени,
            <br className={cx('ecosystem__desktop-br')} /> сократит
            задолженность за ЖКУ{' '}
            <span className={cx('ecosystem__subtitle_span')}>на 55%</span>{' '}
            <br /> и увеличит прибыльность.
          </p>
        </div>

        <div className={cx('ecosystem__bottom-container')}>
          {/** АРКУС Биллинг */}
          <div className={cx('ecosystem__column-container')}>
            <img
              src={'/images/icons/billingLogo.svg'}
              alt={'АРКУС Биллинг логотип'}
              className={cx('ecosystem__column-image')}
              loading="lazy"
            />

            <h3 className={cx('ecosystem__column-title')}>
              <a
                href="#billing"
                className={cx(
                  'ecosystem__column-link',
                  'ecosystem__column-link-billing'
                )}
              >
                Программа <br className={cx('ecosystem__desktop-br')} />
                <br className={cx('ecosystem__small-br')} />
                для квитанций жкх
              </a>
            </h3>

            <p className={cx('ecosystem__column-subtitle')}>
              Высокая степень
              <br className={cx('ecosystem__small-br')} /> автоматизации:
              <br className={cx('ecosystem__small-br')} /> вы тратите
              <br className={cx('ecosystem__mobile-br')} />
              <br className={cx('ecosystem__small-br')} /> на начисления в 4
              раза
              <br className={cx('ecosystem__small-br')} /> меньше времени.
            </p>

            <div
              className={cx(
                'ecosystem__graph-container',
                'ecosystem__billing-graph-container'
              )}
            >
              <span
                className={cx(
                  'ecosystem__graph-title',
                  'ecosystem__graph-title-billing'
                )}
              >
                Сокращение временных издержек
              </span>
              <span
                className={cx(
                  'ecosystem__graph-title',
                  'ecosystem__graph-title-billing-sm'
                )}
              >
                Временные издержки
              </span>
              <picture className={cx('ecosystem__picture')}>
                <source
                  srcSet={'/images/ecosystemBlock/ecosystem/billing320.svg'}
                  media="(max-width: 360px)"
                />
                <source
                  srcSet={'/images/ecosystemBlock/ecosystem/billing393.svg'}
                  media="(max-width: 767px)"
                />
                <source
                  srcSet={'/images/ecosystemBlock/ecosystem/billing768.svg'}
                  media="(max-width: 1023px)"
                />
                <source
                  srcSet={'/images/ecosystemBlock/ecosystem/billing1024.svg'}
                  media="(max-width: 1279px)"
                />
                <source
                  srcSet={'/images/ecosystemBlock/ecosystem/billing1280.svg'}
                  media="(max-width: 1440px)"
                />
                <source
                  srcSet={'/images/ecosystemBlock/ecosystem/billing1440.svg'}
                  media="(max-width: 1920px)"
                />
                <img
                  src={'/images/ecosystemBlock/ecosystem/billing1920.svg'}
                  alt="График АРКУС Биллинг"
                  className={cx('ecosystem__billing-graph')}
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
          {/** АРКУС CRM */}
          <div className={cx('ecosystem__column-container')}>
            <img
              src={'/images/icons/arkusLogo.svg'}
              alt={'АРКУС CRM логотип'}
              className={cx('ecosystem__column-image')}
              loading="lazy"
            />

            <h3 className={cx('ecosystem__column-title')}>
              <a
                href="#crm"
                className={cx(
                  'ecosystem__column-link',
                  'ecosystem__column-link-crm'
                )}
              >
                электронная
                <br className={cx('ecosystem__desktop-br')} /> диспетчерская АДС
              </a>
            </h3>

            <p className={cx('ecosystem__column-subtitle')}>
              Обработка заявок жителей, автоматизация{' '}
              <br className={cx('ecosystem__mobile-br')} />
              рутинных задач, контроль работы исполнителей.
            </p>
            <div
              className={cx(
                'ecosystem__graph-container',
                'ecosystem__crm-graph-container'
              )}
            >
              <span
                className={cx(
                  'ecosystem__graph-title',
                  'ecosystem__graph-title-crm'
                )}
              >
                Затраты ФОТ
              </span>
              <span
                className={cx(
                  'ecosystem__graph-title',
                  'ecosystem__graph-title-crm-sm'
                )}
              >
                Снижение затрат ФОТ
              </span>

              <picture className={cx('ecosystem__picture')}>
                <source
                  srcSet={'/images/ecosystemBlock/ecosystem/crm320.svg'}
                  media="(max-width: 360px)"
                />
                <source
                  srcSet={'/images/ecosystemBlock/ecosystem/crm393.svg'}
                  media="(max-width: 767px)"
                />
                <source
                  srcSet={'/images/ecosystemBlock/ecosystem/crm768.svg'}
                  media="(max-width: 1023px)"
                />
                <source
                  srcSet={'/images/ecosystemBlock/ecosystem/crm1024.svg'}
                  media="(max-width: 1279px)"
                />
                <source
                  srcSet={'/images/ecosystemBlock/ecosystem/crm1280.svg'}
                  media="(max-width: 1440px)"
                />
                <source
                  srcSet={'/images/ecosystemBlock/ecosystem/crm1440.svg'}
                  media="(max-width: 1920px)"
                />
                <img
                  src={'/images/ecosystemBlock/ecosystem/crm1920.svg'}
                  alt="График АРКУС Биллинг"
                  className={cx('ecosystem__crm-graph')}
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
          {/** Квартплата онлайн */}
          <div className={cx('ecosystem__column-container')}>
            <img
              src={'/images/icons/kvartplataLogo.svg'}
              alt={'Квартплата Онлайн логотип'}
              className={cx(
                'ecosystem__column-image',
                'ecosystem__column-image_kv'
              )}
              loading="lazy"
            />
            <h3
              className={cx(
                'ecosystem__column-title',
                'ecosystem__column-title_kv'
              )}
            >
              <a
                href="#kvo"
                className={cx(
                  'ecosystem__column-link',
                  'ecosystem__column-link-kvo'
                )}
              >
                Личный кабинет
                <br className={cx('ecosystem__desktop-br')} /> для жителей
              </a>
            </h3>
            <p
              className={cx(
                'ecosystem__column-subtitle',
                'ecosystem__column-subtitle_last'
              )}
            >
              Увеличьте собираемость платежей до 98%{' '}
              <br className={cx('ecosystem__mobile-br')} />
              <br className={cx('ecosystem__small-br')} />и взаимодействуйте{' '}
              <br className={cx('ecosystem__small-br')} />с жителями в онлайн.
            </p>
            <div
              className={cx(
                'ecosystem__graph-container',
                'ecosystem__kv-graph-container'
              )}
            >
              <span className={cx('ecosystem__graph-title')}>
                Собираемость платежей
              </span>

              <picture className={cx('ecosystem__picture')}>
                <source
                  srcSet={'/images/ecosystemBlock/ecosystem/kv320.svg'}
                  media="(max-width: 360px)"
                />
                <source
                  srcSet={'/images/ecosystemBlock/ecosystem/kv393.svg'}
                  media="(max-width: 767px)"
                />
                <source
                  srcSet={'/images/ecosystemBlock/ecosystem/kv768.svg'}
                  media="(max-width: 1023px)"
                />
                <source
                  srcSet={'/images/ecosystemBlock/ecosystem/kv1024.svg'}
                  media="(max-width: 1279px)"
                />
                <source
                  srcSet={'/images/ecosystemBlock/ecosystem/kv1280.svg'}
                  media="(max-width: 1440px)"
                />
                <source
                  srcSet={'/images/ecosystemBlock/ecosystem/kv1440.svg'}
                  media="(max-width: 1920px)"
                />
                <img
                  src={'/images/ecosystemBlock/ecosystem/kv1920.svg'}
                  alt="График АРКУС Биллинг"
                  className={cx('ecosystem__kv-graph')}
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
