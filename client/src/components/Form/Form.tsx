"use client";
import { useState } from "react";
import css from "./Form.module.scss";

export default function Form() {
  const [formData, setFormData] = useState({
    FIO: "",
    eMail: "",
    ResumeLink: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const config = {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_AuthKey}`,
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APIPath}response-vacancies`,
        {
          method: "POST",
          ...config,
          body: JSON.stringify({
            data: formData,
          }),
        }
      );

      if (response.ok) {
        console.log("Данные успешно отправлены!");
      } else {
        console.error("Ошибка при отправке данных:", response.status);
      }
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };

  return (
    <div className={css.Form}>
      <form onSubmit={handleSubmit}>
        <h3>Заполните форму и начните работать с нами уже сейчас</h3>
        <div className={css.Input}>
          <label htmlFor="FIO">ФИО:</label>
          <input
            required
            type="text"
            id="FIO"
            name="FIO"
            value={formData.FIO}
            onChange={handleChange}
          />
        </div>
        <div className={css.Input}>
          <label htmlFor="eMail">Email:</label>
          <input
            required
            type="email"
            id="eMail"
            name="eMail"
            value={formData.eMail}
            onChange={handleChange}
          />
        </div>
        <div className={css.Input}>
          <label htmlFor="ResumeLink">Ссылка на резюме:</label>
          <input
            required
            type="text"
            id="ResumeLink"
            name="ResumeLink"
            value={formData.ResumeLink}
            onChange={handleChange}
          />
        </div>
        <button className={css.Button} type="submit">
          Отправить
        </button>
      </form>
    </div>
  );
}
