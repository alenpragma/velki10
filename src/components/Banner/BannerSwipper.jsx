"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper/modules";
import Image from "next/image";

export default function BannerSwipper() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            className="w-full h-[200px]"
            src="https://ik.imagekit.io/bmaxmbpyx/https://skyexcchange.com/assets/images/matchbox/banner-1.webp"
            alt="img"
            width={500}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full h-[200px]"
            src="https://ik.imagekit.io/bmaxmbpyx/https://skyexcchange.com/assets/images/matchbox/banner-2.webp"
            alt="img"
            width={500}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full h-[200px]"
            src="https://ik.imagekit.io/bmaxmbpyx/https://skyexcchange.com/assets/images/matchbox/banner-3.webp"
            alt="img"
            width={500}
            height={500}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
