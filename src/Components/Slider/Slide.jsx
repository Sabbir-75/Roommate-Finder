import React from 'react';
import { SwiperSlide } from 'swiper/react';

const Slide = ({ pic }) => {
    return (

        <SwiperSlide>
            <img src={pic.photo} alt={pic.photo} />
        </SwiperSlide>

    );
};

export default Slide;