import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from '../Pages/Home';
import { Lab1 } from '../Pages/Auth';
import { Lab2 } from '../Pages/Student';
import { Lab3 } from '../Pages/Lab3';
import { Lab4 } from '../Pages/Sysadmin';
import { Lab5 } from '../Pages/UniAdmin';
import { Lab6 } from '../Pages/Professor';

const RoutesComponent: React.FC = () => {
    return (
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/lab1" Component={Lab1} />
            <Route path="/lab2" Component={Lab2} />
            <Route path="/lab3" Component={Lab3} />
            <Route path="/lab4" Component={Lab4} />
            <Route path="/lab5" Component={Lab5} />
            <Route path="/lab6" Component={Lab6} />

        </Routes>
    )
};

export default RoutesComponent;