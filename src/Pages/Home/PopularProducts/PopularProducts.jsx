import { useEffect, useState } from "react";
import Products from "../../Shared/Products";
import { Link } from "react-router-dom";

const PopularProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.type == 'Popular')
                console.log(popularItems);
                setProducts(popularItems)
            }
            )
    }, [])
    return (
        <div className="my-12">
            <div className='flex justify-center mb-10'>
                <h2 className='w-96 border-y-4 border-gray-600 text-center py-3 text-4xl font-semibold'>Our Popular Products</h2>
            </div>
            <div className="grid grid-cols-2 gap-6 mx-12 bg-sky-100 p-8 rounded-xl">
                {
                    products.map(item => <Products key={products.id} item={item}></Products>)
                }
            </div>
            <Link to="/shop">
                <div className="my-10 flex justify-center">
                    <button className="btn bg-white px-12 pb-4 pt-2 border-b-4 border-black text-2xl font-semibold border-t-0 border-l-0 border-r-0">Purchase Products</button>
                </div>
            </Link>
        </div>
    );
};

export default PopularProducts;