import React from 'react';
import { CodeBlock } from 'react-code-blocks';
import StarIcon from '../../components/icons/StarIcon';
import DetailsIcon from '../../components/icons/DetailsIcon';
import FileIcon from '../../components/icons/FileIcon';

const Codebox = () => {
  return (
    <>
      <div className="code-box border border-border-main">
        <div>
          <div className="box-top flex justify-between">
            <div className="flex">
              <FileIcon />
              <div className="flex flex-col">
                <span className="text-text-main">@username</span>
                <span className="text-text-main">Created 5 months ago</span>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-text-main flex items-baseline">
                <span className="flex items-center gap-2">
                  <DetailsIcon /> details
                </span>
              </div>
              <div className="text-text-main flex items-baseline">
                <span className="flex items-center gap-2">
                  <StarIcon /> stars
                </span>
              </div>
            </div>
          </div>
          <div className="code-container">
            <CodeBlock
              code={`function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
  const value: T = parseModel(chunk._response, chunk._value);
  const initializedChunk: InitializedChunk<T> = (chunk: any);
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
}`}
              language="javascript"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Codebox;
