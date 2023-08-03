'use client'

import { useState } from "react";

const TextToBinary = () => {
    const [textEntered, setTextEntered] = useState('')
    const [convertedBinary, setConvertedBinary] = useState('')

    const handleBinaryConversion = (string: string) => {
        let binaryOutput = ''
        for (let i = 0; i < string.length; i++) {
            // charCodeAt(0) will return returns an integer representing the UTF-16 code unit at index 0

            // toString(2) will convert the number into binary (radix 2)
            binaryOutput += string[i].charCodeAt(0).toString(2) + " ";
        }
        setConvertedBinary(binaryOutput)
    }

    const handleTyping = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextEntered(event.target.value)
        handleBinaryConversion(event.target.value)
    };

    return (
        <div className="flex flex-col justify-around items-center h-full gap-12">
            <h1 className="text-3xl font-bold">Text to Binary</h1>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <label htmlFor="textInput">Enter the Text you want to convert:
                    </label>
                    <button className="h-9 px-4 font-semibold rounded-md bg-black text-white" onClick={() => { navigator.clipboard.writeText(textEntered) }}
                    >
                        Copy content
                    </button>
                </div>
                <textarea id="textInput" name="textInput" value={textEntered} onChange={handleTyping} rows={4} cols={50} autoFocus={true} placeholder="Enter binary" className="p-2 rounded-lg resize-none">
                </textarea>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <label htmlFor="convertedBinary">The converted binary:</label>
                    <button className="h-9 px-4 font-semibold rounded-md bg-black text-white" onClick={() => { navigator.clipboard.writeText(convertedBinary) }}
                    >
                        Copy content
                    </button>
                </div>
                <textarea id="convertedBinary" name="convertedBinary" value={convertedBinary} readOnly rows={4} cols={50} className="p-2 rounded-lg resize-none" placeholder="Binary data from text">
                </textarea>
            </div>
        </div>
    )
}

export default TextToBinary;
