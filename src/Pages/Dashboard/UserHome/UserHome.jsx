import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

const UserHome = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h2>
                <span>Hi , Welcome </span>
                { 
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
        </div>
    );
};

export default UserHome;