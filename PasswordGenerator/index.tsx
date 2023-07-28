'use client'

import React, { useState } from 'react';

const PasswordGenerator = () => {
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(12);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);

    const generatePassword = () => {
        const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
        const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

        let characters = lowerCaseLetters + upperCaseLetters;
        if (includeNumbers) characters += numbers;
        if (includeSymbols) characters += symbols;

        let generatedPassword = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            generatedPassword += characters[randomIndex];
        }
        setPassword(generatedPassword);
    };

    return (
        <div className="min-h-screen bg-gray-200 flex justify-center items-center">
            <div className="max-w-lg mx-auto mt-8 p-4 bg-gray-100 shadow-md rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Password Generator</h2>
                <div className="mb-4">
                    <label htmlFor="passwordLength" className="block font-medium mb-2">
                        Password Length:
                    </label>
                    <input
                        type="number"
                        id="passwordLength"
                        className="border rounded-md px-3 py-2 w-full"
                        value={length}
                        onChange={(e) => setLength(Number(e.target.value))}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="includeNumbers" className="block font-medium mb-2">
                        Include Numbers:
                    </label>
                    <input
                        type="checkbox"
                        id="includeNumbers"
                        checked={includeNumbers}
                        onChange={(e) => setIncludeNumbers(e.target.checked)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="includeSymbols" className="block font-medium mb-2">
                        Include Symbols:
                    </label>
                    <input
                        type="checkbox"
                        id="includeSymbols"
                        checked={includeSymbols}
                        onChange={(e) => setIncludeSymbols(e.target.checked)}
                    />
                </div>
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                    onClick={generatePassword}
                >
                    Generate Password
                </button>
                <div className="mt-4">
                    {password && (
                        <textarea
                            className="border rounded-md px-3 py-2 w-full mt-2"
                            value={password}
                            readOnly
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default PasswordGenerator;