import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y , EffectFlip } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
const Banner = () => {
    return (
        <div className=''>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y , EffectFlip]}
                spaceBetween={50}
                slidesPerView={1}
                effect="flip"
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <img src="https://i.ibb.co/bJytwX5/untitled-1.png
                    " alt="" className='w-full h-[100vh]'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/CMrTSZf/travel-still-life-pack-23-2148837298.jpg" alt="" className='w-full h-[100vh]'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/bLLTrWy/flat-lay-travel-composition-175682-325.jpg" alt="" className='w-full h-[100vh]'/>
                </SwiperSlide>
                <SwiperSlide >
                    <img src="https://i.ibb.co/5hPgQd4/travel-accessories-costumes-11304-1680.jpg" alt="" className='w-full h-[100vh]'/>
                </SwiperSlide>
                <SwiperSlide >
                    <img src="https://i.ibb.co/GCpHdGm/travel-suitcase-preparations-packing-23-2149070298.jpg" alt="" className='w-full h-[100vh]'/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
export default Banner;




