import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";


const Register = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const { createUser } = useContext(AuthContext);
    const onSubmit = data => {
        console.log(data);
        createUser(data.email,data.password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
    }

    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/Jy8GC8v/top-view-travelling-accessories-money-23-2148256049.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-[650px] bg-white/35 rounded-xl">
                        <h2 className="mt-8 text-4xl text-black font-semibold">Register Here</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control ">
                                <label className="label ">
                                    <span className="label-text text-xl">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered text-xl text-black" />
                                {errors.name && <span className="text-yellow-400 font-medium">This field is required</span>}
                            </div>
                            <div className="form-control ">
                                <label className="label ">
                                    <span className="label-text text-xl">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="Email" className="input input-bordered text-xl text-black" />
                                {errors.email && <span className="text-yellow-400 font-medium">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true })} name="password" placeholder="Password" className="input input-bordered text-xl text-black" />
                                {errors.password && <span className="text-yellow-400 font-medium">This field is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Register" className="btn bg-lime-200" />
                            </div>
                        </form>
                        <h3 className='mb-8 text-black text-2xl '>Already have an Account? <span className='font-bold'><Link to="/login" > Log In Now</Link></span></h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;