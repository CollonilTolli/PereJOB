import css from "./Banner.module.scss";
import Image from "next/image";
import ClockMan from "/public/images/ClockMan.png";

export default function Banner() {
  return (
    <div className={css.Container}>
      <div className={css.Content}>
        <Image src={ClockMan} alt="" />
        <div className={css.TextBlock}>
          <div className={css.Title}>Начните работать с нами прямо сейчас!</div>
          <div className={css.Seporator} />
          <div className={css.Description}>
            Время идёт, кто-то другой может занять вакансию вашей мечты!
          </div>
        </div>
      </div>
    </div>
  );
}
