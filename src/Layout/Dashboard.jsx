import { BsFillCartPlusFill } from "react-icons/bs";
import { FaHome, FaShopify } from "react-icons/fa";
import { IoIosAddCircle, IoIosPeople } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import { MdAddBox, MdWorkHistory } from "react-icons/md";
import { RiFileEditFill, RiMailFill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const isAdmin = useAdmin();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-sky-300">
                <div className="mt-6">
                    <a className="ml-4 text-4xl font-bold">TRAVEL <span className="text-red-600"> KIT</span></a>
                </div>
                <ul className="p-6 space-y-4 text-xl">
                    {
                        isAdmin ?
                            <>
                                <li>
                                    <NavLink className="flex items-center gap-2" to="/dashboard/adminhome"><FaHome />
                                        Admin Home</NavLink>
                                </li>
                                <li>
                                    <NavLink className="flex items-center gap-2" to="/dashboard/addproduct"><MdAddBox />
                                        Add Product</NavLink>
                                </li>
                                <li>
                                    <NavLink className="flex items-center gap-2" to="/dashboard/manageproduct"><RiFileEditFill />
                                        Manage Product</NavLink>
                                </li>
                                <li>
                                    <NavLink className="flex items-center gap-2" to="/dashboard/allusers"><IoIosPeople />
                                        All Users</NavLink>
                                </li>
                            </>
                            :
                            <>
                                <li>
                                    <NavLink className="flex items-center gap-2" to="/dashboard/userHome"><FaHome />
                                        User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink className="flex items-center gap-2" to="/dashboard/cart"><BsFillCartPlusFill />
                                        My Cart</NavLink>
                                </li>
                                <li>
                                    <NavLink className="flex items-center gap-2" to="/dashboard/paymentHistory"><MdWorkHistory />
                                        Payment History</NavLink>
                                </li>
                                <li>
                                    <NavLink className="flex items-center gap-2" to="/dashboard/review"><IoIosAddCircle />
                                        Add Review</NavLink>
                                </li>
                            </>
                    }
                    <div className="divider"></div>

                    <li>
                        <NavLink className="flex items-center gap-2" to="/"><IoHomeSharp />
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="flex items-center gap-2" to="/shop"><FaShopify />
                            Our Shop</NavLink>
                    </li>
                    <li >
                        <NavLink to="/contact" className="flex items-center gap-2"><RiMailFill />
                            Contact Us</NavLink>
                    </li>

                </ul>
            </div>
            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;