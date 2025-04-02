import styles from './contacts-popup.module.scss'
import classNames from 'classnames/bind'
import PopupWrapper from '@/app/components/Popups/PopupWrapper'

type Props = {
  modal: 'newLevel' | 'automate'
  setPopupStatus: (status: boolean) => void
  isPopupOpen: boolean
}

export default function ContactsPopup({
  modal,
  setPopupStatus,
  isPopupOpen,
}: Props) {
  const cx = classNames.bind(styles)

  const closePopup = () => {
    setPopupStatus(false)
  }

  return (
    <PopupWrapper isPopupOpen={isPopupOpen} setPopupStatus={setPopupStatus}>
      <div className={cx('popup')}>
        {/* Верхний блок */}
        <div className={cx('popup__mobile-top')}></div>
        <div className={cx('popup__top')}>
          <h3 className={cx('popup__title')}>
            {modal === 'newLevel' ? (
              <>
                Перейти на <br className={cx('popup__mobile-br')} />
                <span className={cx('popup__title_span')}>новый уровень</span>
              </>
            ) : (
              <>
                <span className={cx('popup__title_span')}>Автоматизируем </span>
                <br className={cx('popup__mobile-br')} />
                за 14 дней
              </>
            )}
          </h3>
          <button className={cx('popup__close')} onClick={closePopup}>
            <img
              src={'/images/icons/popupClose.svg'}
              alt={'Кнопка закрытия'}
              loading="lazy"
            />
          </button>
        </div>
        <div className={cx('popup__center')}>
          {/* Левая часть POPUP с контактами */}
          <div className={cx('popup__left')}>
            <p className={cx('popup__subtitle')}>
              {modal === 'newLevel' ? (
                <>
                  <span className={cx('popup__subtitle-span-lg')}>
                    Узнайте, как АРКУС помогает управлять МКД эффективно,
                    экономя ваше время!
                  </span>
                  <span className={cx('popup__subtitle-span-sm')}>
                    Как АРКУС помогает управлять МКД эффективно, экономя Ваше
                    время ?
                  </span>
                  <span className={cx('popup__subtitle-findOut')}>
                    Узнайте прямо сейчас!
                  </span>
                </>
              ) : (
                'Секреты автоматизации ЖКХ: узнайте как сэкономить время и деньги'
              )}
            </p>
            <p className={cx('popup__description')}>
              {modal === 'newLevel'
                ? 'Подберем лучшее для вас решение, дадим подробную консультацию, проведем презентацию программ с демонстрацией возможностей, ответим на возникшие вопросы.'
                : 'Расскажем о функциональности и преимуществах нашей системы, продемонстрируем работу и ответим на все вопросы.'}
            </p>

            <div className={cx('popup__contacts')}>
              <p className={cx('popup__contacts-title')}>
                Просто напишите нам удобным способом.
              </p>
              <div className={cx('popup__contacts-icons')}>
                <a
                  className={cx('popup__contacts-button')}
                  href="https://t.me/arkusteam"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    //@ts-ignore
                    ym(98661748, 'reachGoal', 'Telegram')
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="18"
                    viewBox="0 0 24 18"
                    fill="none"
                  >
                    <path
                      d="M22.023 0.0695022L21.6424 0.208126L0.987648 7.68333C0.841277 7.7288 0.714061 7.82176 0.625941 7.94766C0.53782 8.07355 0.493775 8.22525 0.50071 8.37899C0.507645 8.53273 0.565168 8.67981 0.664263 8.79719C0.763357 8.91456 0.898422 8.99559 1.04829 9.02757L6.39494 10.4978L7.39234 13.4383L8.38974 16.3789C8.44704 16.523 8.5385 16.6509 8.65618 16.7515C8.77386 16.8521 8.91421 16.9223 9.06504 16.956C9.21586 16.9898 9.37261 16.986 9.52166 16.9451C9.67071 16.9042 9.80757 16.8273 9.92034 16.7212L12.6825 14.1L18.1066 17.7945C18.7694 18.2482 19.7145 17.9121 19.8839 17.1644L23.4762 1.2205C23.6518 0.430765 22.8238 -0.218248 22.023 0.0695022ZM19.3862 3.60862L10.0542 11.2708L9.61506 11.632C9.5186 11.7088 9.45562 11.8203 9.43941 11.9429L9.34114 12.7578L9.0714 15.0472C9.07362 15.0751 9.06473 15.1027 9.04669 15.1239C9.02866 15.1452 9.00294 15.1584 8.97522 15.1606C8.94749 15.1629 8.92001 15.1539 8.89884 15.1358C8.87766 15.1177 8.86452 15.0919 8.8623 15.064L8.10328 12.7767L7.31916 10.4348C7.28599 10.3295 7.2904 10.216 7.33161 10.1136C7.37283 10.0112 7.44828 9.92652 7.54498 9.87401L17.2555 4.28284L19.083 3.23265C19.3486 3.07723 19.6204 3.41539 19.3862 3.60862Z"
                      fill="#FAFCFF"
                    />
                  </svg>
                  Telegram
                </a>

                <a
                  className={cx('popup__contacts-button')}
                  href="https://wa.me/7282088524"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    // @ts-ignore
                    ym(98661748, 'reachGoal', 'WhatsApp')
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="26"
                    viewBox="0 0 24 26"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.0528 2.96423C6.57433 2.96423 2.11888 7.41785 2.11644 12.8923C2.11583 14.7683 2.64104 16.5953 3.6351 18.1761L3.8712 18.5517L2.8677 22.2157L6.62673 21.2299L6.98956 21.445C8.51431 22.3498 10.2624 22.8284 12.0445 22.829H12.0485C17.5227 22.829 21.9781 18.375 21.9806 12.9003C21.9815 10.2471 20.9493 7.75265 19.0743 5.87603C17.1992 3.99942 14.7053 2.96514 12.0528 2.96423ZM17.8947 17.161C17.6458 17.8581 16.4531 18.4945 15.8794 18.5804C15.3649 18.6571 14.7142 18.6891 13.9989 18.4622C13.565 18.3245 13.0091 18.1408 12.2965 17.8334C9.49782 16.6252 7.60628 13.9135 7.24853 13.4006C7.22344 13.3647 7.20589 13.3395 7.19611 13.3265L7.1935 13.323C7.03481 13.1112 5.97692 11.6996 5.97692 10.2386C5.97692 8.86337 6.65291 8.14254 6.96368 7.81116C6.98488 7.78855 7.00438 7.76776 7.02185 7.74869C7.29573 7.44983 7.61926 7.3752 7.81819 7.3752C8.01713 7.3752 8.21637 7.37702 8.39032 7.38555C8.41179 7.38662 8.43412 7.38649 8.45721 7.38635C8.6313 7.38528 8.84823 7.38395 9.06206 7.89797C9.14452 8.09598 9.26519 8.38962 9.39242 8.69922C9.64924 9.32414 9.9328 10.0141 9.9827 10.114C10.0573 10.2635 10.107 10.4378 10.0077 10.637C9.90807 10.8363 9.4383 11.4364 9.2613 11.6579C9.24719 11.6755 9.2326 11.6929 9.21801 11.7103C9.09628 11.8554 8.97469 12.0003 9.1303 12.2672C9.30426 12.5658 9.9038 13.5434 10.7912 14.3348C11.7449 15.1851 12.5737 15.5446 12.9943 15.7271C13.0768 15.7628 13.1435 15.7918 13.1925 15.8163C13.4907 15.9656 13.665 15.9406 13.8392 15.7417C14.0132 15.5424 14.5856 14.8701 14.7845 14.5712C14.9835 14.2724 15.1827 14.3223 15.4563 14.422C15.7302 14.5213 17.1979 15.2436 17.4965 15.3929C17.5549 15.4221 17.6095 15.4485 17.6601 15.473C17.8681 15.5736 18.0086 15.6415 18.0686 15.7417C18.1436 15.8663 18.1436 16.4637 17.8947 17.161ZM12.0451 24.8464H12.05C18.6355 24.8464 23.9966 19.4873 23.9994 12.9006C24.0006 9.70882 22.7589 6.70745 20.5027 4.44941C18.2468 2.19168 15.2463 0.947508 12.05 0.946289C5.46352 0.946289 0.10297 6.3047 0.100228 12.8911C0.0993145 14.9966 0.649505 17.0517 1.69535 18.8631L0 25.0535L6.3345 23.3923C8.07982 24.344 10.0451 24.8454 12.0451 24.8464Z"
                      fill="#FAFCFF"
                    />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Правая часть POPUP */}
          <div className={cx('popup__right')}>
            <div className={cx('popup__month')}>
              <p className={cx('popup__month-title')}>2 мес.</p>
              <p className={cx('popup__month-text')}>БЕСПЛАТНО</p>
            </div>
            <p className={cx('popup__right-text')}>
              *Получите
              <span className={cx('popup__right-text_span')}>
                {' '}
                2 месяца{' '}
              </span>
              сопровождения
              <span className={cx('popup__right-text_span')}> бесплатно</span>     {' '}
              при заключении договора
              <span className={cx('popup__right-text_span')}> до 01.04.25</span>
            </p>
          </div>
        </div>
      </div>
    </PopupWrapper>
  )
}
