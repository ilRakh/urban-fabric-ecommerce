"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from "next/image";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function CarouselImages2() {
    const arrayFlyers = [
        {
            image: "https://cache.tradeinn.com/images/banners-home/HP-adidas-ttoe2.jpg",
            id: 0,
            link: ""
        },
        {
            image: "https://cache.tradeinn.com/images/banners-home/HP-kappaDres.jpg",
            id: 1,
            link: ""
        },
        {
            image: "https://cache.tradeinn.com/images/banners-home/HP-munichDRESS.jpg",
            id: 2,
            link: ""
        },
    ];
    return (
        <Swiper
            loop={true}
            navigation={window.innerWidth > 768 ? true : false}
            pagination={true}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation, Pagination]}
            className="w-full h-[37vw]">
            {arrayFlyers.map(e =>
                <SwiperSlide key={e.id}>
                    <Image width={1300} height={500} alt="Image" src={e.image} className="w-full h-full object-cover" />
                </SwiperSlide>
            )}
        </Swiper>
    )
}
