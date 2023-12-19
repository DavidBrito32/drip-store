import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";

const PublicLayout = (): JSX.Element => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default PublicLayout;