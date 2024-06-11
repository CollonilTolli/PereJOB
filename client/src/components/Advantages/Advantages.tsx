import css from "./Advantages.module.scss";
import Card from "./Card/Card";
import ShortLogo from "/public/images/shortlogo.png";

export default function Advantages() {
  return (
    <div className={css.Container}>
      <div className={css.Content}>
        <div className={css.Title}>Преимущества работы в "Перекрёстке"</div>
        <div className={css.Seporator} />
        <div className={css.Cards}>
          <Card img={ShortLogo} text="Карьерный рост" />
          <Card img={ShortLogo} text="Социальные льготы" />
          <Card img={ShortLogo} text="Инновационная среда" />
          <Card img={ShortLogo} text="Корпоративная культура" />
          <Card img={ShortLogo} text="Вас покормят Охранники" />
        </div>
      </div>
    </div>
  );
}
