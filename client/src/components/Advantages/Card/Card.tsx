import css from "./Card.module.scss";
import Image from "next/image";

export default function Card({ img, text }: { img: any; text: string }) {
  return (
    <div className={css.Card}>
      <div className={css.Image}>
        <Image src={img} alt="" width={120} height={120} />
      </div>
      <div className={css.Text}>
        <span>{text}</span>
      </div>
    </div>
  );
}
