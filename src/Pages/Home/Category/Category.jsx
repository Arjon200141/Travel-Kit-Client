import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div className='my-12'>
            <div className='flex justify-center mb-10'>
                <h2 className='w-80 border-y-4 border-gray-600 text-center py-3 text-4xl font-semibold'>Our Categories</h2>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://i.ibb.co/DKjmcDK/Trefoil-Backpack-Black-EX6752-01-standard.jpg" alt="" />
                    <h3 className='mb-10 mt-6 text-3xl font-semibold text-center'>Bags</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/JqPhxMk/Steel-Bottle-600-ML-Black-CL6093-01-standard.jpg" alt="" />
                    <h3 className='mb-10 mt-6 text-3xl font-semibold text-center'>Bottles</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/P68jFpF/Dispatch-Trucker-Hat-Black-EY5534-01-standard.jpg" alt="" />
                    <h3 className='mb-10 mt-6 text-3xl font-semibold text-center'>Caps</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/3p58FbX/4-DFWD-Shoes-Black-Q46447-01-standard.jpg" alt="" />
                    <h3 className='mb-10 mt-6 text-3xl font-semibold text-center'>Shoes</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/Hp0Ww4H/RPT-01-Sport-On-Ear-Headphones-Black-CM5015-01-standard.jpg" alt="" />
                    <h3 className='mb-10 mt-6 text-3xl font-semibold text-center'>Earbuds</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/JQmQ6Vg/black-fabric-pants-without-background-ready-mockup-946657-18501.jpg" alt="" />
                    <h3 className='mb-10 mt-6 text-3xl font-semibold text-center'>Pants</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/w6hLX5s/mens-tri-blend-crew-tee-mockup-126278-130.jpg" alt="" />
                    <h3 className='mb-10 mt-6 text-3xl font-semibold text-center'>T-Shirts</h3>
                </SwiperSlide>
            </Swiper>
            <Link to="/shop">
                <div className="my-8 mb-20 flex justify-center">
                    <button className="btn bg-white px-12 pb-4 pt-2 border-b-4 border-black text-2xl font-semibold border-t-0 border-l-0 border-r-0">
                        Purchase Products
                    </button>
                </div>
            </Link>
        </div>
    );
};

export default Category;