import { useState } from "react";
import "./Login.css";
import axios from "axios";
import qs from "qs";
const Login = ({ setIsLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signOrLogin, setSignOrLogin] = useState(true);
  return (
    <div
      id="form-div"
      className="w-screen h-screen flex flex-col items-center pb-[150px]"
    >
      <h1 className="text-white">Welcome to My E-Commerce Website</h1>
      <div id="form-anim-div" className="p-1 bg-black my-auto">
        <form
          id="login-form"
          action="login"
          className="flex login flex-col w-[100%] gap-1 p-5 rounded-[10px]"
          onSubmit={async (event) => {
            event.preventDefault();
            try {
              const header = {
                params: {
                  username: username,
                  password: password,
                },
              };
              if (signOrLogin) {
                const response = await axios.get(
                  "http://localhost:8080/user",
                  header
                );
                const result = response.data;
                if (result) {
                  alert("Login successful");
                  setIsLogin(true);
                } else {
                  alert(
                    "Invalid username or password. Please check your credentials and try again."
                  );
                  setIsLogin(false);
                }
              } else {
                const newUser = {
                  username: username,
                  password: password,
                };
                await axios.post(
                  "http://localhost:8080/user",
                  qs.stringify(newUser)
                );
                alert("Congratulations! Your account has been successfully created.");
              }
              setUsername("");
              setPassword("");
              

            } catch (error) {
              console.log(error.message);
            }
          }}
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="username" className="text-white">
              Username
            </label>
            <input
              required
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              className="px-3 py-1 "
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-white">
              Password
            </label>
            <input
              required
              type="password"
              name="password"
              value={password}
              id="password"
              className="px-3 py-1"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <a
            className="text-white cursor-pointer text-end me-4 mt-3"
            onClick={() => {
              setSignOrLogin(!signOrLogin);
            }}
          >
            {signOrLogin ? "Sign up" : "Login"}
          </a>
          <input
            type="submit"
            value={signOrLogin ? "Login" : "Sign up"}
            className="border border-black bg-white rounded-3xl p-1 mt-5 font-semibold"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
