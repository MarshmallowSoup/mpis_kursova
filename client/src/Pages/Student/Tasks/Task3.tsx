import React, { useEffect, useState } from 'react';
import { decryptVigenere, encryptVigenere } from './services';

export const Task3: React.FC = () => {
    const [key, setKey] = useState('КЛЮЧ')
    const [inputEncrypt, setInputEncrypt] = useState('')
    const [outputEncrypt, setOutputEncrypt] = useState('...')
    useEffect(() => {
        if (inputEncrypt.length) {
            const encrypted = encryptVigenere(inputEncrypt, key)
            setOutputEncrypt(encrypted)
        } else {
            setOutputEncrypt('...')
        }
    }, [inputEncrypt, key])

    const [inputDecrypt, setInputDecrypt] = useState('')
    const [outputDecrypt, setOutputDecrypt] = useState('...')
    useEffect(() => {
        if (inputDecrypt.length) {
            const decrypted = decryptVigenere(inputDecrypt, key)
            setOutputDecrypt(decrypted)
        } else {
            setOutputDecrypt('...')
        }
    }, [inputDecrypt, key])

    return (
        <div className='lab-task'>
            <h2>Task 3</h2>
            <div className="container">
                <div className="sub-container">
                    <p className="headings">Key: </p>
                    <input
                        type="text"
                        placeholder="Type here"
                        value={key}
                        onChange={(e) => { setKey(e.target.value.toUpperCase()) }}
                    />
                </div>
            </div>
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