import React from 'react'
import { CopyBlock } from "react-code-blocks";
import Prism from 'prismjs';
interface CodeBlockProps {
    code: any;
    language: string;
    showLineNumbers: boolean;
    startingLineNumber?: number
}
// { code, language, showLineNumbers, startingLineNumber }: CodeBlockProps

const CodeBlock = () => {
    const code = `var data = 1;`;
    const html = Prism.highlight(code, Prism.languages.javascript, 'javascript');
    return (
        <>
            {/* <CopyBlock
                text={code}
                language={language}
                showLineNumbers={showLineNumbers}
                startingLineNumber={startingLineNumber}
                wrapLines
            /> */}
            <div>{html}</div>
        </>
    )
}

export default CodeBlock