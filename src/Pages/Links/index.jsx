import { useState } from "react";

const LinkGenerator = () => {
    const [link, setLink] = useState("");

    const generateRandomString = (length) => {
        const characters = "abcdefghijklmnopqrstuvwxyz";
        let result = "";
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    };

    const generateLink = () => {
        const randomString = generateRandomString(6);
        const newLink = `https://example.com/${randomString}`;
        console.log(newLink); 
        setLink(newLink);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(link);
        alert("Copied to clipboard!");
    };

    return (
        <div>
            <button onClick={generateLink}>Generate Link</button>
            <br /><br />
            <div>
                <span>{link}</span>
                <button onClick={copyToClipboard}>Copy</button>
            </div>
        </div>
    );
};

export default LinkGenerator;