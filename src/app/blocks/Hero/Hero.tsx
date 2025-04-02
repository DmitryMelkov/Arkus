'use client'

import styles from '@/app/blocks/Hero/hero.module.scss'
import classNames from 'classnames/bind'
import { useState } from 'react'
import dynamic from 'next/dynamic'

const DynamicContactsPopup = dynamic(
  () => import('@/app/components/Popups/ContactsPopup/ContactsPopup')
)

export default function Hero() {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false)

  const cx = classNames.bind(styles)

  const openPopup = () => {
    setIsPopupOpen(true)
  }

  return (
    <section className={cx('hero')}>
      <DynamicContactsPopup
        modal={'newLevel'}
        setPopupStatus={setIsPopupOpen}
        isPopupOpen={isPopupOpen}
      />

      <div className={`${cx('hero__wrapper')}`}>
        <h1 className={cx('hero__title')}>
          <span className={cx('hero__title_span')}>Программа </span>
          <br className={cx('hero__mobile-br')} />
          для управляющих
          <br /> компаний, УК, <br className={cx('hero__mobile-br')} /> ТСЖ и
          РСО
        </h1>

        <div className={cx('hero__subtitle-container')}>
          <p className={cx('hero__subtitle')}>
            <span className={cx('hero__subtitle_span')}>Выводит </span>
            работу предприятий ЖКХ <br className={cx('hero__desktop-br')} />
            <span className={cx('hero__subtitle_span')}>на </span>качественно
            <span className={cx('hero__subtitle_span')}> новый уровень</span>
          </p>
          <p className={cx('hero__subtitle')}>
            <span className={cx('hero__subtitle_span')}>Снизит расходы</span> на
            управление домами,
            <br className={cx('hero__desktop-br')} />
            <span className={cx('hero__subtitle_span')}>
              упростит и ускорит работу
            </span>
          </p>
        </div>

        <picture className={cx('hero__main-img-picture')}>
          <source
            srcSet="/images/hero/heroImageMobile.webp"
            media="(max-width: 767px)"
          />
          <source
            srcSet="/images/hero/heroImage.webp"
            media="(max-width: 1279px)"
          />
          <source
            srcSet="/images/hero/heroImage1280.webp"
            media="(max-width: 1440px)"
          />
          <img
            src={'/images/hero/heroImage.webp'}
            alt={'Экосистема АРКУС'}
            className={cx('hero__main-img')}
            fetchPriority="high"
          />
        </picture>

        <div className={cx('hero__button-container')}>
          <button className={cx('hero__button')} onClick={openPopup}>
            Перейти на новый уровень
          </button>

          {/* <div className={cx('hero__button-text')}>
						<p>
							*При заключении договора до{' '}
							<span className={cx('hero__button-text_span')}>01.01.25</span>
							<br />
							предоставляем
							<span className={cx('hero__button-text_span')}> 2 месяца </span>
							сопровождения
							<span className={cx('hero__button-text_span')}> бесплатно</span>
						</p>
					</div> */}
        </div>
      </div>

      <div className={cx('hero__info-container')}>
        <div className={cx('hero__info-item')}>
          <span className={cx('hero__info-title')}>1</span>
          <p className={cx('hero__info-text')}>
            Мощная биллинговая система
            <br />
            для точного расчета ЖКУ
          </p>
        </div>
        <div className={cx('hero__info-item')}>
          <span className={cx('hero__info-title')}>2</span>
          <p className={cx('hero__info-text')}>
            Контроль заявок жителей
            <br />
            на каждом этапе
          </p>
        </div>
        <div className={cx('hero__info-item')}>
          <span className={cx('hero__info-title')}>3</span>
          <p className={cx('hero__info-text')}>
            Мгновенная оплата
            <br />
            платежей жителями за ЖКУ
          </p>
        </div>
      </div>
    </section>
  )
}
