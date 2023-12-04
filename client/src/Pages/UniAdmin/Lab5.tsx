import React, { useEffect, useState } from 'react';
import './Lab5Styles.less'
import { feistelDecrypt, feistelEncrypt } from './services';

export const Lab5: React.FC = () => {
    const numRounds = 18;
    const key = 500;

    const [inputEncrypt, setInputEncrypt] = useState('')
    const [outputEncrypt, setOutputEncrypt] = useState('...')
    useEffect(() => {
        if (inputEncrypt.length) {
            const encrypted = feistelEncrypt(inputEncrypt, numRounds, key)
            setOutputEncrypt(encrypted)
        } else {
            setOutputEncrypt('...')
        }
    }, [inputEncrypt])

    const [inputDecrypt, setInputDecrypt] = useState('')
    const [outputDecrypt, setOutputDecrypt] = useState('...')
    useEffect(() => {
        if (inputDecrypt.length) {
            const decrypted = feistelDecrypt(inputDecrypt, numRounds, key)
            setOutputDecrypt(decrypted)
        } else {
            setOutputDecrypt('...')
        }
    }, [inputDecrypt])

    return (
        <div className='lab'>
            <h1>Lab 5</h1>
            <div className="container">
                <div className="sub-container">
                    <p className="headings">Encrypt: </p>
                    <input
                        type="text"
                        placeholder="Type here"
                        value={inputEncrypt}
                        onChange={(e) => { setInputEncrypt(e.target.value) }}
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
                        onChange={(e) => { setInputDecrypt(e.target.value) }}
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