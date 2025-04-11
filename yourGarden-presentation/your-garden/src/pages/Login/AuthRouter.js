import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Account from '..Register'
import Error from '../../_utils/Error';

const AuthRouter = () => {
    return (
        <Routes>
            <Route index element={<Login/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Account />}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    );
};

export default AuthRouter;