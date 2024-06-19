import Card from "./Card/Card";
import css from "./Staps.module.scss";
import BookGirl from "/public/images/BookGirl.png";
import LaptpGirl from "/public/images/LaptpGirl.png";
import OrangeBoy from "/public/images/OrangeBoy.png";
import OldGirl from "/public/images/OldGirl.png";
import SmilyBoy from "/public/images/SmilyBoy.png";
import Zoomer from "/public/images/Zoomer.png";
export default function Staps() {
  return (
    <div className={css.Content}>
      <div className={css.Title}>До нашего партнёрства всего 6 шагов!</div>
      <div className={css.Seporator} />
      <ol className={css.Cards}>
        <Card img={BookGirl} text="Подготовь описание продукции" />
        <Card img={LaptpGirl} text="Свяжись с нами по почте" />
        <Card img={OrangeBoy} text="Дождись одобрения" />
        <Card img={OldGirl} text="Согласуй условия" />
        <Card img={SmilyBoy} text="Предоставь необходимые документы" />
        <Card img={Zoomer} text="Зарабатывай с нами!" />
      </ol>
    </div>
  );
}
