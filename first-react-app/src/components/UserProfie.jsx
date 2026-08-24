import { useEffect, useState, useContext } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";
import axios from "axios";
import { useUser } from "./userContext";

function UserProfile() {
  // const [promptName, setPromptName] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, logoutUser, loading, setUser } = useUser();
  console.log(user);

  useEffect(() => {
    const getUser = async () => {
      const token = await localStorage.getItem("token");
      console.log(token);
      const res = await axios.get(`http://localhost:2468/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(res.data);
    };
    getUser();
  }, []);
  const DeleteUser = async () => {
    const res = await axios.delete(`http://localhost:2468/users/${id}`);
    navigate("/sign-up");
  };

  return (
    <>
      <h1>welcome to Mobile legend,</h1>
      <button onClick={logoutUser}>log out</button>

      <h1>user email:{user.email}</h1>
      <h1>user role:{user.role}</h1>
      <Link to={`/update/${id}`}>
        <button>update user info</button>
      </Link>
      <button onClick={DeleteUser}>Delete User</button>
    </>
  );
}
export default UserProfile;
