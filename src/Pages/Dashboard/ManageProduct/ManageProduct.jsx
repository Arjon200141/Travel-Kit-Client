import { useState, useEffect } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageProduct = () => {
    const initialProducts = useLoaderData();
    const [products, setProducts] = useState(initialProducts);
    const axiosSecure = useAxiosSecure();

    const fetchProducts = async () => {
        const response = await axiosSecure.get('/products');
        setProducts(response.data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/products/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Product has been deleted.",
                                icon: "success"
                            });
                            fetchProducts();
                        }
                    })
            }
        });
    };

    return (
        <div>
            <div className='flex justify-center mb-12'>
                <h2 className='w-96 border-y-4 border-gray-600 text-center py-3 text-4xl font-semibold'>MANAGE PRODUCTS</h2>
            </div>
            <div>
                <h2 className="text-3xl font-semibold mb-8">Total Products : {products.length}</h2>
                <div className="overflow-x-auto">
                    <table className="table table-lg">
                        {/* head */}
                        <thead>
                            <tr className="text-2xl bg-sky-300 text-black">
                                <th>Sl No.</th>
                                <th>Product Image</th>
                                <th>Product Name</th>
                                <th>Company Name</th>
                                <th>Price</th>
                                <div className="ml-6"><th>Action</th></div>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) =>
                                <tr key={product._id}>
                                    <th>
                                        <h2 className="text-xl">{index + 1}</h2>
                                    </th>
                                    <td>
                                        <div className="flex items-center justify-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-20 w-24">
                                                    <img
                                                        src={product.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-lg">{product.productName}</td>
                                    <td className="text-lg">{product.companyName}</td>
                                    <td className="text-lg">{product.price} $</td>
                                    <th className="flex justify-between gap-4 items-center mt-4">
                                        <Link to={`/dashboard/updateproduct/${product._id}`}>
                                            <button className="btn btn-ghost btn-md bg-yellow-400 font-bold text-white text-xl"><CiEdit /></button>
                                        </Link>
                                        <button onClick={() => handleDelete(product._id)} className="btn btn-ghost btn-md bg-red-500 font-bold text-xl text-white"><MdDeleteForever /></button>
                                    </th>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;
