import { useState, useEffect } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageProduct = () => {
    const initialProducts = useLoaderData();
    const [products, setProducts] = useState(initialProducts);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8; // Products per page
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        fetchProducts();
    }, [currentPage]); // Fetch products when currentPage changes

    const fetchProducts = async () => {
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const response = await axiosSecure.get(`/products?start=${startIndex}&end=${endIndex}`);
        setProducts(response.data);
    };

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
                            fetchProducts(); // Refresh products after deletion
                        }
                    })
            }
        });
    };

    // Calculate total pages
    const totalPages = Math.ceil(products.length / productsPerPage);

    return (
        <div>
            <div className='flex justify-center mb-12'>
                <h2 className='w-96 border-y-4 border-gray-600 text-center py-3 text-4xl font-semibold'>MANAGE PRODUCTS</h2>
            </div>
            <div>
                <h2 className="text-3xl font-semibold mb-8">Total Products: {products.length}</h2>
                <div className="overflow-x-auto">
                    <table className="table table-lg">
                        {/* head */}
                        <thead>
                            <tr className="text-xl bg-sky-300 text-black">
                                <th>Sl No.</th>
                                <th>Product Image</th>
                                <th>Product Name</th>
                                <th>Company Name</th>
                                <th>Price</th>
                                <div className="ml-7">
                                <th>Action</th>
                                </div>
                            </tr>
                        </thead>
                        <tbody>
                            {products.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage).map((product, index) =>
                                <tr key={product._id}>
                                    <td>
                                        <h2 className="text-xl">{index + 1 + (currentPage - 1) * productsPerPage}</h2>
                                    </td>
                                    <td>
                                        <div className="flex items-center justify-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-20 w-24">
                                                    <img
                                                        src={product.image}
                                                        alt="Product Image" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-lg">{product.productName}</td>
                                    <td className="text-lg">{product.companyName}</td>
                                    <td className="text-lg">{product.price} $</td>
                                    <td className="flex justify-between gap-4 items-center mt-4">
                                        <Link to={`/dashboard/updateproduct/${product._id}`}>
                                            <button className="btn btn-ghost btn-md bg-yellow-400 font-bold text-white text-xl"><CiEdit /></button>
                                        </Link>
                                        <button onClick={() => handleDelete(product._id)} className="btn btn-ghost btn-md bg-red-500 font-bold text-xl text-white"><MdDeleteForever /></button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                {/* Pagination */}
                <div className="mt-8 flex justify-center">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            className={`mx-2 py-2 px-4 ${currentPage === i + 1 ? 'bg-gray-600 text-white' : 'bg-gray-300 text-gray-700'} hover:bg-gray-400`}
                            onClick={() => setCurrentPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;
