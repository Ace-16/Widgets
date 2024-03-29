import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Convert = ({ language, text }) => {
    const [result, setResults] = useState("");
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timerid = setTimeout(() =>{
            setDebouncedText(text);
        }, 500);

        return () => {
            clearTimeout(timerid);
        }

    }, [text]);

    useEffect(() => {
        const doTranslation = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
                }
            });
            setResults(data.data.translations[0].translatedText);
        };
        doTranslation();

    }, [language, debouncedText]);

    return (
        <div>
            <h1 className="ui header">
                {result}
            </h1>
        </div>
    );
}

export default Convert;