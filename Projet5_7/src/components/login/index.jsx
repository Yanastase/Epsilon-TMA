// src/components/login/index.jsx

import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { doSignInWithEmailAndPassword } from "../../firebase/auth";
import { useAuth } from "../../contexts/authContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   await doSignInWithEmailAndPassword(email, password);
  // };

  const handleLogin = () => {
    doSignInWithEmailAndPassword(email, password)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-6 bg-gray-200 text-center rounded-xl p-8">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <div>
          <input placeholder="Email" className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input placeholder="Password" className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"  
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin} className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Log in</button>

        <p>
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
