import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Admin from "../admin/admin";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/admin" element={<Admin />} />
        </Routes>
    );
}
