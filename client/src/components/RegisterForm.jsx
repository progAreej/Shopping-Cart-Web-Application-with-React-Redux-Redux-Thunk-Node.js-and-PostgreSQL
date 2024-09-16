import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/authActions';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const authError = useSelector((state) => state.auth?.error); // Added optional chaining

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
      dispatch(register({ email, password }));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded">
        <h2 className="text-xl mb-4">Register</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        {authError && <p className="text-red-500 mb-2">{authError}</p>}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="p-2 border mb-4 w-full"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="p-2 border mb-4 w-full"
          required
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          className="p-2 border mb-4 w-full"
          required
        />
        <button type="submit" className="bg-green-500 text-white p-2 rounded w-full">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
