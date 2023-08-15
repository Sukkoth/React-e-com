import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css'; //custom
const Carousel = () => {
    const [images, setImages] = useState([
        'tv-1.jpg',
        'tv-2.jpg',
        'phone-1.jpg',
        'phone-2.jpg',
        'tablet-1.jpg',
        'tablet-2.jpg',
    ]);
    return (
        <Swiper
            navigation={true}
            pagination={{ clickable: true }}
            modules={[Pagination, Navigation, Autoplay]}
            className='mySwiper'
            autoplay={true}
            data-swiper-autoplay='2000'
            loop={true}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <img
                        src={`src/assets/products/${image}`}
                        alt='featured product'
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;
