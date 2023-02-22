import React, { useEffect } from 'react'
import { CopyBlock } from "react-code-blocks";
import Prism from 'prismjs';
interface CodeBlockProps {
    code: any;
    language: string;
    startingLineNumber?: number
}
// { code, language, showLineNumbers, startingLineNumber }: CodeBlockProps

const CodeBlock = ({ language, code,  startingLineNumber }: CodeBlockProps) => {
    // const code = `var data = 1;`;
    const html = Prism.highlight(code, Prism.languages.javascript, 'javascript');
    useEffect(() => {
        Prism.highlightAll();
    }, []);
    return (
        <>
            <div className="Code border border-border-main bg-bg-secondary p-4 ">
                <pre>
                    <code className={`language-${language} `}>{code}</code>
                </pre>
            </div>
        </>
    )
}

export default CodeBlock