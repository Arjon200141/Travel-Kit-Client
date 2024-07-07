import { useState, useEffect } from "react";
import { FaBusAlt } from "react-icons/fa";
import { FaCalendarDays, FaLocationDot } from "react-icons/fa6";
import { IoIosPricetags } from "react-icons/io";
import { MdDateRange } from "react-icons/md";

const Upcoming = () => {
    const [travels, setTravels] = useState([]);

    useEffect(() => {
        fetch('upcoming.json')
            .then(res => res.json())
            .then(data => setTravels(data))
    }, []);

    return (
        <div>
            <div className='flex justify-center mb-10'>
                <h2 className='w-96  border-y-4 border-gray-600 text-center py-3 text-4xl font-semibold'>Our Upcoming Events</h2>
            </div>
            <p className="text-xl text-center mx-52 mb-8">
                Join us on an unforgettable adventure! Starting next month, our Travel Agency will be arranging exciting tours. Be part of our upcoming journeys!
            </p>
            <div className="grid grid-cols-3 gap-4 mx-12">
                {
                    travels.map(travel => (
                        <div key={travel.name} className="">
                            <div className="card card-compact h-[500px] bg-base-100 shadow-xl">
                                <figure>
                                    <img
                                        src={travel.image}
                                        alt={travel.name}
                                        className="h-[240px] w-96"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="text-2xl font-semibold">{travel.name}</h2>
                                    <h2 className="flex items-center gap-2 text-xl font-semibold"><FaLocationDot />{travel.place}</h2>
                                    <p className="text-md">{travel.description}</p>
                                    <div className="text-lg flex justify-between gap-20">
                                        <p className="flex items-center gap-2"><MdDateRange />{travel.date}</p>
                                        <p className="flex items-center gap-2"><FaCalendarDays />{travel.days} days</p>
                                    </div>
                                    <div className="text-lg flex justify-between gap-12">
                                        <p className="flex items-center gap-2"><FaBusAlt />{travel.bus}</p>
                                        <p className="flex items-center gap-2"><IoIosPricetags />{travel.rent} $</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Upcoming;
