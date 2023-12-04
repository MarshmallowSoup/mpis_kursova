import React, { useState } from 'react';
import { generatePrimesInRange } from './services';

export const Task2: React.FC = () => {

    const [start, setStart] = useState<number>(0)
    const [end, setEnd] = useState<number>(100)
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
        if (start >= 0 && end >= 1 && end > start) {
            const primeRange = generatePrimesInRange(start, end)
            setResult(primeRange.result)
            setTime(primeRange.time)
        } else {
            alert("incorrect interval!")
        }
    }

    return (
        <div className='lab-task'>
            <h2>Task 2</h2>
            <div className="container">
                <div className="sub-container">
                    <p className="headings">Start: </p>
                    <input
                        type="text"
                        placeholder="Type here"
                        value={start}
                        onChange={(e) => { setStart(formatNumberInput(e.target.value)) }}
                    />
                </div>
                <div className="sub-container">
                    <p className="headings">End: </p>
                    <input
                        type="text"
                        placeholder="Type here"
                        value={end}
                        onChange={(e) => { setEnd(formatNumberInput(e.target.value)) }}
                    />
                </div>
                <div className='button' onClick={() => { handleOnGenerate() }}>
                    <p>Generate</p>
                </div>
            </div>
            <div className="container">
                <div className="sub-container">
                    <p className="headings">Prime numbers range:</p>
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