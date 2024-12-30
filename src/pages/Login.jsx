

import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext"; // Import AppContext
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const { setToken } = useContext(AppContext); // Use setToken from context to manage login state

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (state === "Sign Up") {
      // Simulate user registration logic here
      // Check if user exists in localStorage or context
      const existingUser = JSON.parse(localStorage.getItem("users")) || [];
      const userExists = existingUser.find((user) => user.email === email);

      if (userExists) {
        alert("User already exists! Please login.");
      } else {
        // Add new user to localStorage (for simplicity in this example)
        const newUser = { email, password, name };
        existingUser.push(newUser);
        localStorage.setItem("users", JSON.stringify(existingUser));
        alert("Account created successfully! Please login.");
        setState("Login"); // Switch to login after successful signup
      }
    } else {
      // Simulate login logic here
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        // User is authenticated, set the token and navigate to the homepage
        setToken("authenticated-token"); // Set token in context (or use JWT, session token)
        localStorage.setItem("userToken", "authenticated-token"); // Store token in localStorage

        navigate("/"); // Redirect to homepage after successful login
      } else {
        alert("Invalid email or password.");
      }
    }
  };

  return (
    <form className="min-h-[80vh] flex items-center" onSubmit={onSubmitHandler}>
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p>
          please {state === "Sign Up" ? "Create Account" : "Login"} to book an
          appointment
        </p>

        {state === "Sign Up" && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)} // Corrected input handling
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              required
            />
          </div>
        )}

        <div className="w-full">
          <p>Email</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Corrected input handling
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            required
          />
        </div>

        <div className="w-full">
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Corrected input handling
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            required
          />
        </div>

        <button className="bg-primary text-white w-full py-2 rounded-md text-base">
          {state === "Sign Up" ? "Create account" : "Login"}
        </button>

        {state === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-primary underline cursor-pointer"
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create a new account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-primary underline cursor-pointer"
            >
              click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
