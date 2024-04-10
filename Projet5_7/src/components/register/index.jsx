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
        <div>
            <div>
                <h2>Register</h2>
                <form onSubmit={onSubmit}>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    <input 
                        type="password" 
                        placeholder="Confirm Password" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        required 
                    />
                    <button type="submit">Register</button>
                </form>
                {errorMessage && <p>{errorMessage}</p>}
                <p>Already have an account? <Link to="/">Login here</Link></p>
            </div>
        </div>
    );
};

export default Register;
