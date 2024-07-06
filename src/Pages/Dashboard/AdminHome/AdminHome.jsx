import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { IoWalletSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { PiVan } from "react-icons/pi";

const AdminHome = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { data: stats, isLoading } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!stats) {
        return <div>Error loading stats.</div>;
    }

    return (
        <div>
            <h2 className="text-5xl font-semibold text-center mb-12">
                <span>Hi, Welcome </span>
                {user?.displayName ? user.displayName : 'Back'}!!
            </h2>
            <div className="">
                <div className="stats gap-16 bg-sky-100 border-0 w-full">
                    <div className="stat px-8 bg-gradient-to-r rounded-xl from-blue-300 to-cyan-200">
                        <div className="stat-figure text-secondary text-3xl mt-2 ">
                            <IoWalletSharp />
                        </div>
                        <div className="stat-title text-lg">Revenue</div>
                        <div className="stat-value"> $ {stats.revenue}</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat px-8 rounded-xl bg-gradient-to-r from-emerald-300 to-violet-200">
                        <div className="stat-figure text-secondary text-3xl mt-2">
                            <FaUsers />
                        </div>
                        <div className="stat-title text-lg">Users</div>
                        <div className="stat-value ml-4">{stats.users}</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat px-8 rounded-xl bg-gradient-to-r from-cyan-300 to-sky-200">
                        <div className="stat-figure text-secondary text-3xl mt-2">
                            <AiOutlineProduct />
                        </div>
                        <div className="stat-title text-lg">Products</div>
                        <div className="stat-value">{stats.products}</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>

                    <div className="stat px-8 rounded-xl bg-gradient-to-r from-green-300 to-lime-100">
                        <div className="stat-figure text-secondary text-3xl mt-2">
                            <PiVan />
                        </div>
                        <div className="stat-title text-lg">Orders</div>
                        <div className="stat-value ml-4">{stats.orders}</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
