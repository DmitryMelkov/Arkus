"use client";

import classNames from "classnames/bind";
import styles from "@/app/blocks/Complex/complex.module.scss";
import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import complexMobileImage from "../../../../public/images/complex/complex363.svg";

const DynamicFormPopup = dynamic(
  () => import("@/app/components/Popups/FormPopup/FormPopup")
);

export default function Complex() {
  const [isPopupActive, setIsPopupActive] = useState<boolean>(false);

  const cx = classNames.bind(styles);

  const openPopup = () => {
    setIsPopupActive(true);
  };

  return (
    <section className={cx("complex__wrapper")}>
      <div className={cx("complex")}>
        <DynamicFormPopup
          title={"Заказать расчет "}
          titleSpan={"стоимости"}
          setPopupStatus={setIsPopupActive}
          isPopupOpen={isPopupActive}
          callback={() => {
            //@ts-ignore
            ym(98661748, "reachGoal", "forma_rachet");
          }}
        />

        <div className={cx("complex__top")}>
          <h2 className={cx("complex__title")}>
            Полная автоматизация ЖКХ
            <br />
            <span className={cx("complex__title_span")}>
              закрывает все задачи УК и ТСЖ
            </span>
          </h2>
          {/*<h2 className={cx('complex__title-mobile')}>*/}
          {/*	Программное решение*/}
          {/*	<br />*/}
          {/*	<span className={cx('complex__title_span')}>*/}
          {/*		закрывает все задачи УК и ТСЖ*/}
          {/*	</span>*/}
          {/*</h2>*/}
          <div className={cx("complex__text-container")}>
            <p className={cx("complex__text")}>
              Программное решение для ЖКХ.{" "}
              <br className={cx("complex__text_mobile-br")} />
              Не просто предлагаем «программу{" "}
              <br className={cx("complex__text_br")} />
              для печати квитанций», а полностью{" "}
              <span className={cx("complex__text_span")}>
                автоматизируем работу за 14 дней.
              </span>
            </p>
            <p className={cx("complex__text")}>
              Интеграция с 1С:Бухгалтерия, автоматизация расчетов ЖКУ,
              автоматизированный обмен с ГИС ЖКХ и ОСЗН, встроенная CRM для ЖКХ,
              онлайн-кассы и многое другое.
            </p>
          </div>
        </div>

        <div className={cx("complex__img-mobile-container")}>
          <Image
            src={complexMobileImage}
            alt={"Полная автоматизация"}
						className={cx("complex__img-mobile")}
          />
        </div>

        <div className={cx("complex__bottom")}>
          <h3 className={cx("complex__subtitle")}>
            Закажите расчет стоимости.
            <br />
            Это бесплатно
          </h3>

          <div className={cx("complex__button-container")}>
            <button className={cx("complex__button")} onClick={openPopup}>
              Заказать расчет
            </button>

            <p className={cx("complex__button-text")}>
              *Стоимость внедрения
              <br className={cx("complex__br")} />
              и сопровождения зависит от площади
              <br className={cx("complex__br")} />и количества лицевых счетов
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
