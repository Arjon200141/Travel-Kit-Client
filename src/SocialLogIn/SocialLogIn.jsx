import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogIn = () => {
    const { googleSignIn } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email:result.user.email,
                    name:result.user?.displayName,
                    photo:result.user?.photoURL
                }
                axiosPublic.post('/users' , userInfo)
                .then(res=>{
                    console.log(res.data);
                    Swal.fire({
                        title: "Congratulations!",
                        text: "User Logged In Successfully!",
                        icon: "success"
                      });
                    navigate(from, { replace: true });
                })
            })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn w-full text-2xl font-semibold bg-white/35">Sign In With <img src="https://i.ibb.co/TLh1bgK/google-symbol.png" alt="" className="h-8 w-8" /></button>
        </div>
    );
};

export default SocialLogIn;