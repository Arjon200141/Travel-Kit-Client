import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useProduct from "../../../hooks/useProduct";


const CheckoutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [voucherCode, setVoucherCode] = useState('');
    const [isVoucherApplied, setIsVoucherApplied] = useState(false);
    const [finalPrice, setFinalPrice] = useState(0);
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const [cart, refetch] = useCart();
    const [products] = useProduct();
    const navigate = useNavigate();

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    useEffect(() => {
        setFinalPrice(totalPrice);
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [axiosSecure, totalPrice]);

    const handleApplyVoucher = () => {
        if (voucherCode === 'discount20' && totalPrice >= 150) {
            setFinalPrice(totalPrice - 20);
            setIsVoucherApplied(true);
        }
        else {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Invalid voucher code or minimum amount not met",
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log('payment error', error);
            setError(error.message);
        } else {
            console.log('payment method', paymentMethod);
            setError('');
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        });

        if (confirmError) {
            console.log('confirm error');
        } else {
            console.log('payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                const payment = {
                    email: user.email,
                    price: finalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    cartIds: cart.map(item => item._id),
                    productIds: products.map(item => item._id),
                    status: 'pending'
                };

                const res = await axiosSecure.post('/payments', payment);
                console.log('payment saved', res.data);
                refetch();
                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank you for the Payment",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/dashboard/paymentHistory');
                }
            }
        }
    };

    return (
        <div className="mx-12">
            <form onSubmit={handleSubmit}>
                <h2 className="text-3xl font-semibold">Order Summary</h2>
                <div className="divider"></div>
                <div className="space-y-2">
                    <div className="space-y-2">
                        <h2 className="text-lg"><span className="font-semibold mr-48">Customer E-Mail :</span> {user.email}</h2>
                        <h2 className="text-lg"><span className="font-semibold mr-52">Customer Name :</span> {user.displayName}</h2>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-lg"><span className="font-semibold mr-36">Total Ordered Products :</span> {cart.length}</h2>
                        <h2 className="text-lg"><span className="font-semibold mr-52">Total Amount :</span> {totalPrice} $</h2>
                    </div>
                    <div className="divider"></div>
                    <div className="space-y-2">
                        <input
                            type="text"
                            value={voucherCode}
                            onChange={(e) => setVoucherCode(e.target.value)}
                            placeholder="Enter voucher code"
                            className="input input-bordered h-10"
                            disabled={isVoucherApplied || totalPrice < 150}
                        />
                        <button
                            type="button"
                            onClick={handleApplyVoucher}
                            className="btn btn-sm bg-gradient-to-r from-cyan-400 to-blue-400 text-black text-md ml-3 h-9"
                            disabled={isVoucherApplied || totalPrice < 150}
                        >Apply Voucher</button>
                    </div>
                    <h2 className="text-lg"><span className="font-semibold mr-52">Amount to Pay :</span> {finalPrice} $</h2>
                    <div className="divider pb-8 pt-4"></div>
                </div>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                    className=""
                />
                <button className="btn btn-sm px-6 bg-gradient-to-r from-cyan-300 to-blue-300 my-4 h-14 text-2xl font-semibold mt-6" type="submit" disabled={!stripe || !clientSecret}>
                    Pay {finalPrice} $
                </button>
                <p className="text-red-600">{error}</p>
                {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
            </form>
        </div>
    );
};

export default CheckoutForm;
