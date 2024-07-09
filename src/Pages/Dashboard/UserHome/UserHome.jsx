import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import useCart from "../../../hooks/useCart";
import { MdOutlineShoppingCart, MdPayments, MdRateReview } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const UserHome = () => {
    const { user } = useContext(AuthContext);
    const [cart] = useCart();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`payments/${user.email}`)
            return res.data;
        }
    })

    const { data: reviews = [] } = useQuery({
        queryKey: ['reviews', user.displayName],
        queryFn: async () => {
            const res = await axiosSecure.get(`reviews/${user.displayName}`);
            return res.data;
        }
    });

    return (
            <div className="">
                <h2 className="text-5xl text-center mb-12">
                    Hi {user.displayName}, Welcome Back
                </h2>
                <div className="flex justify-between mx-8">
                    <div className=" bg-white/35 shadow-2xl px-12 rounded-xl">
                        <h2 className="text-4xl font-semibold my-8 ml-12">My Profile</h2>
                        <div>
                            <div className="avatar">
                                <div className="w-64 rounded-full ml-6">
                                    <img
                                        src={user.photoURL}
                                        alt={user.displayName}
                                    />
                                </div>
                            </div>
                            <h2 className="text-xl my-4 ml-6"><span className="font-semibold">Your Name : </span>{user.displayName}</h2>
                            <h2 className="text-xl my-4 ml-6"><span className="font-semibold">Your E-Mail : </span>{user.email}</h2>
                        </div>
                    </div>
                    <div className="divider lg:divider-horizontal py-6"></div>
                    <div className="mt-16 ">
                        <div className="bg-gradient-to-r from-blue-200 to-violet-200 rounded-xl shadow-2xl py-24 px-12">
                            <h2 className="text-5xl font-semibold">My Activities</h2>
                            <div className="space-y-3 mt-8">
                                <h2 className="text-2xl flex gap-3 items-center"><MdOutlineShoppingCart /><span className="font-semibold">Your Orders : </span>{cart.length}</h2>
                                <h2 className="text-2xl flex gap-3 items-center"><MdRateReview /><span className="font-semibold">Your Reviews : </span>{reviews.length}</h2>
                                <h2 className="text-2xl flex gap-3 items-center"><MdPayments /><span className="font-semibold">Your Payments : </span>{payments.length}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default UserHome;