import React from 'react';


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const heroImage = [
  {
    "slogan": "Breathe easy with greenery",
    "subtitle": "Bring calm and fresh air into your home with Snake Plants.",
    "image": "https://i.ibb.co.com/sddPhShm/lesya-tyutrina-andrey-biyanov-V-5-Ds-Dvp-Df0-unsplash.jpg"
  },
  {
    "slogan": "Purify your space",
    "subtitle": "Peace Lilies make your home elegant and healthy.",
    "image": "https://i.ibb.co.com/pcKKGRV/novila-misastra-n-Tt-L0-PS-V6-A-unsplash.jpg"
  },
  {
    "slogan": "Nature's healing touch",
    "subtitle": "Aloe Vera keeps your surroundings fresh and soothing.",
    "image": "https://i.ibb.co.com/DfhHQTWB/novila-misastra-53-Qykf-Ay-BQs-unsplash.jpg"
  }
]


const HeroBanner = () => {
    return (
        <div className='min-h-screen'>
           <div className="w-full h-[90vh] relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-full"
      >
        {heroImage.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center flex flex-col justify-center items-center text-white"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="bg-black/40 p-6 rounded-2xl text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">
                  {slide.slogan}
                </h2>
                <p className="text-lg md:text-2xl">{slide.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

        </div>
    );
};

export default HeroBanner;