import classNames from "classnames/bind";
import styles from "./header-mobile-popup.module.scss";
import { useRouter } from "next/navigation";

type Props = {
  isMobilePopupVisible: boolean;
  setIsMobilePopupVisible: (val: boolean) => void;
  openCallbackPopup: () => void;
};

export default function HeaderMobilePopup({
  isMobilePopupVisible,
  setIsMobilePopupVisible,
  openCallbackPopup,
}: Props) {
  const router = useRouter();

  const cx = classNames.bind(styles);

  const clickOnAnchor = (anchor: string) => {
    closePopup();
    router.push(`/${anchor}`);
  };

  const closePopup = () => {
    setIsMobilePopupVisible(false);
  };

  return (
    <section
      className={cx("header__mobile-popup", {
        "header__mobile-popup_visible": isMobilePopupVisible,
      })}
    >
      <div className={cx("header__close-button-container")}>
        <button className={cx("header__close-button")} onClick={closePopup}>
          <img src={"/images/icons/close.svg"} alt={"Кнопка закрытия"} loading='lazy' />
        </button>
      </div>

      <div className={cx("header__mobile-wrapper")}>
        <nav className={cx("header__mobile-nav")}>
          <ul className={cx("header__mobile-links")}>
            <li>
              <a
                className={cx("header__mobile-link")}
                href={"#billing"}
                onClick={() => clickOnAnchor("#billing")}
              >
                Расчёт ЖКУ
              </a>
            </li>
            <li>
              <a
                className={cx("header__mobile-link")}
                href={"#crm"}
                onClick={() => clickOnAnchor("#crm")}
              >
                Программа для АДС
              </a>
            </li>
            <li>
              <a
                className={cx("header__mobile-link")}
                href={"#kvo"}
                onClick={() => clickOnAnchor("#kvo")}
              >
                Кабинет жителя
              </a>
            </li>
            <li>
              <a
                className={cx("header__mobile-link")}
                href={"#support"}
                onClick={() => clickOnAnchor("#support")}
              >
                Техподдержка
              </a>
            </li>
            <li>
              <a
                className={cx("header__mobile-link")}
                href={"#company"}
                onClick={() => clickOnAnchor("#company")}
              >
                О компании
              </a>
            </li>
          </ul>
        </nav>

        <button
          className={cx("header__mobile-order-button")}
          onClick={openCallbackPopup}
        >
          Заказать консультацию
        </button>

        <div className={cx("header__mobile-phone-container")}>
          <a href={"tel:+78005504022"} className={cx("header__mobile-phone")}>
            8 800 550-40-22
          </a>

          <button
            className={cx("header__mobile-phone-subtitle")}
            onClick={openCallbackPopup}
          >
            Обратный звонок
          </button>
        </div>

        <img
          className={cx("header__mobile-logo")}
          src={"/images/icons/mobileLogo.svg"}
          alt={"Логотип"}
          loading='lazy'
        />
      </div>
    </section>
  );
}
