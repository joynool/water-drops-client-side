import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

/*-----------------------------------------------------
    useAuth() custom hook to pass AuthContext data
-------------------------------------------------------*/
const useAuth = () =>
{
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;