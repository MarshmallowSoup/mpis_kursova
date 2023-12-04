import React, { useEffect, useState } from 'react';
import { decryptGamma, encryptGamma } from './services';

const gamma = "БОЛЕСЛАВ"

export const Task1: React.FC = () => {
    const [inputEncrypt, setInputEncrypt] = useState('')
    const [outputEncrypt, setOutputEncrypt] = useState('...')
    useEffect(() => {
        if (inputEncrypt.length) {
            const encrypted = encryptGamma(inputEncrypt, gamma)
            setOutputEncrypt(encrypted)
        } else {
            setOutputEncrypt('...')
        }
    }, [inputEncrypt])

    const [inputDecrypt, setInputDecrypt] = useState('')
    const [outputDecrypt, setOutputDecrypt] = useState('...')
    useEffect(() => {
        if (inputDecrypt.length) {
            const decrypted = decryptGamma(inputDecrypt, gamma)
            setOutputDecrypt(decrypted)
        } else {
            setOutputDecrypt('...')
        }
    }, [inputDecrypt])

    return (
        <div className='lab-task'>
            <h2>Task 1</h2>
            <div className="container">
                <div className="sub-container">
                    <p className="headings">Encrypt: </p>
                    <input
                        type="text"
                        placeholder="Type here"
                        value={inputEncrypt}
                        onChange={(e) => { setInputEncrypt(e.target.value.toUpperCase()) }}
                    />
                </div>
                <div className="sub-container">
                    <p className="headings">Encrypted:</p>
                    <p>{outputEncrypt}</p>
                </div>
            </div>
            <div className="container">
                <div className="sub-container">
                    <p className="headings">Decrypt: </p>
                    <input
                        type="text"
                        placeholder="Type here"
                        value={inputDecrypt}
                        onChange={(e) => { setInputDecrypt(e.target.value.toUpperCase()) }}
                    />
                </div>
                <div className="sub-container">
                    <p className="headings">Decrypted:</p>
                    <p>{outputDecrypt}</p>
                </div>
            </div>
        </div>
    )
}