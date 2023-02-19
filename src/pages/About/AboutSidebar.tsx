import React from 'react'
import MailIcon from '../../components/icons/MailIcon'
import PhoneIcon from '../../components/icons/PhoneIcon'
import FileIcon from '../../components/icons/FileIcon'
import PersonalInfoIcon from '../../components/icons/PersonalInfoIcon'
import CodeIcon from '../../components/icons/CodeIcon'
import HobbiesIcon from '../../components/icons/HobbiesIcon'

const AboutSidebar = () => {
    return (
        <div className="grid grid-flow-col col-span-2 border border-border-main">
            <div className="about-sidebar border border-border-main">
                <div className="flex gap-9 flex-col justify-center items-center pt-4">
                    <CodeIcon className="cursor-pointer" />
                    <PersonalInfoIcon className="cursor-pointer" />
                    <HobbiesIcon className="cursor-pointer" />
                </div>
            </div>
            <div className=" border-border-main">
                <div className="grid">
                    <details className="text-white">
                        <summary className="border-b-2 border-border-main px-4 py-3">personal-info</summary>
                        <div className="pt-4">
                            <div>
                                <details id="bio-details">
                                    <summary className="summary h-[25px] px-4 py-3">
                                        <span
                                            style={{
                                                display: "flex",
                                                position: "relative",
                                                top: "-20px",
                                                left: "18px",
                                                alignItems: "center",
                                                gap: "6px",
                                            }}
                                        >
                                            <FileIcon /> Bio
                                        </span>
                                    </summary>
                                    {/* <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati repellat nam
                </div> */}
                                </details>
                            </div>
                            <div>
                                <details id="interestDetails">
                                    <summary className="summary h-[25px] px-4 py-3">
                                        <span
                                            style={{
                                                display: "flex",
                                                position: "relative",
                                                top: "-20px",
                                                left: "18px",
                                                alignItems: "center",
                                                gap: "6px",
                                            }}
                                            className="text-text-main"
                                        >
                                            {" "}
                                            <FileIcon color={"#43D9AD"} />Interests
                                        </span>
                                    </summary>
                                    <div>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Obcaecati repellat nam
                                    </div>
                                </details>
                            </div>
                            <div>
                                <details id="educationDetails">
                                    <summary className="summary h-[25px] px-4 py-3">
                                        <span
                                            style={{
                                                display: "flex",
                                                position: "relative",
                                                top: "-20px",
                                                left: "18px",
                                                alignItems: "center",
                                                gap: "6px",
                                            }}
                                            className="text-text-main"
                                        >
                                            <FileIcon color={"#3A49A4"} /> education
                                        </span>
                                    </summary>
                                    <div>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Obcaecati repellat nam
                                    </div>
                                </details>
                            </div>
                        </div>
                    </details>

                </div>
                <div>
                    <details className="border-b-2 border-border-main px-4 py-3">
                        <summary className="text-white">contacts</summary>
                        <div>
                            <span className="text-text-main flex gap-2"><MailIcon /> prabhattambe10@gmail.com</span>
                            <span className="text-text-main flex gap-2"><PhoneIcon /> +91 845905292</span>
                        </div>
                    </details>
                </div>
            </div>
        </div>
    )
}

export default AboutSidebar