import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Slider.css"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Slider = ({ loaderdata }) => {
    return (

        <div className="container bg-white flex flex-col justify-center p-6 mx-auto py-2 md:py-4 lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className='text-black text-4xl lg:text-5xl font-bold'>Connect with <span className='text-[#DC143C]'>Roommates</span> Who Fit Your Lifestyle and Budget</h1>
                <div className="flex mt-2 md:mt-6 flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                    <button className={`rounded-md flex justify-center items-center px-6 py-3 m-1 overflow-hidden relative group cursor-pointer bg-[#DC143C] border-2 font-medium border-[#DC143C]`}>
                        <span className={`absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#DC143C] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease`}></span>
                        <span className={`relative text-base text-[#FFFFFF]`}>Get started</span>
                    </button>
                    <button className={`rounded-md flex justify-center items-center px-6 py-3 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#DC143C]`}>
                        <span className={`absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#DC143C] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease`}></span>
                        <span className={`relative text-base text-[#DC143C] transition duration-300 group-hover:text-white ease`}>Learn more</span>
                    </button>
                </div>
            </div>
            <div className='w-[300px] md:w-[500px] lg:w-[650px] mx-auto'>
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
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        loaderdata.map(data =>
                            <SwiperSlide key={data.id} >
                                <img src={data.photo} alt={data.photo} />
                            </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;