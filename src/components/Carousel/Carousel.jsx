import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css'; //custom
import carouselPic1 from '../../assets/products/tv-1.jpg';
import carouselPic2 from '../../assets/products/tv-2.jpg';
import carouselPic3 from '../../assets/products/phone-1.jpg';
import carouselPic4 from '../../assets/products/phone-2.jpg';
import carouselPic5 from '../../assets/products/tablet-1.jpg';
import carouselPic6 from '../../assets/products/tablet-2.jpg';

const Carousel = () => {
    const images = [
        carouselPic1,
        carouselPic2,
        carouselPic3,
        carouselPic4,
        carouselPic5,
        carouselPic6,
    ];
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
                    <img src={image} alt='featured product' />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;
