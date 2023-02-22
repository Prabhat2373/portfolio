import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import DetailsIcon from '../../components/icons/DetailsIcon'
import FileIcon from '../../components/icons/FileIcon'
import AboutContent from '../About/AboutContent'
import StarIcon from '../../components/icons/StarIcon'
import CloseIcon from '../../components/icons/CloseIcon'

const AboutPageContent = () => {
    return (
        <>
            <div className="grid grid-cols-10">
                <div className="grid col-span-5 border border-border-main">
                    <div className="">
                        <div className="grid grid-flow-col grid-cols-12">
                            <div className="numbers grid col-span-1">
                                <div className="text-text-main flex flex-col items-center">
                                    <span>1</span>
                                    <span>2</span>
                                    <span>3</span>
                                    <span>4</span>
                                    <span>5</span>
                                    <span>6</span>
                                    <span>7</span>
                                    <span>8</span>
                                    <span>9</span>
                                    <span>10</span>
                                    <span>11</span>
                                    <span>12</span>
                                    <span>13</span>
                                    <span>14</span>
                                    <span>15</span>
                                    <span>16</span>
                                    <span>17</span>
                                    <span>18</span>
                                </div>

                            </div>
                            <AboutContent />
                        </div>
                    </div>
                </div>
                <div className="grid col-span-5 border border-border-main">
                    <div>
                        <div>
                            <div className="py-4 px-10">
                                <span className="text-text-main">// Code snippet showcase:</span>
                            </div>
                            <div className="code-box border border-border-main">
                                <div className="box-top flex justify-between">
                                    <div className="flex">
                                        <FileIcon />
                                        <div className="flex flex-col">
                                            <span className="text-text-main">@username</span>
                                            <span className="text-text-main">Created 5 months ago</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="text-text-main flex items-baseline"><span className="flex items-center gap-2">
                                            <DetailsIcon /> details</span></div><div className="text-text-main flex items-baseline"><span className="flex items-center gap-2"><StarIcon /> stars</span></div>
                                    </div>
                                </div>
                                <div className="code-container">
                                    <CodeBlock code={`function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
  const value: T = parseModel(chunk._response, chunk._value);
  const initializedChunk: InitializedChunk<T> = (chunk: any);
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
}`} language='javascript' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPageContent