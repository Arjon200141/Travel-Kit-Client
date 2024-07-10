import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import {  Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, SetReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => SetReviews(data))
    }, [])
    return (
        <div className='my-20'>
            <div className='flex justify-center mb-10'>
                <h2 className='w-96 border-y-4 border-gray-600 text-center py-3 text-4xl font-semibold'>What Our Clients Say</h2>
            </div>

            <div className='bg-sky-200/45 py-4 px-24'>
                <Swiper navigation={true} autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                modules={[ Autoplay , Navigation]}
                className="mySwiper my-8" >

                    {
                        reviews.map(review => <SwiperSlide key={review.id}>
                            <div className='space-y-4 mx-48'>
                                <div className='flex justify-center'>
                                    <img src={review.image} alt="" className='h-24 w-24  rounded-full' />
                                </div>
                                <div className='flex justify-center'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                    
                                />
                                </div>
                                <p className='text-xl font-medium text-center'>"{review.reviewDetails}"</p>
                                <h3 className='text-2xl font-semibold text-center'>{review.reviewerName}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;