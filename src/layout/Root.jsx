import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../pages/Home';

const Root = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;