import React from 'react';
import { Task1 } from './Tasks/Task1';
import { Task2 } from './Tasks/Task2';
import { Task3 } from './Tasks/Task3';


export const Lab2: React.FC = () => {
    return (
        <div className='lab'>
            <h1>Lab 2</h1>
            <Task1 />
            <Task2 />
            <Task3 />
        </div>
    )
}