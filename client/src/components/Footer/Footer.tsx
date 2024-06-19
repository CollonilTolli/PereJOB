import css from "./Footer.module.scss";
import Vawe from "/public/Vawe.png";
import Logo from "/public/images/shortlogo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={css.Footer}>
      <Image src={Vawe} alt="" />
      <div className={css.Content}>
        <Image className={css.Logo} src={Logo} alt="" />
        <div className={css.Interactive}>
          <div className={css.Links}>
            <ul>
              <p className={css.Title}>Клуб Перекрёсток</p>
              <li className={css.links}>
                <a href="https://www.perekrestok.ru/loyalty/card/register">
                  Активация карты
                </a>
              </li>
              <li className={css.links}>
                <a href="https://www.perekrestok.ru/certificates">
                  Подарочные сертификаты
                </a>
              </li>
              <li className={css.links}>
                <a href="https://www.perekrestok.ru/promotions">Акции</a>
              </li>
              <li className={css.links}>
                <a href="https://www.perekrestok.ru/documents/loyalty-rules">
                  Правила программы лояльности
                </a>
              </li>
              <li className={css.links}>
                <a href="https://www.perekrestok.ru/booklets">
                  Каталоги «Перекрёсток»
                </a>
              </li>
              <li className={css.links}>
                <a href="https://www.perekrestok.ru/help">Вопросы и ответы</a>
              </li>
              <li className={css.links}>
                <a href="https://www.perekrestok.ru/cat/b">Бренды </a>
              </li>
            </ul>
            <ul>
              <p className={css.Title}>О компании</p>
              <li className={css.links}>
                <a href="https://arenda.perekrestok.ru/">Арендаторам</a>
              </li>
              <li className={css.links}>
                <a href="https://www.perekrestok.ru/love">Клиентский опыт</a>
              </li>
              <li className={css.links}>
                <a href="https://rabota.perekrestok.ru/">Вакансии</a>
              </li>
              <li className={css.links}>
                <a href="https://www.perekrestok.ru/trademarks">
                  Собственные марки
                </a>
              </li>
              <li className={css.links}>
                <a href="https://www.x5.ru/ru/Pages/HotlineForm/form.aspx">
                  Горячая линия по этике
                </a>
              </li>
              <li className={css.links}>
                <a href="https://www.perekrestok.ru/documents/history">
                  История
                </a>
              </li>
              <li className={css.links}>
                <a href="https://www.perekrestok.ru/delivery">Доставка</a>
              </li>
              <li className={css.links}>
                <a href="https://www.perekrestok.ru/noncommercecustom">
                  Некоммерческие закупки
                </a>
              </li>
            </ul>
            <ul>
              <p className={css.Title}>Контакты</p>
              <li className={css.links}>
                <a href="https://www.perekrestok.ru/contacts">Реквизиты</a>
              </li>
              <li className={css.links}>
                <a href="https://www.perekrestok.ru/documents/legals">
                  Правовая информация
                </a>
              </li>
              <li className={css.links}>
                <a href="https://www.perekrestok.ru/shops">Магазины</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
