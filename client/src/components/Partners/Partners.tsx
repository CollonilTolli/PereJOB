"use client";
import css from "./Partners.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

export default function Partners() {
  const [partners, setPartners] = useState([]);
  const config = {
    headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_AuthKey}` },
  };
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_APIPath}partners`, config)
      .then((response) => {
        setPartners(response.data);
      })
      .catch((error) => {
        console.error("Ошибка загрузки вакансий:", error);
        setPartners([]);
      });
  }, []);
  console.log(partners, "asdasdasd");
  return partners?.length ? (
    <div className={css.Partners}>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
      >
        {partners.map((element: any) => (
          <SwiperSlide key={element.id}>
            <div className={css.Card}>
              <Image
                src={`${process.env.NEXT_PUBLIC_Domain}${element.photoUrl}`}
                alt=""
                width={200}
                height={200}
              />
              <h4 className={css.Title}>{element.name}</h4>
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
