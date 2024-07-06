import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProviders';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogIn from '../../SocialLogIn/SocialLogIn';

const LogIn = () => {

    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    console.log('state in the location login page', location.state)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: "Welcome Back!",
                    text: "User Logged In Successfully!",
                    icon: "success"
                  });
                navigate(from, { replace: true });
            })
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
        else {
            setDisabled(true)
        }
    }

    return (
        <div className=''>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/sWWb5Dc/1000-F-819387038-ccl-R3-Xmknn7-Ie-Ntqv-YMd-Oug-We-Fj4-PBh3.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-[650px] bg-white/35 rounded-xl my-12">
                        <h2 className="mt-6 text-4xl text-black font-semibold">Log In to Your Account</h2>
                        <form onSubmit={handleLogin} className="card-body ">
                            <div className="form-control ">
                                <label className="label ">
                                    <span className="label-text text-xl">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered text-xl text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered text-xl text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="Type the Text Above" className="input input-bordered text-xl text-black" required />
                            </div>

                            <div className="form-control mt-2">
                                <input type="submit" disabled={disabled} value="Log In" className="btn bg-sky-200 text-xl font-semibold" />
                            </div>
                            <div className="divider">OR</div>
                            <SocialLogIn></SocialLogIn>
                        </form>
                        <h3 className='mb-4 text-black text-xl '>New Here? <span className='font-bold'><Link to="/register" > Create New Account</Link></span></h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;