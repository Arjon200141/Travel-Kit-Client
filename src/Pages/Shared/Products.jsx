import { IoMdPricetags } from "react-icons/io";
import { MdOutlineDescription } from "react-icons/md";
import 'aos/dist/aos.css'; 
import Aos from "aos";

const Products = ({ item }) => {
    Aos.init({ duration: 200 });
    const { image, productName, description, price, companyName } = item;
    return (
        <div>
            <div data-aos="zoom-in-up" className="card card-side h-52 bg-white/30 shadow-xl">
                <figure><img src={image} alt="Product" className="ml-4 h-40 w-40 rounded-lg"/></figure>
                <div className="card-body text-lg">
                    <h2 className="card-title text-2xl">{productName}</h2>
                    <p><span className="font-semibold">Company : </span>{companyName}</p>
                    <p className="flex gap-2"><MdOutlineDescription className="mt-1"/>{description}</p>
                    <p className="flex items-center gap-2"><IoMdPricetags />{price} $</p>
                </div>
            </div>
        </div>
    );
};

export default Products;