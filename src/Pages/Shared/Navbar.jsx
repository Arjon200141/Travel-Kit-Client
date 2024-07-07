import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const [isAdmin] = useAdmin();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.error(error.message);
            });
    };

    const navOptions = (
        <>
            <Link to="/"><li>Home</li></Link>
            <Link to="/shop"><li>Our Shop</li></Link>
            <Link to="/about"><li>About Us</li></Link>
            <Link to="/contact"><li>Contact Us</li></Link>
            {
                user && isAdmin && <Link to="/dashboard/adminhome"><li>Dashboard</li></Link>
            }
            {
                user && !isAdmin && <Link to="/dashboard/userHome"><li>Dashboard</li></Link>
            }
            {
                user && !isAdmin && <Link to="/dashboard/cart">
                    <li className="">
                        <button className="btn bg-white/35 border-0">
                            <img src="https://i.ibb.co/jDdJBhv/shopping-cart.png" alt="" className="h-6 w-6" />
                            <div className="badge bg-white/70 font-semibold">{cart.length}</div>
                        </button>
                    </li>
                </Link>
            }

        </>
    );

    return (
        <div>
            <div className="navbar py-3 fixed z-10 bg-opacity-35 bg-base-100 merriweather">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to="/">
                        <a className="text-3xl font-bold">TRAVEL <span className="text-red-600"> KIT</span></a>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu flex items-center gap-6 menu-horizontal text-xl px-1">
                        {navOptions}
                    </ul>
                </div>

                <div className="navbar-end">
                    {user ? (
                        <>
                            <div className="flex items-center">
                                <img src={user.photoURL} alt={user.displayName} className="h-12 w-12 rounded-full mr-3 border-2 border-black" />
                                <button onClick={handleLogOut} className="btn px-6 text-2xl py-1 bg-lime-200 font-semibold">Log Out</button>
                            </div>
                        </>
                    ) : (
                        <>
                            <Link to="/login">
                                <a className="btn px-6 text-2xl py-1 bg-amber-200 font-semibold">Log In</a>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
