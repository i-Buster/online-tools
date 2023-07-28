'use client'

import { useState } from "react";

const WordReplacer = () => {
    const [textEntered, setTextEntered] = useState('')
    const [wordToReplace, setWordToReplace] = useState('')
    const [wordToReplaceWith, setWordToReplaceWith] = useState('')

    const handleTyping = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextEntered(event.target.value)
    };

    const regex = new RegExp('\\b' + wordToReplace + '\\b', "g");
    const convertedString = wordToReplace && wordToReplaceWith ? textEntered.replace(regex, wordToReplaceWith) : textEntered;

    return (
        <div className="flex flex-col justify-evenly sm:items-center h-full gap-4 p-7">
            <h1 className="text-3xl font-bold">Word Replacer</h1>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <label htmlFor="textInput">Input Text:
                    </label>
                    <button className="h-9 px-4 font-semibold rounded-md bg-black text-white outline-none border-none hover:cursor-pointer hover:bg-gray-700" onClick={() => { navigator.clipboard.writeText(textEntered) }}
                    >
                        Copy content
                    </button>
                </div>
                <textarea id="textInput" name="textInput" value={textEntered} onChange={handleTyping} rows={4} cols={50} autoFocus={true} placeholder="Enter the content" className="p-2 rounded-lg bg-indigo-100 outline-1 outline">
                </textarea>
            </div>
            <div className="flex gap-3 flex-col w-[300px]">
                <div className="flex justify-between">
                    <div>
                        Replace
                    </div>
                    <div>
                        <input
                            type="text"
                            id="inputWord"
                            name="inputWord"
                            className="rounded-md px-1 bg-indigo-100 outline-1 outline"
                            value={wordToReplace}
                            onChange={e => setWordToReplace(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        With
                    </div>
                    <div>
                        <input
                            type="text"
                            id="outputWord"
                            name="outputWord"
                            className="rounded-md px-1 bg-indigo-100 outline-1 outline"
                            value={wordToReplaceWith}
                            onChange={e => setWordToReplaceWith(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <label htmlFor="outputText">Output Text:</label>
                    <button className="h-9 px-4 font-semibold rounded-md bg-black text-white outline-none border-none hover:cursor-pointer hover:bg-gray-700" onClick={() => { navigator.clipboard.writeText(convertedString) }}
                    >
                        Copy content
                    </button>
                </div>
                <textarea id="outputText" name="outputText" value={convertedString} readOnly rows={4} cols={50} className="p-2 rounded-lg bg-indigo-100 outline-1 outline">
                </textarea>
            </div>
        </div>
    )
}

export default WordReplacer;
