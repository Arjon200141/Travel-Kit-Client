import { FaRegStar } from "react-icons/fa";
import { IoMdPricetags } from "react-icons/io";
import { MdOutlineDescription } from "react-icons/md";

const Card = ({ item }) => {
    const { image, productName, description, price, companyName, warranty, rating } = item;
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
                        <button className="btn w-full bg-lime-100 border-b-4 border-black border-t-0 border-x-0 text-2xl font-semibold">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;