import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GuestLayout from "../components/layouts/GuestLayout";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<GuestLayout />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
