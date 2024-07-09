import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`payments/${user.email}`)
            return res.data;
        }
    })

    return (
        <div>
            <div className='flex justify-center mb-12'>
                <h2 className='w-96 border-y-4 border-gray-600 text-center py-3 text-4xl font-semibold'>PAYMENT HISTORY</h2>
            </div>
            <h2 className="text-3xl font-semibold mb-8">Total Payments : {payments.length}</h2>

            <div className="overflow-x-auto">
                <table className="table table-md">
                    {/* head */}
                    <thead>
                        <tr className="text-xl bg-sky-300 text-black">
                            <th>Sl No.</th>
                            <th>E-Mail</th>
                            <th>Transaction Id</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) =>
                            <tr key={payment._id}>
                                <th>
                                    <h2 className="text-xl">{index + 1}</h2>
                                </th>
                                <td className="text-lg">{payment.email}</td>
                                <td className="text-lg">{payment.transactionId}</td>
                                <td className="text-lg">{payment.date}</td>
                                <td className="text-lg">{payment.price} $</td>
                                <td className="text-lg">{payment.status}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;