'use client'

import { useState } from "react";

const BinaryToText = () => {
    const [binaryEntered, setBinaryEntered] = useState('')
    const [convertedText, setConvertedText] = useState('')

    const checkIfBinary = (str: string) => {
        let isBinary = false;
        for (let i = 0; i < str.length; i++) {
            if (str[i] == "0" || str[i] == "1") {
                isBinary = true;
            } else {
                isBinary = false;
                break;
            }
        }
        return isBinary
    }

    const decodeBinary = (binary: string) => {
        let error = false;

        binary = binary.trim()

        // Step 1 - Split the binary into an array of strings using the .split() method
        const binaryArr = binary.split(' ');

        // Step 2 - Iterate over the elements of the new array create to change each element to a decimal
        const convertedBinaryArr = binaryArr.map(elem => {
            const isStrBinary = checkIfBinary(elem)
            if (!isStrBinary || elem.length < 7 || elem.length > 8) {
                error = true;
            }
            return parseInt(elem, 2)
        }
        );

        // Step 3 - Use String.fromCharCode with .map() to change each element of the array to text 
        const textStr = convertedBinaryArr.map(elem => String.fromCharCode(elem));

        // Step 4 - Add the element of the new array together to create a string. Save it to a new Variable.
        const newText = textStr.join("");

        // Step 5 - The new string is returned
        return error ? '(Invalid Input)' : newText;
    }

    const handleTyping = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setBinaryEntered(event.target.value)

        const decodedBinary = decodeBinary(event.target.value)
        setConvertedText(event.target.value.length > 0 ? decodedBinary : '')
    };

    return (
        <div className="flex flex-col justify-around items-center h-full gap-12">
            <h1 className="text-3xl font-bold">Binary to Text</h1>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <label htmlFor="binaryInput">Enter the binary you want to decode:</label>
                    <button className="h-9 px-4 font-semibold rounded-md bg-black text-white" onClick={() => { navigator.clipboard.writeText(binaryEntered) }}
                    >
                        Copy content
                    </button>
                </div>
                <textarea id="binaryInput" name="binaryInput" value={binaryEntered} onChange={handleTyping} rows={4} cols={50} autoFocus={true} placeholder="Enter text data" className="p-2 rounded-lg">
                </textarea>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <label htmlFor="convertedText">Decoded Text Output:</label>
                    <button className="h-9 px-4 font-semibold rounded-md bg-black text-white" onClick={() => { navigator.clipboard.writeText(convertedText) }}
                    >
                        Copy content
                    </button>
                </div>
                <textarea id="convertedText" name="convertedText" value={convertedText} readOnly rows={4} cols={50} className="p-2 rounded-lg" placeholder="Text data from Binary">
                </textarea>
            </div>
        </div>
    )
}

export default BinaryToText;
