"use client";

import React, { useState, ReactNode } from 'react';
import { authenticateUser } from '../../api';

const LoginLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
      <div className="w-full max-w-md p-6rounded-lg shadow-md">
        {children}
      </div> 
  );
};

const Login: React.FC = () => {
  const [loginName, setLoginName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await authenticateUser(loginName, password);
      console.log('Přihlášení úspěšné:', data);
      setError(null);
    } catch (err) {
      setError('Přihlášení selhalo. Zkontrolujte své údaje.');
      console.error(err);
    }
  };

  return (
    <LoginLayout>
      <h2 className="text-center text-lg font-bold text-gray mb-4">Přihlášení</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="loginName" className="block text-sm font-medium text-gray
           mb-1">
            Uživatelské jméno:
          </label>
          <input
            type="text"
            id="loginName"
            value={loginName}
            placeholder="Napiš své uživatelské jméno"
            onChange={(e) => setLoginName(e.target.value)}
            className="w-full px-4 py-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-10">
          <label htmlFor="password" className="block text-sm font-medium text-gray mb-1">
            Heslo:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Přihlásit se
        </button>
      </form>
    </LoginLayout>
  );
};
export default Login;
