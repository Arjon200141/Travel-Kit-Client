import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

const UserHome = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h2 className="text-5xl">
                Hi, Welcome Back
            </h2>
            <div className="divider"></div>
            <div className="flex justify-between mx-20">
                <div className="">
                    <h2 className="text-3xl font-semibold my-8">My Profile</h2>
                    <div>
                        <div className="avatar">
                            <div className="w-64 rounded-full">
                                <img src={user.photoURL} />
                            </div>
                        </div>
                        <h2 className="text-xl my-4"><span className="font-semibold">Your Name : </span>{user.displayName}</h2>
                        <h2 className="text-xl my-4"><span className="font-semibold">Your E-Mail : </span>{user.email}</h2>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-semibold">My Activities</h2>
                </div>
            </div>
        </div>
    );
};

export default UserHome;