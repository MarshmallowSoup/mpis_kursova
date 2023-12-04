import React, { useState } from 'react';
import { generatePrimeNumber } from './services';

export const Task1: React.FC = () => {

    const [t, setT] = useState<number>(1000)
    const [n, setN] = useState<number>(64)
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
        if (t > 0 && n > 0) {
            const primeNumber = generatePrimeNumber(t, n)
            setResult(primeNumber.result)
            setTime(primeNumber.time)
        } else {
            alert("t and n must be greater than 0!")
        }
    }

    return (
        <div className='lab-task'>
            <h2>Task 1</h2>
            <div className="container">
                <div className="sub-container">
                    <p className="headings">t: </p>
                    <input
                        type="text"
                        placeholder="Type here"
                        value={t}
                        onChange={(e) => { setT(formatNumberInput(e.target.value)) }}
                    />
                </div>
                <div className="sub-container">
                    <p className="headings">n: </p>
                    <input
                        type="text"
                        placeholder="Type here"
                        value={n}
                        onChange={(e) => { setN(formatNumberInput(e.target.value)) }}
                    />
                </div>
                <div className='button' onClick={() => { handleOnGenerate() }}>
                    <p>Generate</p>
                </div>
            </div>
            <div className="container">
                <div className="sub-container">
                    <p className="headings">Prime number:</p>
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