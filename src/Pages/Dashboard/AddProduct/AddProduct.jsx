import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddProduct = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit , reset } = useForm()
    const onSubmit = async (data) => {
        console.log(data);
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": 'multipart/form-data'
            }
        })
        if (res.data.success) {
            const productItem = {
                image: res.data.data.display_url,
                productName: data.productName,
                description: data.description,
                price: data.price,
                category: data.category,
                type: "Normal",
                companyName: data.companyName,
                warranty: data.warranty,
                rating: data.rating
            }
            const productres = await axiosSecure.post('/products', productItem);
            console.log(productres);
            if (productres.data.insertedId) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "A new product has been added",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log(res.data);
    }
    return (
        <div>
            <div className='flex justify-center mb-12'>
                <h2 className='w-96 border-y-4 border-gray-600 text-center py-3 text-4xl font-semibold'>ADD PRODUCT</h2>
            </div>
            <div className="bg-sky-300/25 rounded-xl p-3 py-10">
                <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
                    {/* Product Name */}
                    <div className="flex justify-between items-center gap-8 mb-2">
                        <div className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-lg font-semibold ">Product Name *</span>
                            </div>
                            <input type="text" {...register("productName")} placeholder="Product Name" className="input input-bordered w-full" />
                        </div>
                        {/* Company Name */}
                        <div className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-lg font-semibold ">Company Name *</span>
                            </div>
                            <input type="text" {...register("companyName")} placeholder="Company Name" className=" input input-bordered w-full" />
                        </div>
                    </div>

                    {/* Image */}
                    <div>
                        <div className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-lg font-semibold ">Product Image *</span>
                            </div>
                            <input type="file" {...register("image")} className="file-input file-input-bordered w-full " />

                        </div>
                    </div>

                    <div className="flex justify-between gap-8">
                        {/* Category */}
                        <div>
                            <div className="form-control w-[455px]">
                                <div className="label">
                                    <span className="label-text text-lg font-semibold ">Category *</span>
                                </div>
                                <select {...register("category")} className="select select-bordered w-full">
                                    <option defaultValue='default'>Select a Category</option>
                                    <option value="Bags"> Bags </option>
                                    <option value="Bottles">Bottles</option>
                                    <option value="Caps">Caps</option>
                                    <option value="Shoes">Shoes</option>
                                    <option value="Earbuds">Earbuds</option>
                                    <option value="Pants">Pants</option>
                                    <option value="TShirt">T-Shirts</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <div className="form-control w-[455px]">
                                <div className="label">
                                    <span className="label-text text-lg font-semibold ">Warrenty *</span>
                                </div>
                                <input type="text" {...register("warranty")} placeholder="Warranty" className="input input-bordered w-full" />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between gap-8">
                        <div>
                            <div className="form-control w-[455px]">
                                <div className="label">
                                    <span className="label-text text-lg font-semibold ">Rating *</span>
                                </div>
                                <input type="number" {...register("rating")} placeholder="Rating Out of 5.00" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div>
                            <div className="form-control w-[455px]">
                                <div className="label">
                                    <span className="label-text text-lg font-semibold ">Price *</span>
                                </div>
                                <input type="number" {...register("price")} placeholder="Price" className="input input-bordered w-full" />
                            </div>
                        </div>
                    </div>


                    {/* Description */}
                    <div>
                        <div className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-lg font-semibold ">Product Description *</span>
                            </div>
                            <textarea  {...register("description")} placeholder="Product Description" className="textarea textarea-bordered w-full h-40 p-4 text-lg" />
                        </div>
                    </div>

                    <div className=" mb-4">
                        <button className="btn py-2 bg-sky-300 text-2xl font-semibold w-full">ADD PRODUCT</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;