import React, { useState } from 'react';
import './Lab4Styles.less';
import { charCodesFromString, decryptTextSteganograph, encryptTextSteganograph, realCharCount } from './services';

export const Lab4: React.FC = () => {
    const [container, setContainer] = useState('')
    const [encrypt, setEncrypt] = useState('')
    const [decrypt, setDecrypt] = useState('')

    const encryptText = () => {
        setDecrypt(encryptTextSteganograph(container, encrypt))
    }

    const decryptText = () => {
        setEncrypt(decryptTextSteganograph(decrypt))
    }

    return (
        <div className='lab lab4'>
            <h1>Lab 4</h1>
            <div className='lab-task'>
                <h2>Container</h2>
                <div className="container">
                    <div className="sub-container">
                        <p className="headings">Cover text: </p>
                        <input
                            type="text"
                            placeholder="Type here"
                            value={container}
                            onChange={(e) => { setContainer(e.target.value) }}
                        />
                    </div>
                    <div className="sub-container">
                        <p className="headings">Cover text characters: {realCharCount(container)}</p>
                    </div>
                    <div className="sub-container">
                        <p className="headings">Cover text charcodes: </p>
                        <p>{charCodesFromString(container)}</p>
                    </div>
                </div>
            </div>
            <div className='lab-task'>
                <h2>Encryption</h2>
                <div className="container">
                    <div className="sub-container">
                        <p className="headings">Encrypt text: </p>
                        <input
                            type="text"
                            placeholder="Type here"
                            value={encrypt}
                            onChange={(e) => { setEncrypt(e.target.value) }}
                        />
                    </div>
                    <div className="sub-container">
                        <p className="headings">Encrypt text characters: {realCharCount(encrypt)}</p>
                    </div>
                    <div className="sub-container">
                        <p className="headings">Encrypt text charcodes: </p>
                        <p>{charCodesFromString(encrypt)}</p>
                    </div>
                    <div className='button' onClick={() => { encryptText() }}>
                        <p>Encrypt</p>
                    </div>
                </div>
            </div>
            <div className='lab-task'>
                <h2>Decryption</h2>
                <div className="container">
                    <div className="sub-container">
                        <p className="headings">Decrypt text: </p>
                        <input
                            type="text"
                            placeholder="Type here"
                            value={decrypt}
                            onChange={(e) => { setDecrypt(e.target.value) }}
                        />
                    </div>
                    <div className="sub-container">
                        <p className="headings">Decrypt text characters: {realCharCount(decrypt)}</p>
                    </div>
                    <div className="sub-container">
                        <p className="headings">Decrypt text charcodes: </p>
                        <p>{charCodesFromString(decrypt)}</p>
                    </div>
                    <div className='button' onClick={() => { decryptText() }}>
                        <p>Decrypt</p>
                    </div>
                </div>
            </div>
        </div>
    )
}