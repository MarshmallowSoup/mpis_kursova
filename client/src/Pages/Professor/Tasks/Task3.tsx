import React, { useState } from 'react';
import { findInitialRoots } from './services';

export const Task3: React.FC = () => {

    const [inputNumber, setInputNumber] = useState<number>(0)
    const formatNumberInput = (input: string) => {
        const replaced = input.replace(/\D/g, '')
        if (replaced.length)
            return Number(replaced)
        else
            return 0
    }

    const [result, setResult] = useState<string>("")
    const [time, setTime] = useState<number>(0)

    const handleOnGenerate = () => {
        if (inputNumber > 0) {
            const primeRange = findInitialRoots(inputNumber)
            setResult(primeRange.result)
            setTime(primeRange.time)
        } else {
            alert("number must be greater than 0!")
        }
    }

    return (
        <div className='lab-task'>
            <h2>Task 3</h2>
            <div className="container">
                <div className="sub-container">
                    <p className="headings">Start: </p>
                    <input
                        type="text"
                        placeholder="Type here"
                        value={inputNumber}
                        onChange={(e) => { setInputNumber(formatNumberInput(e.target.value)) }}
                    />
                </div>
                <div className='button' onClick={() => { handleOnGenerate() }}>
                    <p>Generate</p>
                </div>
            </div>
            <div className="container">
                <div className="sub-container">
                    <p className="headings">Initial roots:</p>
                    <p>{result}</p>
                </div>
                <div className="sub-container">
                    <p className="headings">Time elapsed:</p>
                    <p>{time} ms</p>
                </div>
            </div>
        </div>
    )
}