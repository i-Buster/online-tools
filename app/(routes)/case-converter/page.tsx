'use client'

import { useState } from "react";

const caseTypes = [
    {
        caseType: 'UPPERCASE',
        displayName: 'Upper Case'
    },
    {
        caseType: 'LOWERCASE',
        displayName: 'Lower Case'
    },
    {
        caseType: 'CAPITALIZE',
        displayName: 'Sentence Case'
    }
]
const CaseConverter = () => {
    const [textEntered, setTextEntered] = useState('')
    const [selectedCase, setSelectedCase] = useState('UPPERCASE')

    const handleTyping = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextEntered(event.target.value)
    };

    const sentenceCase = (input: string, lowercaseBefore = true) => {
        input = (input === undefined || input === null) ? '' : input;
        if (lowercaseBefore) { input = input.toLowerCase(); }
        return input.toString().replace(/(^|\. *)([a-z])/g, function (match, separator, char) {
            return separator + char.toUpperCase();
        });
    }

    const renderSwitch = (caseType = 'UPPERCASE', str: string) => {
        switch (caseType) {
            case 'UPPERCASE':
                return str.toUpperCase();
            case 'LOWERCASE':
                return str.toLowerCase();
            case 'CAPITALIZE':
                return sentenceCase(str);
            default:
                return str;
        }
    }

    return (
        <div className="flex flex-col justify-evenly items-center h-full gap-4">
            <h1 className="text-3xl font-bold">Case Converter</h1>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <label htmlFor="textInput">Input Text:
                    </label>
                    <button className="h-9 px-4 font-semibold rounded-md bg-black text-white" onClick={() => { navigator.clipboard.writeText(textEntered) }}
                    >
                        Copy content
                    </button>
                </div>
                <textarea id="textInput" name="textInput" value={textEntered} onChange={handleTyping} rows={4} cols={50} autoFocus={true} placeholder="Enter the text you want to convert" className="p-2 rounded-lg">
                </textarea>
            </div>
            <div>
                <div className="flex gap-3">
                    {caseTypes.map((item) => <button key={item.caseType} className={`h-9 shadow-2xl px-4 font-semibold rounded-md ${selectedCase === item.caseType ? 'bg-blue-600' : 'bg-gray-100'} ${selectedCase === item.caseType ? 'text-white' : 'text-black'}`} onClick={() => { setSelectedCase(item.caseType) }}>{item.displayName}</button>)}
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <label htmlFor="outputText">Output Text:</label>
                    <button className="h-9 px-4 font-semibold rounded-md bg-black text-white" onClick={() => { navigator.clipboard.writeText(renderSwitch(selectedCase, textEntered)) }}
                    >
                        Copy content
                    </button>
                </div>
                <textarea id="outputText" name="outputText" value={renderSwitch(selectedCase, textEntered)} readOnly rows={4} cols={50} className="p-2 rounded-lg" placeholder="Converted text">
                </textarea>
            </div>
        </div>
    )
}

export default CaseConverter;
