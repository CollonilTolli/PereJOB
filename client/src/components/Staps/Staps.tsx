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
      <div className={css.Title}>До работы мечты всего 6 шагов!</div>
      <div className={css.Seporator} />
      <ol className={css.Cards}>
        <Card img={BookGirl} text="Выбор вакансии" />
        <Card img={LaptpGirl} text="Подготовка резюме" />
        <Card img={OrangeBoy} text="Отклик на вакансию" />
        <Card img={OldGirl} text="Подготовка к собеседованию" />
        <Card img={SmilyBoy} text="Прохождение собеседования" />
        <Card img={Zoomer} text="Первый рабочий день" />
      </ol>
    </div>
  );
}
