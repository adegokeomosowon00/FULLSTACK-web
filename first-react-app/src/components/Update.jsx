import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useParams } from "react-router-dom";

function UpdateUser() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const updateById = async (e) => {
    e.preventDefault();
    try {
      if (!password && !email) return alert("fill your credentials");
      const token = localStorage.getItem("token");
      const res = await axios.put(
        `https://fullstack-web-1.onrender.com/users/${id}`,
        {
          password,
          email,
        },
      );
      navigate(`/user/${id}`);
    } catch (err) {
      console.error(err.message);
      setError(err.message);
    }
    if (error) return <h2>{error}</h2>;
  };
  return (
    <>
      <form onSubmit={updateById}>
        <input
          placeholder="Update your email"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="update your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Update</button>
      </form>
    </>
  );
}
export default UpdateUser;
