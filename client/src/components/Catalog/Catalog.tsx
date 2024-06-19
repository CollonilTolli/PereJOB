"use client";
import css from "./Catalog.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

export default function Catalog() {
  const [catalog, setCatalog] = useState([]);
  const config = {
    headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_AuthKey}` },
  };
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_APIPath}products`, config)
      .then((response) => {
        setCatalog(response.data);
      })
      .catch((error) => {
        console.error("Ошибка загрузки вакансий:", error);
        setCatalog([]);
      });
  }, []);
  console.log(catalog, "asdasdasd");
  return catalog?.length ? (
    <div className={css.Catalog}>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
      >
        {catalog.map((element: any) => (
          <SwiperSlide key={element.id}>
            <div className={css.Card}>
              <Image
                src={`${process.env.NEXT_PUBLIC_Domain}${element.photoUrl}`}
                alt=""
                width={200}
                height={200}
              />
              <h4 className={css.Title}>{element.name}</h4>
              <div className={css.Price}>{element.price}₽</div>
              <p className={css.Description}>{element.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  ) : (
    <div>Error</div>
  );
}
