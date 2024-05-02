'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import styles from './banner.module.css'
import Parking from './assets/parking.webp'
import SuperLed from './assets/superLed.webp'
import ExtremeCut from './assets/extremeCut.webp'
import ExtremeCutMobile from './assets/extremeCutMobile.webp'
import SuperLedMobile from './assets/superLedMobile.webp'
import parkingMobile from './assets/parkingMobile.webp'
import Image from 'next/image';

export default function BannerHome() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                loop={true}
                autoHeight={true}
                navigation={false}
                effect={'fade'}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Pagination, Navigation, Autoplay, EffectFade]}
                style={{
                    '--swiper-pagination-color': '#fff',
                    '--swiper-pagination-bullet-inactive-color': '#fff'
                }}
                className={styles.swiper}
            >
                <SwiperSlide>
                    <div className={styles.container}>
                        <Image className={styles.banner} alt='Banner Techone' src={Parking} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.container}>
                        <Image className={styles.banner} alt='Banner Super Led' src={SuperLed} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.container}>
                        <Image className={styles.banner} alt='Banner Extreme Cut' src={ExtremeCut} />
                    </div>
                </SwiperSlide>
            </Swiper>
            <Swiper
                slidesPerView={1}
                loop={true}
                autoHeight={true}
                navigation={false}
                effect={'fade'}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Pagination, Navigation, Autoplay, EffectFade]}
                style={{
                    '--swiper-pagination-color': '#fff',
                    '--swiper-pagination-bullet-inactive-color': '#fff'
                }}
                className={styles.swiperMobile}
            >
                <SwiperSlide>
                    <div className={styles.container}>
                        <Image className={styles.banner} alt='Banner Techone' src={parkingMobile} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.container}>
                        <Image className={styles.banner} alt='Banner Super Led' src={SuperLedMobile} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.container}>
                        <Image className={styles.banner} alt='Banner Extreme Cut' src={ExtremeCutMobile} />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
        
      );
}
