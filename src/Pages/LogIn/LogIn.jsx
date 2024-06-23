import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProviders';
import { Link } from 'react-router-dom';

const LogIn = () => {

    const { signIn } = useContext(AuthContext);
    const [disabled, setDisabled] = useState(true);

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
            })
    }

    const captchaRef = useRef(null);

    const handleCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/sWWb5Dc/1000-F-819387038-ccl-R3-Xmknn7-Ie-Ntqv-YMd-Oug-We-Fj4-PBh3.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-[650px] bg-white/35 rounded-xl">
                        <h2 className="mt-8 text-4xl text-black font-semibold">Log In to Your Account</h2>
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
                                <input type="text" ref={captchaRef} name="captcha" placeholder="Type the Text Above" className="input input-bordered text-xl text-black" required />
                                <button onClick={handleCaptcha} className="btn btn-outline btn-xs mt-2">Validate</button>
                            </div>


                            <div className="form-control mt-4">
                                <input type="submit" disabled={disabled} value="Log In" className="btn bg-sky-200 text-xl font-semibold" />
                            </div>
                        </form>
                        <h3 className='mb-8 text-black text-xl '>New Here? <span className='font-bold'><Link to="/register" > Create New Account</Link></span></h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;