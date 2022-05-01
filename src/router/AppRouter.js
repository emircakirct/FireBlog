import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Navbar from '../components/Navbar'
import Dasboard from "../pages/Dashboard"
import Login from "../pages/Login"
import Profile from "../pages/Profile"
import Register from "../pages/Register"
import NewBlog from "../pages/NewBlog"
import Details from "../pages/Details"
import PrivateRouter from "./PrivateRouter"
import UpdateBlog from "../pages/UpdateBlog"

const AppRouter = () => {


    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Dasboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route element={<PrivateRouter />}>
                    <Route path="/details" element={<Details />} />
                    </Route>
                    <Route element={<PrivateRouter />}>
                    <Route path="/profile" element={<Profile />} />
                    </Route>
                    <Route element={<PrivateRouter />}>
                    <Route path="/newblog" element={<NewBlog />} />
                    </Route>
                    <Route element={<PrivateRouter />}>
                    <Route path="/updateblog" element={<UpdateBlog />} />
                    </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter