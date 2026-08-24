import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./Navbar";
import UserProfile from "./components/UserProfie";
import New from "./components/New";
import SignUp from "./SignUp";
import Login from "./components/Login";
import Update from "./components/Update";
import ProtectedRoute from "./components/protectedRoute";
import Users from "./components/Users";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/users" element={<Users />} />
          <Route path="/user/:id" element={<UserProfile />} />
        </Route>

        <Route path="/new" element={<New user="mee" />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </>
  );
}

export default App;
