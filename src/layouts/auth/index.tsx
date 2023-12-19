import { Outlet } from "react-router-dom";
import HeaderAuth from "../../components/headerAuth";
import Footer from "../../components/footer";


const AuthLayout = (): JSX.Element => {
    return (
        <>
            <HeaderAuth />
            <Outlet />
            <Footer />
        </>
    );
};

export default AuthLayout;