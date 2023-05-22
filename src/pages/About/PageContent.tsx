import React, { useEffect, useState } from 'react';
import CodeBlock from '../../components/CodeBlock';
import DetailsIcon from '../../components/icons/DetailsIcon';
import FileIcon from '../../components/icons/FileIcon';
import AboutContent from '../About/AboutContent';
import StarIcon from '../../components/icons/StarIcon';
import CloseIcon from '../../components/icons/CloseIcon';
import { useLocation } from 'react-router-dom';

const AboutPageContent = () => {
  const { search } = useLocation();
  const [tab, setTab] = useState('');
  console.log('params', search?.split('=')[1]);
  useEffect(() => {
    setTab(search?.split('=')[1]);
    console.log('parrr', search);
  }, [search]);
  console.log('tab', tab);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-10">
        <div className="grid col-span-5 border border-border-main">
          <div className="">
            <div className="grid grid-flow-col grid-cols-12">
           
              {tab === 'info' ? (
                <AboutContent />
              ) : (
                <div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum delectus molestias animi rerum, adipisci sit corporis.
                  Architecto, ad maiores pariatur quas corporis tenetur modi
                  tempora fuga atque in. Repellat, necessitatibus.
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="grid col-span-5 border border-border-main">
          <div className="flex justify-center items-center">
            <div className="">
              <div className="py-4 px-10">
                <span className="text-text-main">
                  // Code snippet showcase:
                </span>
              </div>
              <div className="code-box p-6">
                <div>
                  <div className="box-top flex justify-between">
                    <div className="flex">
                      <FileIcon />
                      <div className="flex flex-col">
                        <span className="text-text-main">@username</span>
                        <span className="text-text-main">
                          Created 5 months ago
                        </span>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPageContent;
