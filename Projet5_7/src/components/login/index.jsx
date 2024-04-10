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
  // if (email && password) {
  //   try {
  //       if (password !== confirmPassword) {
  //           throw new Error("Passwords do not match");
  //       }
  //       await doCreateUserWithEmailAndPassword(email, password);
  //       console.log("log")
  //       navigate('/');
  //   } catch (error) {
  //       setErrorMessage(error.message);
  //       setIsRegistering(false);
  //   }
  // }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-gray-200">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <div>
          <label> mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label> Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Clique</button>

        <p className="text-center text-sm">
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
