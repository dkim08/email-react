import { useState } from "react";
import Layout from "../../Layout";
import "./style.css"; // подключаем CSS

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
        setLink(newLink);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(link);
        alert("Copied to clipboard!");
    };

    return (
        <Layout>
            <div className="link-generator-container">
                <div className="link-generator-content">
                    <p className="title">Генератор ссылок</p>
                    <p className="subtitle">Чтобы сгенерировать ссылку, нажмите на кнопку</p>
                    <button className="generate-btn" onClick={generateLink}>
                        Сгенерировать
                    </button>

                    {link && (
                        <div className="link-display">
                            <span className="link-text">{link}</span>
                            <button className="copy-btn" onClick={copyToClipboard}>
                                Copy
                            </button>
                        </div>
                    )}
                </div>
            </div>

        </Layout>
    );
};

export default LinkGenerator;
