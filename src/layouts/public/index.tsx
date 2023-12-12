import { Outlet } from "react-router-dom";
import Header from "../../components/header";

const PublicLayout = (): JSX.Element => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default PublicLayout;