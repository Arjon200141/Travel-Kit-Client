import { FaPhoneAlt } from "react-icons/fa";
import Cover from "../Shared/Cover";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { PiPaperPlaneTiltLight } from "react-icons/pi";

const Contact = () => {
    return (
        <div>
            <Cover
                img="https://i.ibb.co/4Z47CPF/directly-shot-accessories-table-1048944-26447348.jpg"
                title="Contact Us"
                description="For any query you can contact with us directly or virtually"
            >
            </Cover>

            <div className='flex justify-center my-16'>
                <h2 className='w-96 border-y-4 border-gray-600 text-center py-3 text-4xl font-semibold'>Our Location</h2>
            </div>

            <div className="flex justify-center my-12 mx-32">
                <div className="flex gap-8">
                    <div>
                        <div className="btn px-32 text-2xl bg-blue-200">
                            <FaPhoneAlt />
                        </div >
                        <div className="ml-6">
                            <p className="bg-slate-200 w-60 py-8 text-xl text-center rounded-lg">+88 01706 318 283 <br /> +88 01892 356 757</p>
                        </div>
                    </div>
                    <div>
                        <div className="btn px-32 text-2xl bg-blue-200">
                            <MdEmail />
                        </div>
                        <p className="bg-slate-200 w-60 py-8 ml-6 text-xl text-center rounded-lg">travelkit65@gmail.com  <br /> aorjon123@gmail.com</p>
                    </div>
                    <div>
                        <div className="btn px-32 text-2xl bg-blue-200">
                            <IoLocation />
                        </div>
                        <p className="bg-slate-200 w-60 py-8 ml-6 text-xl text-center rounded-lg">17/42,Uttara Model Twon,<br />Dhaka-1231,Bangladesh</p>
                    </div>
                </div>
            </div>

            <div>
                <div className='flex justify-center my-16'>
                    <h2 className='w-96 border-y-4 border-gray-600 text-center py-3 text-4xl font-semibold'>Contact Form</h2>
                </div>

                <div className="mx-28 bg-sky-300/35 mb-12 rounded-md">
                    <form className="card-body">
                        <div className="flex gap-8 justify-between">
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered text-lg" required />
                            </div>
                            <div className="form-control w-full font-semibold">
                                <label className="label">
                                    <span className="label-text text-lg">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered text-lg" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Phone Number</span>
                            </label>
                            <input type="text" placeholder="phone" className="input input-bordered text-lg" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Message</span>
                            </label>
                            <textarea type="text" placeholder="Write your message here" className="input input-bordered h-[200px] pt-4 text-lg" required />
                        </div>
                        <div className=" mt-6 flex justify-center">
                            <button className="btn border-b-4 border-x-0 border-black border-t-0 w-60 text-2xl font-semibold px-8 py-2">Send Message <PiPaperPlaneTiltLight /></button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Contact;