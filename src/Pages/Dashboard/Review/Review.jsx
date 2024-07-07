import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

const Review = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        const reviewInfo = {
            reviewerName: user.displayName,
            image: user.photoURL,
            reviewDetails: data.description,
            rating: parseFloat(data.rating),
        }
        axiosPublic.post('/reviews', reviewInfo)
            .then(res => {
                if (res.data.insertedId) {
                    reset();
                    Swal.fire({
                        title: "Thank You!",
                        text: "Thanks For Your Feedback!!!",
                        icon: "success"
                    });
                }
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <div className='flex justify-center mb-12'>
                <h2 className='w-96 border-y-4 border-gray-600 text-center py-3 text-4xl font-semibold'>ADD REVIEW</h2>
            </div>
            <div>
                <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
                    {/* Reviewer Name */}
                    <div className="flex justify-between items-center gap-8 mb-2">
                        <div className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-lg font-semibold ">Reviewer Name *</span>
                            </div>
                            <input type="text" {...register("reviewerName")} defaultValue={user.displayName} placeholder="Reviewer Name" readOnly className="input input-bordered w-full" />
                        </div>

                        <div>
                            <div className="form-control w-[455px]">
                                <div className="label">
                                    <span className="label-text text-lg font-semibold ">Rating *</span>
                                </div>
                                <input type="number" step="0.1" {...register("rating", {
                                    required: "Rating is required",
                                    min: { value: 0, message: "Rating must be at least 0" },
                                    max: { value: 5, message: "Rating must be at most 5" },
                                })} placeholder="Rating Out of 5.00" className="input input-bordered w-full" />
                                {errors.rating && <span className="text-red-500">{errors.rating.message}</span>}
                            </div>
                        </div>
                    </div>

                    {/* Reviewer Image */}
                    <div className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-lg font-semibold ">Reviewer Image *</span>
                        </div>
                        <input type="text" {...register("photo")} defaultValue={user.photoURL} readOnly placeholder="Reviewer Image" className="input input-bordered w-full" />
                    </div>

                    {/* Review Details */}
                    <div>
                        <div className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-lg font-semibold ">Review Details *</span>
                            </div>
                            <textarea {...register("description", { required: "Review details are required" })} placeholder="Give Your Feedback" className="textarea textarea-bordered w-full h-40 p-4 text-lg" />
                            {errors.description && <span className="text-red-500">{errors.description.message}</span>}
                        </div>
                    </div>

                    <div className="mb-4">
                        <button className="btn py-2 bg-sky-300 text-2xl font-semibold w-full">ADD REVIEW</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Review;
