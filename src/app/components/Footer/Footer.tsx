'use client'

import styles from '@/app/components/Footer/footer.module.scss'
import classNames from 'classnames/bind'
import { useState } from 'react'
import dynamic from 'next/dynamic'

const DynamicCallbackPopup = dynamic(
  () => import('@/app/components/Popups/CallbackPopup/CallbackPopup')
)

export default function Footer() {
  const [isCallbackPopupOpen, setIsCallbackPopupOpen] = useState<boolean>(false)
  const [isConsultationPopupOpen, setIsConsultationPopupOpen] =
    useState<boolean>(false)

  const cx = classNames.bind(styles)

  const openCallbackPopup = () => {
    setIsCallbackPopupOpen(true)
  }

  const openConsultationPopup = () => {
    setIsConsultationPopupOpen(true)
  }

  return (
    <div className={cx('footer__wrapper')}>
      <footer
        className={cx('footer')}
        itemScope
        itemType="https://schema.org/Organization"
      >
        <meta itemProp="name" content="АРКУС" />
        <link itemProp="url" href="https://аркус.рф" />
        <meta itemProp="logo" content="https://аркус.рф/images/logo.svg" />
        <meta
          itemProp="image"
          content="https://аркус.рф/images/footerArkusLogo.svg"
        />
        <meta itemProp="address" content="Россия" />
        <meta itemProp="telephone" content="+7-800-550-40-22" />

        <DynamicCallbackPopup
          isPopupOpen={isCallbackPopupOpen}
          setPopupStatus={setIsCallbackPopupOpen}
          callback={() => {
            //@ts-ignore
            ym(98661748, 'reachGoal', 'Zdu_zvonka')
          }}
        />

        <DynamicCallbackPopup
          setPopupStatus={setIsConsultationPopupOpen}
          isPopupOpen={isConsultationPopupOpen}
          isConsultationMode={true}
          callback={() => {
            //@ts-ignore
            ym(98661748, 'reachGoal', 'consult')
          }}
        />

        {/** Логотип и текст под ним */}
        <div className={cx('footer__text-container')}>
          <img
            className={cx('footer__logo')}
            src={'/images/icons/footerArkusLogo.svg'}
            alt={'Логотип АРКУС'}
            loading="lazy"
          />
          <p className={cx('footer__top-text')}>
            Программа для учета в ЖКХ коммунальных услуг, расчета квартплаты и
            приема платежей за ЖКУ для УК, РСО, ТСЖ для всей территории РФ.
          </p>
        </div>

        {/** Телефон */}
        <div className={cx('footer__phone-container')}>
          <a
            className={cx('footer__phone')}
            href={'tel:+78005504022'}
            itemProp="contactPoint"
            itemScope
            itemType="https://schema.org/ContactPoint"
          >
            <meta itemProp="telephone" content="+7-800-550-40-22" />
            <meta itemProp="contactType" content="customer service" />
            <meta itemProp="areaServed" content="RU" />
            <meta itemProp="availableLanguage" content="Russian" />8 800
            550-40-22
          </a>
          <button
            className={cx('footer__phone-link')}
            onClick={openConsultationPopup}
          >
            Заказать консультацию
          </button>
          <button
            className={cx('footer__phone-link')}
            onClick={openCallbackPopup}
          >
            Обратный звонок
          </button>
        </div>

        <div className={cx('footer__contacts')}>
          {/** Отдел продаж */}
          <p className={cx('footer__sales-text')}>Отдел продаж</p>

          <p className={cx('footer__applications-text')}>Напишите нам</p>

          <a
            className={cx('footer__sales-link')}
            href={'mailto:sales@arkus.team'}
            itemProp="contactPoint"
            itemScope
            itemType="https://schema.org/ContactPoint"
          >
            <meta itemProp="contactType" content="sales" />
            <meta itemProp="email" content="sales@arkus.team" />
            <meta itemProp="availableLanguage" content="Russian" />
            sales@arkus.team
          </a>

          {/** Приложения (Telegram, WhatsApp, VK) */}
          <div className={cx('footer__applications')}>
            <a
              className={cx('footer__application')}
              target="_blank"
              href={'https://t.me/arkusteam'}
            >
              <img
                src={'/images/icons/telegram.svg'}
                alt={'Telegram'}
                loading="lazy"
              />
            </a>
            <a
              className={cx('footer__application')}
              target="_blank"
              href={'https://wa.me/79282088524'}
            >
              <img
                src={'/images/icons/whatsapp.svg'}
                alt={'WhatsApp'}
                loading="lazy"
              />
            </a>
            <a
              className={cx('footer__application')}
              target="_blank"
              href={'https://vk.com/arkusteam'}
            >
              <img src={'/images/icons/vk.svg'} alt={'VK'} loading="lazy" />
            </a>
          </div>
        </div>

        <div className={cx('footer__links-wrapper')}>
          {/** Наши продукты */}
          <div className={cx('footer__products-container')}>
            {/** АРКУС Биллинг */}
            <div
              className={cx('footer__product-container')}
              itemScope
              itemType="https://schema.org/Product"
            >
              <meta itemProp="name" content="АРКУС Биллинг" />
              <meta
                itemProp="description"
                content="Программа для точного расчёта ЖКУ и печати квитанций с QR-кодом."
              />
              <meta itemProp="image" content="/images/footer/billing1x1.png" />
              <img
                className={cx('footer__billing-icon_meta')}
                src={'/images/icons/billingLogo.svg'}
                alt={'Логотип АРКУС Биллинг'}
                itemProp="logo"
                loading="lazy"
              />
              <img
                className={cx('footer__billing-icon')}
                src={'/images/icons/billingFooterLogo.svg'}
                alt={'Логотип АРКУС Биллинг'}
                loading="lazy"
              />
              <a
                className={cx('footer__product-text')}
                href={'#billing'}
                itemProp="url"
              >
                Расчет ЖКУ
              </a>
              <div
                itemProp="offers"
                itemScope
                itemType="https://schema.org/Offer"
                className={cx('footer__meta')}
              >
                <meta itemProp="price" content="17000" />
                <meta itemProp="priceCurrency" content="RUB" />
                <meta
                  itemProp="availability"
                  content="https://schema.org/InStock"
                />
                <meta
                  itemProp="priceValidUntil"
                  content="2025-02-23T12:00:00Z"
                />
              </div>
            </div>
            {/** АРКУС CRM */}
            <div
              className={cx('footer__product-container')}
              itemScope
              itemType="https://schema.org/Product"
            >
              <meta itemProp="name" content="АРКУС CRM" />
              <meta
                itemProp="description"
                content="Электронная диспетчерская АДС для управляющих компаний и работы с обращениями жителей."
              />
              <meta itemProp="image" content="/images/footer/crm1x1.png" />
              <img
                className={cx('footer__billing-icon_meta')}
                src={'/images/icons/arkusLogo.svg'}
                alt={'Логотип АРКУС CRM'}
                itemProp="logo"
                loading="lazy"
              />
              <img
                className={cx('footer__crm-icon')}
                src={'/images/icons/crmFooterLogo.svg'}
                alt={'Логотип АРКУС CRM'}
                loading="lazy"
              />
              <a
                className={cx('footer__product-text')}
                href={'#crm'}
                itemProp="url"
              >
                Электронная
                <br /> диспетчерская
              </a>
              <div
                itemProp="offers"
                itemScope
                itemType="https://schema.org/Offer"
                className={cx('footer__meta')}
              >
                <meta itemProp="price" content="10000" />
                <meta itemProp="priceCurrency" content="RUB" />
                <meta
                  itemProp="availability"
                  content="https://schema.org/InStock"
                />
                <meta
                  itemProp="priceValidUntil"
                  content="2025-02-23T12:00:00Z"
                />
              </div>
            </div>
            {/** Квартплата Онлайн */}
            <div
              className={cx('footer__product-container')}
              itemScope
              itemType="https://schema.org/Product"
            >
              <meta itemProp="name" content="Квартплата Онлайн" />
              <meta
                itemProp="description"
                content="Единый личный кабинет жителя. Взаимодействие с УК и контроль квартплаты."
              />
              <meta itemProp="image" content="/images/footer/kv1x1.png" />
              <img
                className={cx('footer__billing-icon_meta')}
                src={'/images/icons/kvartplataLogoSolo.svg'}
                alt={'Логотип Квартплата Онлайн'}
                itemProp="logo"
                loading="lazy"
              />
              <img
                className={cx('footer__kv-icon')}
                src={'/images/icons/kvartplataFooterLogo.svg'}
                alt={'Логотип Квартплата Онлайн'}
                loading="lazy"
              />
              <a
                className={cx('footer__product-text')}
                href={'#kvo'}
                itemProp="url"
              >
                Личный кабинет
                <br /> жителя
              </a>
              <div
                itemProp="offers"
                itemScope
                itemType="https://schema.org/Offer"
                className={cx('footer__meta')}
              >
                <meta itemProp="price" content="0" />
                <meta itemProp="priceCurrency" content="RUB" />
                <meta
                  itemProp="availability"
                  content="https://schema.org/InStock"
                />
                <meta
                  itemProp="priceValidUntil"
                  content="2025-02-23T12:00:00Z"
                />
              </div>
            </div>
          </div>

          <nav className={cx('footer__links-container')}>
            <ul className={cx('footer__links')}>
              <li>
                <a className={cx('footer__link')} href={'#ecosystem'}>
                  Продукты
                </a>
              </li>
              <li>
                <a className={cx('footer__link')} href={'#company'}>
                  О компании
                </a>
              </li>
              <li>
                <a className={cx('footer__link')} href={'#work'}>
                  Преимущества
                </a>
              </li>
            </ul>
            <ul className={cx('footer__links')}>
              {/*<li>*/}
              {/*    <a className={cx('footer__link')} href={'#stages'}>Этапы работы</a>*/}
              {/*</li>*/}
              <li>
                <a className={cx('footer__link')} href={'#form'}>
                  Попробовать
                </a>
              </li>
              <li>
                <a className={cx('footer__link')} href={'#home'}>
                  Главная
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/** Публичная оферта и политика */}
        <div className={cx('footer__public-offer-container')}>
          {/*<a className={cx('footer__public-offer-link')}>Публичная оферта</a>*/}
          <a
            className={cx('footer__public-offer-link')}
            href={'/privacy.pdf'}
            target="_blank"
          >
            Политика в отношении пользовательских данных
          </a>
          <p className={cx('footer__bottom-text')}>
            © Программа для ЖКХ АРКУС. Официальный сайт. 2025
          </p>
        </div>

        {/** Техподдержка */}
        <div className={cx('footer__technical-support-container')}>
          <img
            src="/images/icons/plus.svg"
            alt="Плюс"
            className={cx('footer__plus-icon')}
            loading="lazy"
          />
          <div className={cx('footer__technical-support')}>
            <p className={cx('footer__technical-support-text')}>
              ТЕХПОДДЕРЖКА №1 В СФЕРЕ ЖКХ
            </p>
            <p className={cx('footer__fast-text')}>
              Быстро. Своевременно. Профессионально.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
