import './carousel.css';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { useEffect, useState } from 'react';
const Carousel = () => {
    const [images, setImages] = useState([
        'tv-1.jpg',
        'tv-2.jpg',
        'phone-1.jpg',
        'phone-2.jpg',
        'tablet-1.jpg',
        'tablet-2.jpg',
    ]);
    const [activeImage, setActiveImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveImage((curr) =>
                curr === images.length - 1 ? 0 : curr + 1
            );
        }, 15000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    function handleClick(number) {
        if (number === images.length) return setActiveImage(0);
        if (number < 0) return setActiveImage(images.length - 1);
        return setActiveImage(number);
    }
    return (
        <section
            className='carousel'
            onKeyDown={(e) =>
                e.key === 'ArrowRight'
                    ? handleClick(activeImage + 1)
                    : e.key === 'ArrowLeft'
                    ? handleClick(activeImage - 1)
                    : null
            }
        >
            <div className='text'>
                <h1>Welcome to E-shop</h1>
            </div>
            <button
                className='carousel-button'
                onClick={() => handleClick(activeImage - 1)}
            >
                <BsChevronCompactLeft />
            </button>
            <div className='featured-image-container '>
                <img
                    src={`src/assets/products/${images[activeImage]}`}
                    alt='featured product'
                />
            </div>
            <button
                className='carousel-button'
                onClick={() => handleClick(activeImage + 1)}
            >
                <BsChevronCompactRight />
            </button>
        </section>
    );
};

export default Carousel;
