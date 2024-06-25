import { FaRegStar } from "react-icons/fa";
import { IoMdPricetags } from "react-icons/io";
import { MdOutlineDescription } from "react-icons/md";
import { AuthContext } from "../../../../Providers/AuthProviders";
import { useContext } from "react";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useCart from "../../../../hooks/useCart";

const Card = ({ item }) => {
    const { image, productName, description, price, companyName, warranty, rating, _id } = item;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();
    const handleAddtoCart = product => {
        if (user && user.email) {
            console.log(user.email, product);
            const cartItem = {
                cartId: _id,
                email: user.email,
                productName,
                price,
                image,
                companyName
            }
            axiosSecure.post("/carts", cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${productName} is Added to the Cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "Want to Add Cart?",
                text: "You have to Log in to Add Products to the Cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Log In!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } });
                }
            });
        }
    }
    return (
        <div className="">
            <div className="card h-[500px] card-compact bg-white/35 shadow-xl">
                <figure><img src={image} alt="Product" className="w-full h-80" /></figure>
                <div className="card-body ">
                    <h2 className="card-title text-2xl">{productName}</h2>
                    <p className="flex gap-2 text-xl"><MdOutlineDescription className="mt-1" />{description}</p>
                    <div className="flex gap-8 justify-between">
                        <h3 className="text-xl"><span className="font-semibold ">Company : </span>{companyName}</h3>
                        <p className="flex gap-2 items-center text-xl"><FaRegStar /> {rating}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="flex items-center gap-2 text-xl"><IoMdPricetags />{price} $</p>
                        <p className="text-xl"><span className="font-semibold ">Warrenty : </span>{warranty}</p>
                    </div>
                    <div className="card-actions justify-center">
                        <button onClick={() => handleAddtoCart(item)} className="btn hover:bg-cyan-300 w-full bg-lime-100 border-b-4 border-black border-t-0 border-x-0 text-2xl font-semibold">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;