"use client";
import css from "./Vacancies.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

export default function Vacancies() {
  const [vacancies, setVacancies] = useState([]);
  const config = {
    headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_AuthKey}` },
  };
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_APIPath}vacancies`, config)
      .then((response) => {
        setVacancies(response.data);
      })
      .catch((error) => {
        console.error("Ошибка загрузки вакансий:", error);
        setVacancies([]);
      });
  }, []);
  console.log(vacancies, "asdasdasd");
  return vacancies?.length ? (
    <div className={css.Vacancies}>
      <Swiper
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 4,
            },
        }}
      >
        {vacancies.map(
          (element: any) =>
            element.active && (
              <SwiperSlide key={element.id}>
                <div className={css.Card}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_Domain}${element.photoUrl}`}
                    alt=""
                    width={200}
                    height={200}
                  />
                  <h4 className={css.Title}>{element.name}</h4>
                  <div className={css.Salary}>
                    от {element.minSalary}₽ до {element.maxSalary}₽
                  </div>
                  <p className={css.Description}>{element.description}</p>
                </div>
              </SwiperSlide>
            )
        )}
      </Swiper>
    </div>
  ) : (
    <div>Error</div>
  );
}
