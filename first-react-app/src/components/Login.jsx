import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useUser } from "./UserContext";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useUser();

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://fullstack-web-1.onrender.com/users/login",
        {
          email,
          password,
        },
      );

      const token = res.data;
      const decodedToken = jwtDecode(token);
      console.log(token);
      const loggedInUser = await loginUser(token);
      console.log("logged in user:", loggedInUser);

      // localStorage.setItem("token", res.data);
      // const token = await jwtDecode(res.data);
      setEmail("");
      setPassword("");
      navigate(`/user/${decodedToken.id}`);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <form onSubmit={onLogin}>
      <input
        placeholder="Enter your email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Enter your password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
