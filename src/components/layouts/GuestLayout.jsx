import { Outlet } from "react-router-dom";

const GuestLayout = () => {
    return (
        <main className="w-full min-h-screen ">
            <Outlet />
        </main>
    );
};

export default GuestLayout;
