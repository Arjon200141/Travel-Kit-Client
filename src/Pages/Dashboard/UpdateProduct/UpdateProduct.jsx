import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const { productName, companyName, warranty, price, _id, image, description} = useLoaderData();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        try {
            const imageFile = data.image[0];
            let imageUrl = image;

            if (imageFile) {
                const formData = new FormData();
                formData.append("image", imageFile);

                const res = await axiosPublic.post(image_hosting_api, formData, {
                    headers: {
                        "content-type": 'multipart/form-data'
                    }
                });

                if (res.data.success) {
                    imageUrl = res.data.data.display_url;
                }
            }

            const productItem = {
                image: imageUrl,
                productName: data.productName,
                description: data.description,
                price: data.price,
                category: data.category,
                type: "Normal",
                companyName: data.companyName,
                warranty: data.warranty,
                rating: data.rating
            };

            const productres = await axiosSecure.patch(`/products/${_id}`, productItem);
            if (productres.data.modifiedCount > 0) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.productName} has been updated`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            console.error("Error updating product:", error);
        }
    };

    return (
        <div>
            <div className='flex justify-center mb-12'>
                <h2 className='w-96 border-y-4 border-gray-600 text-center py-3 text-4xl font-semibold'>UPDATE PRODUCT</h2>
            </div>
            <div className="bg-sky-300/25 rounded-xl p-3 py-10">
            <h2 className="text-3xl font-semibold text-center my-8">Update Details of : {productName}</h2>
                <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
                    {/* Product Name */}
                    <div className="flex justify-between items-center gap-8 mb-2">
                        <div className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-lg font-semibold ">Product Name *</span>
                            </div>
                            <input defaultValue={productName} type="text" {...register("productName")} placeholder="Product Name" className="input input-bordered w-full" />
                        </div>
                        {/* Company Name */}
                        <div className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-lg font-semibold ">Company Name *</span>
                            </div>
                            <input defaultValue={companyName} type="text" {...register("companyName")} placeholder="Company Name" className=" input input-bordered w-full" />
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div>
                            <div className="form-control w-[455px]">
                                <div className="label">
                                    <span className="label-text text-lg font-semibold ">Warrenty *</span>
                                </div>
                                <input defaultValue={warranty} type="text" {...register("warranty")} placeholder="Warranty" className="input input-bordered w-full" />
                            </div>
                        </div>

                        <div>
                            <div className="form-control w-[455px]">
                                <div className="label">
                                    <span className="label-text text-lg font-semibold ">Price *</span>
                                </div>
                                <input defaultValue={price} type="number" {...register("price")} placeholder="Price" className="input input-bordered w-full" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-lg font-semibold ">Product Image *</span>
                            </div>
                            <input type="file" {...register("image")} className="file-input file-input-bordered w-full " />

                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <div className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-lg font-semibold ">Product Description *</span>
                            </div>
                            <textarea defaultValue={description} {...register("description")} placeholder="Product Description" className="textarea textarea-bordered w-full h-40 p-4 text-lg" />
                        </div>
                    </div>

                    <div className="mb-4">
                        <button className="btn py-2 bg-sky-300 text-2xl font-semibold w-full">UPDATE PRODUCT</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;
