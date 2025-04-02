'use client'

import styles from '@/app/blocks/Hero/hero.module.scss'
import classNames from 'classnames/bind'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import TypingEffect from '@/app/components/TypingEffect/TypingEffect'

const DynamicContactsPopup = dynamic(
  () => import('@/app/components/Popups/ContactsPopup/ContactsPopup')
)

export default function Hero() {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false)

  const cx = classNames.bind(styles)

  const phrases = [
    'упростить и ускорить начисления за ЖКУ в 2-3 раза',
    'снизить риск штрафов от ГЖИ на 90-99%',
    'повысить собираемость платежей до 98%',
    'сократить время обработки заявок на 50-70%',
    'увеличить рентабельность бизнеса на 22-28%',
  ]

  const openPopup = () => {
    setIsPopupOpen(true)
  }

  return (
    <section className={cx('hero container')}>
      <DynamicContactsPopup
        modal={'newLevel'}
        setPopupStatus={setIsPopupOpen}
        isPopupOpen={isPopupOpen}
      />

      <div className={`${cx('hero__wrapper')}`}>
        <h1 className={cx('hero__title')}>
          <span className={cx('hero__title_span')}>Программа </span>
          УК, ТСЖ и РСО {' '} <br className={cx('hero__desktop-br')} />
          <span className={cx('hero__title_span')}>поможет</span>{' '}
          <TypingEffect phrases={phrases} color="rgba(0, 57, 144, 0.5)" />
        </h1>

        <div className={cx('hero__subtitle-container')}>
          <p className={cx('hero__subtitle')}>
            <span className={cx('hero__subtitle_span')}>Проверено </span> более
            чем <span className={cx('hero__subtitle_span')}>на 1200 </span>{' '}
            <br />
            управляющих организаций
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

        <ul className={cx('hero__info-plus')}>
          <li className={cx('hero__info-plus-item')}>
            Единая IT-система по управлению МКД с интеграцией 1С:Бухгалтерия и
            ГИС ЖКХ, выведет работу на качественно новый уровень
          </li>
          <li className={cx('hero__info-plus-item')}>
            Система автоматически учитывает изменения в тарифах, нормативах и
            законодательных актах без участия пользователя
          </li>
        </ul>
        <div className={cx('hero__button-container')}>
          <button className={cx('hero__button')} onClick={openPopup}>
            Перейти на новый уровень
          </button>

          <div className={cx('hero__button-text')}>
            <p>
              И получите{' '}
              <span className={cx('hero__button-text_span')}>2 месяца</span>{' '}
              сопровождения{' '}
              <span className={cx('hero__button-text_span')}>бесплатно </span>{' '}
              при заключении договора до
              <span className={cx('hero__button-text_span')}> 01.05.25</span>
            </p>
          </div>
        </div>
      </div>

      {/* <div className={cx('hero__info-container')}>
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
      </div> */}
    </section>
  )
}
