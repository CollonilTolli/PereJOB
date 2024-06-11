import { ReactNode } from "react";
import css from "./Button.module.scss";

export default function Button({ children }: { children: ReactNode }) {
  return <button className={css.Button}>{children}</button>;
}
