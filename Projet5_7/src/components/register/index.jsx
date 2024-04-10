import React, { useState } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { doCreateUserWithEmailAndPassword } from "../../firebase/auth";
import { useAuth } from '../../contexts/authContext';

const Register = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isRegistering) {
            setIsRegistering(true);
            try {
                if (password !== confirmPassword) {
                    throw new Error("Passwords do not match");
                }
                await doCreateUserWithEmailAndPassword(email, password);
                console.log("log")
                navigate('/');
            } catch (error) {
                setErrorMessage(error.message);
                setIsRegistering(false);
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-gray-200 text-center rounded-xl p-8">
                <h2 className="text-3xl font-extrabold text-gray-900">Register</h2>
                <form onSubmit={onSubmit} className="space-y-4">
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                        className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                        className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <input 
                        type="password" 
                        placeholder="Confirm Password" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        required 
                        className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Register
                    </button>
                </form>
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                <p className="text-gray-800">Already have an account? <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500">Login here</Link></p>
            </div>
        </div>
    );
};

export default Register;
