import { IndexPage } from "@/pages";
import { Route, Routes } from "react-router";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<IndexPage />} />
        </Routes>
    )
}