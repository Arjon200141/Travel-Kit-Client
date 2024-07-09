import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { IoWalletSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { PiVan } from "react-icons/pi";
import useCart from "../../../hooks/useCart";

const AdminHome = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useCart();
    const [loadingPayments, setLoadingPayments] = useState(false);

    const { data: stats, isLoading } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });

    const { data: payments = [], refetch: refetchPayments } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosSecure.get('/payments');
            return res.data;
        }
    });

    const handleAcceptPayment = async (paymentId) => {
        try {
            setLoadingPayments(true);
            await axiosSecure.patch(`/payments/${paymentId}/accept`);
            await refetchPayments(); // Refetch payments after accepting a payment
            refetch(); // Refetch cart
        } catch (error) {
            console.error('Error accepting payment:', error);
        } finally {
            setLoadingPayments(false);
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!stats) {
        return <div>Error loading stats.</div>;
    }

   
    const sortedPayments = payments.sort((b, a) => a.status.localeCompare(b.status));

    return (
        <div>
            <h2 className="text-4xl font-semibold text-center mb-12">
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
            <div className="divider pt-8"></div>
            <div>
                <h2 className="text-4xl font-medium text-center my-8">
                    <span className="font-semibold">Customer's Payment : </span>{sortedPayments.length}
                </h2>
                <div className="overflow-x-auto">
                    <table className="table table-md">
                        {/* Table head */}
                        <thead className="bg-sky-300">
                            <tr className="text-center text-black text-lg">
                                <th>Sl No</th>
                                <th>E-Mail</th>
                                <th>Price</th>
                                <th>Transaction Id</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedPayments.map((payment, index) => (
                                <tr key={index} className="text-center">
                                    <th>{index + 1}</th>
                                    <td>{payment.email}</td>
                                    <td>{payment.price} $</td>
                                    <td>{payment.transactionId} $</td>
                                    <td>{payment.date}</td>
                                    <td>{payment.status}</td>
                                    <td>
                                        {payment.status === 'pending' && (
                                            <button onClick={() => handleAcceptPayment(payment._id)} className="btn bg-lime-200 text-lg font-semibold" disabled={loadingPayments}>
                                                Accept
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
